import * as THREE from 'three';

export type BlendHeuristicMode = 'opaque' | 'normal' | 'additive';
export type BlendHeuristicAlphaStyle = 'none' | 'cutout' | 'soft';

export interface BlendHeuristicMetrics {
  pixelCount: number;
  blackRatio: number;
  veryDarkRatio: number;
  brightRatio: number;
  contentCoverage: number;
  borderBlackRatio: number;
  borderTransparentRatio: number;
  transparentRatio: number;
  semiTransparentRatio: number;
  binaryAlphaRatio: number;
  averageLuma: number;
  lumaStdDev: number;
  brightEnergyRatio: number;
}

export interface BlendHeuristicScores {
  additive: number;
  normal: number;
  opaque: number;
}

export interface BlendHeuristicResult {
  mode: BlendHeuristicMode;
  alphaStyle: BlendHeuristicAlphaStyle;
  confidence: number;
  reason: string;
  metrics: BlendHeuristicMetrics;
  scores: BlendHeuristicScores;
}

const EMPTY_METRICS: BlendHeuristicMetrics = {
  pixelCount: 0,
  blackRatio: 0,
  veryDarkRatio: 0,
  brightRatio: 0,
  contentCoverage: 0,
  borderBlackRatio: 0,
  borderTransparentRatio: 0,
  transparentRatio: 0,
  semiTransparentRatio: 0,
  binaryAlphaRatio: 0,
  averageLuma: 0,
  lumaStdDev: 0,
  brightEnergyRatio: 0,
};

const EMPTY_SCORES: BlendHeuristicScores = {
  additive: 0,
  normal: 0,
  opaque: 0,
};

const ADDITIVE_HINTS = [
  'glow', 'flare', 'spark', 'fire', 'smoke', 'trail', 'aura', 'halo',
  'effect', 'fx', 'energy', 'beam', 'light', 'shine', 'flash', 'particle',
];

const NORMAL_HINTS = [
  'alpha', 'mask', 'decal', 'leaf', 'foliage', 'hair', 'cape', 'cloth',
  'shadow', 'smoke', 'wing',
];

const OPAQUE_HINTS = [
  'skin', 'body', 'armor', 'armour', 'face', 'helm', 'helmet', 'pants',
  'gloves', 'boots', 'shield', 'sword', 'weapon',
];

function clamp01(value: number): number {
  return Math.max(0, Math.min(1, value));
}

function isDrawableSource(
  source: unknown,
): source is CanvasImageSource & { width: number; height: number } {
  if (!source || (typeof source !== 'object' && typeof source !== 'function')) return false;
  const candidate = source as { width?: unknown; height?: unknown };
  return typeof candidate.width === 'number' && typeof candidate.height === 'number';
}

function keywordCount(name: string, keywords: string[]): number {
  let count = 0;
  for (const keyword of keywords) {
    if (name.includes(keyword)) count++;
  }
  return count;
}

function hintBoosts(hintText: string): { additive: number; normal: number; opaque: number; reason: string } {
  const normalized = hintText.toLowerCase();
  const addCount = keywordCount(normalized, ADDITIVE_HINTS);
  const normalCount = keywordCount(normalized, NORMAL_HINTS);
  const opaqueCount = keywordCount(normalized, OPAQUE_HINTS);

  const additive = Math.min(0.16, addCount * 0.055);
  const normal = Math.min(0.12, normalCount * 0.045);
  const opaque = Math.min(0.1, opaqueCount * 0.04);

  const tags: string[] = [];
  if (addCount > 0) tags.push('name:additive');
  if (normalCount > 0) tags.push('name:alpha');
  if (opaqueCount > 0) tags.push('name:opaque');

  return {
    additive,
    normal,
    opaque,
    reason: tags.join(', '),
  };
}

function fallback(reason: string): BlendHeuristicResult {
  return {
    mode: 'opaque',
    alphaStyle: 'none',
    confidence: 0,
    reason,
    metrics: EMPTY_METRICS,
    scores: EMPTY_SCORES,
  };
}

