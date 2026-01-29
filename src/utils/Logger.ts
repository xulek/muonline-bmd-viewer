/**
 * Logging utility with configurable levels.
 * In production builds, debug logs are automatically disabled.
 */

export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
  NONE = 4,
}

class Logger {
  private level: LogLevel;
  private isDev: boolean;

  constructor() {
    // Check if running in development mode
    // In production builds, NODE_ENV or similar will be 'production'
    this.isDev = process.env.NODE_ENV !== 'production';
    // Set default level based on environment
    this.level = this.isDev ? LogLevel.DEBUG : LogLevel.INFO;
  }

  /**
   * Set the minimum log level to display
   */
  setLevel(level: LogLevel): void {
    this.level = level;
  }

  /**
   * Get current log level
   */
  getLevel(): LogLevel {
    return this.level;
  }

  /**
   * Debug log - only shown in development
   */
  debug(...args: any[]): void {
    if (this.level <= LogLevel.DEBUG && this.isDev) {
      console.log('[DEBUG]', ...args);
    }
  }

  /**
   * Info log
   */
  info(...args: any[]): void {
    if (this.level <= LogLevel.INFO) {
      console.log('[INFO]', ...args);
    }
  }

  /**
   * Warning log
   */
  warn(...args: any[]): void {
    if (this.level <= LogLevel.WARN) {
      console.warn('[WARN]', ...args);
    }
  }

  /**
   * Error log - always shown unless level is NONE
   */
  error(...args: any[]): void {
    if (this.level <= LogLevel.ERROR) {
      console.error('[ERROR]', ...args);
    }
  }

  /**
   * Grouped debug log (collapsed)
   */
  groupDebug(label: string, ...args: any[]): void {
    if (this.level <= LogLevel.DEBUG && this.isDev) {
      console.groupCollapsed(`[DEBUG] ${label}`, ...args);
    }
  }

  /**
   * End grouped log
   */
  groupEnd(): void {
    if (this.level <= LogLevel.DEBUG && this.isDev) {
      console.groupEnd();
    }
  }

  /**
   * Time a block of code (debug only)
   */
  time(label: string): void {
    if (this.level <= LogLevel.DEBUG && this.isDev) {
      console.time(`[DEBUG] ${label}`);
    }
  }

  /**
   * End timing
   */
  timeEnd(label: string): void {
    if (this.level <= LogLevel.DEBUG && this.isDev) {
      console.timeEnd(`[DEBUG] ${label}`);
    }
  }
}

// Export singleton instance
export const logger = new Logger();
