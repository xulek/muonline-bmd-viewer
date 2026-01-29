import { logger, LogLevel } from '../src/utils/Logger';

describe('Logger', () => {
  let consoleLogSpy: jest.SpyInstance;
  let consoleWarnSpy: jest.SpyInstance;
  let consoleErrorSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
    consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
    consoleWarnSpy.mockRestore();
    consoleErrorSpy.mockRestore();
  });

  describe('log levels', () => {
    it('should respect log level settings', () => {
      logger.setLevel(LogLevel.WARN);

      logger.debug('debug message');
      logger.info('info message');
      logger.warn('warn message');
      logger.error('error message');

      expect(consoleLogSpy).not.toHaveBeenCalled();
      expect(consoleWarnSpy).toHaveBeenCalledWith('[WARN]', 'warn message');
      expect(consoleErrorSpy).toHaveBeenCalledWith('[ERROR]', 'error message');
    });

    it('should allow changing log level', () => {
      logger.setLevel(LogLevel.ERROR);
      expect(logger.getLevel()).toBe(LogLevel.ERROR);

      logger.setLevel(LogLevel.DEBUG);
      expect(logger.getLevel()).toBe(LogLevel.DEBUG);
    });

    it('should suppress all logs when set to NONE', () => {
      logger.setLevel(LogLevel.NONE);

      logger.debug('debug');
      logger.info('info');
      logger.warn('warn');
      logger.error('error');

      expect(consoleLogSpy).not.toHaveBeenCalled();
      expect(consoleWarnSpy).not.toHaveBeenCalled();
      expect(consoleErrorSpy).not.toHaveBeenCalled();
    });
  });

  describe('logging methods', () => {
    beforeEach(() => {
      logger.setLevel(LogLevel.DEBUG);
    });

    it('should format debug logs correctly', () => {
      logger.debug('test message', 123);
      expect(consoleLogSpy).toHaveBeenCalledWith('[DEBUG]', 'test message', 123);
    });

    it('should format info logs correctly', () => {
      logger.info('test message', { key: 'value' });
      expect(consoleLogSpy).toHaveBeenCalledWith('[INFO]', 'test message', { key: 'value' });
    });

    it('should format warn logs correctly', () => {
      logger.warn('test warning');
      expect(consoleWarnSpy).toHaveBeenCalledWith('[WARN]', 'test warning');
    });

    it('should format error logs correctly', () => {
      const error = new Error('test error');
      logger.error('error occurred', error);
      expect(consoleErrorSpy).toHaveBeenCalledWith('[ERROR]', 'error occurred', error);
    });
  });
});