function inferAlphaStyle(metrics: BlendHeuristicMetrics): BlendHeuristicAlphaStyle {
  const alphaPresence = metrics.transparentRatio + metrics.semiTransparentRatio;
  if (alphaPresence < 0.015) return 'none';

  if (metrics.semiTransparentRatio > 0.11) {
    return 'soft';
  }

  if (
    metrics.transparentRatio > 0.08 &&
    metrics.binaryAlphaRatio > 0.88 &&
    metrics.semiTransparentRatio < 0.075
  ) {
    return 'cutout';
  }

  if (metrics.semiTransparentRatio > 0.045) {
    return 'soft';
  }

  return 'cutout';
}

function pickBestMode(scores: BlendHeuristicScores, alphaPresenceScore: number): BlendHeuristicMode {
  if (alphaPresenceScore > 0.18 && scores.additive < 0.82) {
    return 'normal';
  }

  if (scores.additive > 0.72 && alphaPresenceScore < 0.09) {
    return 'additive';
  }

  if (scores.normal >= scores.additive + 0.08 && scores.normal >= 0.36) {
    return 'normal';
  }

  if (scores.additive >= scores.normal + 0.06 && scores.additive >= 0.44) {
    return 'additive';
  }

  if (scores.opaque >= scores.normal && scores.opaque >= scores.additive) {
    return 'opaque';
  }

  return scores.normal >= scores.additive ? 'normal' : 'additive';
}

function confidenceFromScores(scores: BlendHeuristicScores, mode: BlendHeuristicMode): number {
  const ordered = [scores.additive, scores.normal, scores.opaque].sort((a, b) => b - a);
  const top = ordered[0];
  const second = ordered[1] ?? 0;
  const margin = top - second;
  const modeScore = scores[mode];
  return clamp01(modeScore * 0.72 + margin * 0.55);
}

export function describeBlendMode(mode: BlendHeuristicMode): string {
  switch (mode) {
    case 'additive':
      return 'Additive';
    case 'normal':
      return 'Normal';
    default:
      return 'Opaque';
  }
}

