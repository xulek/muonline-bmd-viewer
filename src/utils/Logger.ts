/**
 * Logging utility with configurable levels.
 * Debug output is disabled in packaged/non-local builds by default.
 */

export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
  NONE = 4,
}

function detectDevelopmentMode(): boolean {
  const processEnvironment = (globalThis as typeof globalThis & {
    process?: { env?: { NODE_ENV?: string } };
  }).process?.env?.NODE_ENV;

  if (processEnvironment) {
    return processEnvironment !== 'production';
  }

  if (typeof window === 'undefined') {
    return false;
  }

  return window.location.protocol === 'http:' &&
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
}

class Logger {
  private level: LogLevel;
  private readonly isDev: boolean;

  constructor() {
    this.isDev = detectDevelopmentMode();
    this.level = this.isDev ? LogLevel.DEBUG : LogLevel.INFO;
  }

  setLevel(level: LogLevel): void {
    this.level = level;
  }

  getLevel(): LogLevel {
    return this.level;
  }

  isDebugEnabled(): boolean {
    return this.isDev && this.level <= LogLevel.DEBUG;
  }

  debug(...args: unknown[]): void {
    if (this.level <= LogLevel.DEBUG && this.isDev) {
      console.debug('[DEBUG]', ...args);
    }
  }

  info(...args: unknown[]): void {
    if (this.level <= LogLevel.INFO) {
      console.info('[INFO]', ...args);
    }
  }

  warn(...args: unknown[]): void {
    if (this.level <= LogLevel.WARN) {
      console.warn('[WARN]', ...args);
    }
  }

  error(...args: unknown[]): void {
    if (this.level <= LogLevel.ERROR) {
      console.error('[ERROR]', ...args);
    }
  }

  groupDebug(label: string, ...args: unknown[]): void {
    if (this.level <= LogLevel.DEBUG && this.isDev) {
      console.groupCollapsed(`[DEBUG] ${label}`, ...args);
    }
  }

  groupEnd(): void {
    if (this.level <= LogLevel.DEBUG && this.isDev) {
      console.groupEnd();
    }
  }

  time(label: string): void {
    if (this.level <= LogLevel.DEBUG && this.isDev) {
      console.time(`[DEBUG] ${label}`);
    }
  }

  timeEnd(label: string): void {
    if (this.level <= LogLevel.DEBUG && this.isDev) {
      console.timeEnd(`[DEBUG] ${label}`);
    }
  }
}

export const logger = new Logger();
