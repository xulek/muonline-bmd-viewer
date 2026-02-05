/**
 * File validation utilities to prevent loading malicious or invalid files.
 */

// Maximum file size: 50MB
const MAX_FILE_SIZE = 50 * 1024 * 1024;

// BMD header: "BMD" + version byte
const BMD_MAGIC = new Uint8Array([0x42, 0x4D, 0x44]); // "BMD"
const SUPPORTED_BMD_VERSIONS = new Set([0x0A, 0x0C, 0x0F]);

export class FileValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'FileValidationError';
  }
}

export class FileValidator {
  /**
   * Validates file size
   * @throws {FileValidationError} if file is too large
   */
  static validateFileSize(file: File | ArrayBuffer, filename?: string): void {
    const size = file instanceof File ? file.size : file.byteLength;
    const name = file instanceof File ? file.name : filename || 'unknown';

    if (size > MAX_FILE_SIZE) {
      throw new FileValidationError(
        `File "${name}" is too large (${(size / (1024 * 1024)).toFixed(2)} MB). Maximum size is ${MAX_FILE_SIZE / (1024 * 1024)} MB.`
      );
    }

    if (size === 0) {
      throw new FileValidationError(`File "${name}" is empty.`);
    }
  }

  /**
   * Validates BMD file header
   * @throws {FileValidationError} if header is invalid
   */
  static validateBMDHeader(buffer: ArrayBuffer, filename?: string): void {
    const name = filename || 'unknown';

    if (buffer.byteLength < 4) {
      throw new FileValidationError(
        `File "${name}" is too small to be a valid BMD file (minimum 4 bytes required).`
      );
    }

    const header = new Uint8Array(buffer, 0, 4);
    const headerHex = Array.from(header)
      .map(b => b.toString(16).padStart(2, '0'))
      .join(' ');

    const hasValidMagic = BMD_MAGIC.every((byte, index) => byte === header[index]);
    if (!hasValidMagic) {
      throw new FileValidationError(
        `File "${name}" does not appear to be a valid BMD file. Header: ${headerHex}`
      );
    }

    const version = header[3];
    if (!SUPPORTED_BMD_VERSIONS.has(version)) {
      const versionHex = `0x${version.toString(16).padStart(2, '0')}`;
      throw new FileValidationError(
        `File "${name}" has unsupported BMD version ${versionHex}. Supported versions: 0x0A, 0x0C, 0x0F.`
      );
    }
  }

  /**
   * Validates texture file extension
   */
  static validateTextureExtension(filename: string): boolean {
    const ext = filename.toLowerCase().split('.').pop();
    const validExtensions = ['jpg', 'jpeg', 'png', 'tga', 'ozj', 'ozt'];
    return validExtensions.includes(ext || '');
  }

  /**
   * Validates image file header (basic check)
   */
  static validateImageHeader(buffer: ArrayBuffer, filename: string): void {
    if (buffer.byteLength < 4) {
      throw new FileValidationError(`Image file "${filename}" is too small.`);
    }

    const header = new Uint8Array(buffer, 0, 8);
    const ext = filename.toLowerCase().split('.').pop();

    // PNG signature
    if (ext === 'png') {
      const pngSignature = [0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A];
      const isValid = pngSignature.every((byte, i) => header[i] === byte);
      if (!isValid) {
        throw new FileValidationError(`File "${filename}" is not a valid PNG image.`);
      }
    }

    // JPEG signature
    if (ext === 'jpg' || ext === 'jpeg') {
      const isValid = header[0] === 0xFF && header[1] === 0xD8 && header[2] === 0xFF;
      if (!isValid) {
        throw new FileValidationError(`File "${filename}" is not a valid JPEG image.`);
      }
    }

    // TGA has no reliable signature, skip validation
    // OZJ/OZT are custom formats, skip validation
  }

  /**
   * Full validation for BMD files
   */
  static async validateBMDFile(file: File): Promise<void> {
    // Validate size
    this.validateFileSize(file);

    // Read first 4 bytes to check header
    const headerBuffer = await file.slice(0, 4).arrayBuffer();
    this.validateBMDHeader(headerBuffer, file.name);
  }

  /**
   * Full validation for texture files
   */
  static async validateTextureFile(file: File): Promise<void> {
    // Validate size
    this.validateFileSize(file);

    // Validate extension
    if (!this.validateTextureExtension(file.name)) {
      throw new FileValidationError(
        `File "${file.name}" has an unsupported extension. Supported formats: JPG, PNG, TGA, OZJ, OZT`
      );
    }

    // Read header for validation
    const headerSize = Math.min(file.size, 8);
    const headerBuffer = await file.slice(0, headerSize).arrayBuffer();
    this.validateImageHeader(headerBuffer, file.name);
  }

  /**
   * Sanitizes file path to prevent directory traversal attacks
   */
  static sanitizeFilePath(path: string): string {
    // Remove any directory traversal attempts
    return path.replace(/\.\.[/\\]/g, '').replace(/^[/\\]+/, '');
  }
}