export function detectBlendModeFromTexture(texture: THREE.Texture, extraHint = ''): BlendHeuristicResult {
  const cachedMetrics = texture.userData?.blendHeuristicMetrics as BlendHeuristicMetrics | undefined;
  let metrics: BlendHeuristicMetrics;

  if (cachedMetrics) {
    metrics = cachedMetrics;
  } else {
    if (typeof document === 'undefined') {
      return fallback('No DOM environment');
    }

    const image = texture.image;
    if (!isDrawableSource(image) || image.width < 1 || image.height < 1) {
      return fallback('Texture image is not drawable');
    }

    const sourceWidth = Math.max(1, Math.floor(image.width));
    const sourceHeight = Math.max(1, Math.floor(image.height));
    const maxSamplePixels = 192 * 192;
    const downscale = Math.min(1, Math.sqrt(maxSamplePixels / (sourceWidth * sourceHeight)));
    const sampleWidth = Math.max(1, Math.floor(sourceWidth * downscale));
    const sampleHeight = Math.max(1, Math.floor(sourceHeight * downscale));

    const canvas = document.createElement('canvas');
    canvas.width = sampleWidth;
    canvas.height = sampleHeight;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) {
      return fallback('2D canvas context unavailable');
    }

    try {
      ctx.clearRect(0, 0, sampleWidth, sampleHeight);
      ctx.drawImage(image, 0, 0, sampleWidth, sampleHeight);
    } catch {
      return fallback('drawImage failed for texture source');
    }

    const pixels = ctx.getImageData(0, 0, sampleWidth, sampleHeight).data;
    const total = pixels.length / 4;
    if (total === 0) {
      return fallback('Texture has zero sampled pixels');
    }

    const borderThickness = Math.max(1, Math.floor(Math.min(sampleWidth, sampleHeight) * 0.03));

    let black = 0;
    let veryDark = 0;
    let bright = 0;
    let content = 0;
    let transparent = 0;
    let semiTransparent = 0;
    let nearZeroAlpha = 0;
    let nearFullAlpha = 0;
    let borderCount = 0;
    let borderBlack = 0;
    let borderTransparent = 0;
    let lumaSum = 0;
    let lumaSqSum = 0;
    let brightLumaSum = 0;
    let visibleCount = 0;

    for (let y = 0; y < sampleHeight; y++) {
      for (let x = 0; x < sampleWidth; x++) {
        const idx = (y * sampleWidth + x) * 4;
        const r = pixels[idx];
        const g = pixels[idx + 1];
        const b = pixels[idx + 2];
        const a = pixels[idx + 3] / 255;

        const maxChannel = Math.max(r, g, b);
        const minChannel = Math.min(r, g, b);
        const luma = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
        const saturation = maxChannel === 0 ? 0 : (maxChannel - minChannel) / maxChannel;

        const isTransparent = a < 0.06;
        const isSemiTransparent = !isTransparent && a < 0.95;
        const isVeryDark = a > 0.02 && maxChannel < 42 && luma < 0.12;
        const isBlack = a > 0.02 && maxChannel < 28 && luma < 0.08;
        const isBright = a > 0.12 && maxChannel > 168 && luma > 0.46;
        const isContent = a > 0.14 && (luma > 0.11 || saturation > 0.16);

        if (isTransparent) transparent++;
        if (isSemiTransparent) semiTransparent++;
        if (a < 0.04) nearZeroAlpha++;
        if (a > 0.96) nearFullAlpha++;

        if (isBlack) black++;
        if (isVeryDark) veryDark++;
        if (isBright) bright++;
        if (isContent) content++;

        if (a > 0.02) {
          const weightedLuma = luma * a;
          lumaSum += weightedLuma;
          lumaSqSum += weightedLuma * weightedLuma;
          visibleCount++;
          if (isBright) brightLumaSum += weightedLuma;
        }

        const isBorder =
          x < borderThickness ||
          y < borderThickness ||
          x >= sampleWidth - borderThickness ||
          y >= sampleHeight - borderThickness;

        if (isBorder) {
          borderCount++;
          if (isBlack || isVeryDark) borderBlack++;
          if (isTransparent) borderTransparent++;
        }
      }
    }

    const averageLuma = visibleCount > 0 ? lumaSum / visibleCount : 0;
    const lumaVariance = visibleCount > 0 ? lumaSqSum / visibleCount - averageLuma * averageLuma : 0;
    const lumaStdDev = Math.sqrt(Math.max(0, lumaVariance));

    metrics = {
      pixelCount: total,
      blackRatio: black / total,
      veryDarkRatio: veryDark / total,
      brightRatio: bright / total,
      contentCoverage: content / total,
      borderBlackRatio: borderCount > 0 ? borderBlack / borderCount : 0,
      borderTransparentRatio: borderCount > 0 ? borderTransparent / borderCount : 0,
      transparentRatio: transparent / total,
      semiTransparentRatio: semiTransparent / total,
      binaryAlphaRatio: (nearZeroAlpha + nearFullAlpha) / total,
      averageLuma,
      lumaStdDev,
      brightEnergyRatio: lumaSum > 0 ? brightLumaSum / lumaSum : 0,
    };

    texture.userData.blendHeuristicMetrics = metrics;
  }

  const hintText = `${texture.name || ''} ${extraHint || ''}`.trim();
  const hints = hintBoosts(hintText);

  const alphaPresenceScore = clamp01(
    metrics.transparentRatio * 2.35 +
    metrics.semiTransparentRatio * 1.85 +
    metrics.borderTransparentRatio * 0.72,
  );

  const softAlphaScore = clamp01(
    metrics.semiTransparentRatio * 2.15 + (1 - metrics.binaryAlphaRatio) * 0.55,
  );

  const cutoutAlphaScore = clamp01(
    metrics.transparentRatio * 1.8 +
    metrics.borderTransparentRatio * 0.9 +
    metrics.binaryAlphaRatio * 0.42 -
    metrics.semiTransparentRatio * 1.5,
  );

  let additiveScore = 0;
  additiveScore += metrics.borderBlackRatio * 0.28;
  additiveScore += metrics.blackRatio * 0.2;
  additiveScore += metrics.veryDarkRatio * 0.08;
  additiveScore += clamp01((0.48 - metrics.contentCoverage) / 0.48) * 0.2;
  additiveScore += clamp01((metrics.brightEnergyRatio - 0.22) / 0.45) * 0.16;
  additiveScore += clamp01((metrics.lumaStdDev - 0.16) / 0.42) * 0.08;
  additiveScore += hints.additive;

  let additivePenalty = 0;
  additivePenalty += clamp01(alphaPresenceScore * 0.85 + metrics.semiTransparentRatio * 1.4);
  if (metrics.brightRatio < 0.004) additivePenalty += 0.22;
  if (metrics.contentCoverage > 0.62) additivePenalty += 0.18;
  if (metrics.averageLuma > 0.46) additivePenalty += 0.15;

  additiveScore = clamp01(additiveScore - additivePenalty);

  let normalScore = 0;
  normalScore += alphaPresenceScore * 0.68;
  normalScore += softAlphaScore * 0.18;
  normalScore += cutoutAlphaScore * 0.11;
  normalScore += hints.normal;
  if (additiveScore > 0.72 && alphaPresenceScore < 0.05) {
    normalScore -= 0.12;
  }
  normalScore = clamp01(normalScore);

  let opaqueScore = 0;
  opaqueScore += (1 - alphaPresenceScore) * 0.56;
  opaqueScore += clamp01((metrics.contentCoverage - 0.33) / 0.67) * 0.24;
  opaqueScore += clamp01((metrics.averageLuma - 0.09) / 0.75) * 0.1;
  opaqueScore += (1 - additiveScore) * 0.1;
  opaqueScore += hints.opaque;
  opaqueScore = clamp01(opaqueScore);

  const scores: BlendHeuristicScores = {
    additive: additiveScore,
    normal: normalScore,
    opaque: opaqueScore,
  };

  const mode = pickBestMode(scores, alphaPresenceScore);
  const alphaStyle = mode === 'normal' ? inferAlphaStyle(metrics) : 'none';
  const confidence = confidenceFromScores(scores, mode);

  const reasonParts: string[] = [];
  if (mode === 'additive') {
    reasonParts.push('dark border + sparse bright energy');
  } else if (mode === 'normal') {
    reasonParts.push(`alpha detected (${alphaStyle})`);
  } else {
    reasonParts.push('solid surface profile');
  }
  if (hints.reason) {
    reasonParts.push(hints.reason);
  }

  return {
    mode,
    alphaStyle,
    confidence,
    reason: reasonParts.join('; '),
    metrics,
    scores,
  };
}

