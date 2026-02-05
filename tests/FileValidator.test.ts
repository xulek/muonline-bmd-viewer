import { FileValidator, FileValidationError } from '../src/utils/FileValidator';

describe('FileValidator', () => {
  describe('validateFileSize', () => {
    it('should throw error for files exceeding max size', () => {
      const largeBuffer = new ArrayBuffer(51 * 1024 * 1024); // 51MB
      expect(() => FileValidator.validateFileSize(largeBuffer, 'test.bmd')).toThrow(FileValidationError);
      expect(() => FileValidator.validateFileSize(largeBuffer, 'test.bmd')).toThrow(/too large/);
    });

    it('should throw error for empty files', () => {
      const emptyBuffer = new ArrayBuffer(0);
      expect(() => FileValidator.validateFileSize(emptyBuffer, 'test.bmd')).toThrow(FileValidationError);
      expect(() => FileValidator.validateFileSize(emptyBuffer, 'test.bmd')).toThrow(/empty/);
    });

    it('should accept valid file sizes', () => {
      const validBuffer = new ArrayBuffer(1024 * 1024); // 1MB
      expect(() => FileValidator.validateFileSize(validBuffer, 'test.bmd')).not.toThrow();
    });
  });

  describe('validateBMDHeader', () => {
    it('should throw error for buffers smaller than 4 bytes', () => {
      const tinyBuffer = new ArrayBuffer(2);
      expect(() => FileValidator.validateBMDHeader(tinyBuffer, 'test.bmd')).toThrow(FileValidationError);
      expect(() => FileValidator.validateBMDHeader(tinyBuffer, 'test.bmd')).toThrow(/too small/);
    });

    it('should throw error for invalid BMD headers', () => {
      const invalidBuffer = new ArrayBuffer(4);
      const view = new Uint8Array(invalidBuffer);
      view[0] = 0x00;
      view[1] = 0x00;
      view[2] = 0x00;
      view[3] = 0x00;

      expect(() => FileValidator.validateBMDHeader(invalidBuffer, 'test.bmd')).toThrow(FileValidationError);
      expect(() => FileValidator.validateBMDHeader(invalidBuffer, 'test.bmd')).toThrow(/not appear to be a valid BMD/);
    });

    it('should accept valid BMD header (version 0x0A)', () => {
      const validBuffer = new ArrayBuffer(4);
      const view = new Uint8Array(validBuffer);
      view[0] = 0x42; // 'B'
      view[1] = 0x4D; // 'M'
      view[2] = 0x44; // 'D'
      view[3] = 0x0A;

      expect(() => FileValidator.validateBMDHeader(validBuffer, 'test.bmd')).not.toThrow();
    });

    it('should accept valid BMD header (version 0x0C)', () => {
      const validBuffer = new ArrayBuffer(4);
      const view = new Uint8Array(validBuffer);
      view[0] = 0x42; // 'B'
      view[1] = 0x4D; // 'M'
      view[2] = 0x44; // 'D'
      view[3] = 0x0C;

      expect(() => FileValidator.validateBMDHeader(validBuffer, 'test.bmd')).not.toThrow();
    });

    it('should accept valid BMD header (version 0x0F)', () => {
      const validBuffer = new ArrayBuffer(4);
      const view = new Uint8Array(validBuffer);
      view[0] = 0x42; // 'B'
      view[1] = 0x4D; // 'M'
      view[2] = 0x44; // 'D'
      view[3] = 0x0F;

      expect(() => FileValidator.validateBMDHeader(validBuffer, 'test.bmd')).not.toThrow();
    });
  });

  describe('validateTextureExtension', () => {
    it('should accept valid texture extensions', () => {
      expect(FileValidator.validateTextureExtension('texture.jpg')).toBe(true);
      expect(FileValidator.validateTextureExtension('texture.jpeg')).toBe(true);
      expect(FileValidator.validateTextureExtension('texture.png')).toBe(true);
      expect(FileValidator.validateTextureExtension('texture.tga')).toBe(true);
      expect(FileValidator.validateTextureExtension('texture.ozj')).toBe(true);
      expect(FileValidator.validateTextureExtension('texture.ozt')).toBe(true);
    });

    it('should reject invalid extensions', () => {
      expect(FileValidator.validateTextureExtension('texture.bmp')).toBe(false);
      expect(FileValidator.validateTextureExtension('texture.gif')).toBe(false);
      expect(FileValidator.validateTextureExtension('texture.txt')).toBe(false);
    });

    it('should be case insensitive', () => {
      expect(FileValidator.validateTextureExtension('TEXTURE.JPG')).toBe(true);
      expect(FileValidator.validateTextureExtension('Texture.PnG')).toBe(true);
    });
  });

  describe('validateImageHeader', () => {
    it('should throw error for PNG with invalid header', () => {
      const buffer = new ArrayBuffer(8);
      const view = new Uint8Array(buffer);
      view.fill(0x00);

      expect(() => FileValidator.validateImageHeader(buffer, 'test.png')).toThrow(FileValidationError);
      expect(() => FileValidator.validateImageHeader(buffer, 'test.png')).toThrow(/not a valid PNG/);
    });

    it('should accept valid PNG header', () => {
      const buffer = new ArrayBuffer(8);
      const view = new Uint8Array(buffer);
      view[0] = 0x89;
      view[1] = 0x50; // 'P'
      view[2] = 0x4E; // 'N'
      view[3] = 0x47; // 'G'
      view[4] = 0x0D;
      view[5] = 0x0A;
      view[6] = 0x1A;
      view[7] = 0x0A;

      expect(() => FileValidator.validateImageHeader(buffer, 'test.png')).not.toThrow();
    });

    it('should throw error for JPEG with invalid header', () => {
      const buffer = new ArrayBuffer(8);
      const view = new Uint8Array(buffer);
      view.fill(0x00);

      expect(() => FileValidator.validateImageHeader(buffer, 'test.jpg')).toThrow(FileValidationError);
      expect(() => FileValidator.validateImageHeader(buffer, 'test.jpg')).toThrow(/not a valid JPEG/);
    });

    it('should accept valid JPEG header', () => {
      const buffer = new ArrayBuffer(8);
      const view = new Uint8Array(buffer);
      view[0] = 0xFF;
      view[1] = 0xD8;
      view[2] = 0xFF;

      expect(() => FileValidator.validateImageHeader(buffer, 'test.jpg')).not.toThrow();
    });
  });

  describe('sanitizeFilePath', () => {
    it('should remove directory traversal attempts', () => {
      expect(FileValidator.sanitizeFilePath('../etc/passwd')).toBe('etc/passwd');
      expect(FileValidator.sanitizeFilePath('..\\windows\\system32')).toBe('windows\\system32'); // backslashes preserved
      expect(FileValidator.sanitizeFilePath('../../dangerous')).toBe('dangerous');
    });

    it('should remove leading slashes', () => {
      expect(FileValidator.sanitizeFilePath('/etc/passwd')).toBe('etc/passwd');
      expect(FileValidator.sanitizeFilePath('\\windows\\system32')).toBe('windows\\system32'); // backslashes preserved
    });

    it('should leave valid paths unchanged', () => {
      expect(FileValidator.sanitizeFilePath('textures/player/head.jpg')).toBe('textures/player/head.jpg');
      expect(FileValidator.sanitizeFilePath('model.bmd')).toBe('model.bmd');
    });
  });
});
