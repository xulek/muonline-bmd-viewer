/**
 * Application-wide constants and configuration values.
 */

export const CONSTANTS = {
  // File validation
  FILE: {
    MAX_SIZE_MB: 50,
    MAX_SIZE_BYTES: 50 * 1024 * 1024,
  },

  // Texture loading
  TEXTURE: {
    MAX_VERTEX_NORMALS_LINES: 2000, // Maximum lines to display for vertex normals helper
    SUPPORTED_EXTENSIONS: ['jpg', 'jpeg', 'png', 'tga', 'ozj', 'ozt'] as const,
  },

  // Character scene
  CHARACTER: {
    HEIGHT_OFFSET: 80, // Vertical offset for character positioning
    DEFAULT_SCALE: 1.0,
    DEFAULT_ANIMATION_SPEED: 0.2,
  },

  // Item properties
  ITEM: {
    ALPHA_THRESHOLD: 40, // Threshold for alpha transparency in item shaders
    DEFAULT_GLOW_COLOR: { r: 1.0, g: 1.0, b: 1.0 }, // White glow for items
    DEFAULT_EXCELLENT_INTENSITY: 1.0,
  },

  // Camera settings
  CAMERA: {
    FOV: 55,
    NEAR: 0.1,
    FAR: 10000,
  },

  // GIF export
  GIF: {
    QUALITY: 10,
    WORKERS: 2,
    DEFAULT_WIDTH: 512,
    DEFAULT_HEIGHT: 512,
    DEFAULT_FPS: 15,
    DEFAULT_DURATION_SECONDS: 3,
  },

  // Grid helper
  GRID: {
    SIZE: 500,
    DIVISIONS: 10,
  },

  // Lighting
  LIGHTS: {
    AMBIENT_INTENSITY: 0.5,
    DIRECTIONAL_INTENSITY: 0.8,
    DIRECTIONAL_POSITION: { x: 10, y: 10, z: 10 },
  },

  // UI refresh rates
  UI: {
    NORMALS_UPDATE_INTERVAL: 2, // Update vertex normals every N frames
    DIAGNOSTIC_UPDATE_THROTTLE: 100, // ms
  },
} as const;

/**
 * Type-safe texture extensions
 */
export type TextureExtension = typeof CONSTANTS.TEXTURE.SUPPORTED_EXTENSIONS[number];