export function applyBlendModeToMaterial(
  material: THREE.Material,
  decision: BlendHeuristicMode | BlendHeuristicResult,
): void {
  const mode = typeof decision === 'string' ? decision : decision.mode;
  const alphaStyle =
    typeof decision === 'string'
      ? 'none'
      : decision.mode === 'normal'
        ? decision.alphaStyle
        : 'none';

  if (mode === 'additive') {
    material.blending = THREE.AdditiveBlending;
    material.transparent = true;
    material.depthWrite = false;
    if ('alphaTest' in material) {
      (material as THREE.MeshPhongMaterial).alphaTest = 0;
    }
    material.needsUpdate = true;
    return;
  }

  if (mode === 'normal') {
    material.blending = THREE.NormalBlending;
    material.transparent = true;
    if (alphaStyle === 'cutout') {
      material.depthWrite = true;
      if ('alphaTest' in material) {
        (material as THREE.MeshPhongMaterial).alphaTest = 0.34;
      }
    } else {
      material.depthWrite = false;
      if ('alphaTest' in material) {
        (material as THREE.MeshPhongMaterial).alphaTest = 0.03;
      }
    }
    material.needsUpdate = true;
    return;
  }

  material.blending = THREE.NoBlending;
  material.transparent = false;
  material.depthWrite = true;
  if ('alphaTest' in material) {
    (material as THREE.MeshPhongMaterial).alphaTest = 0;
  }
  material.needsUpdate = true;
}
