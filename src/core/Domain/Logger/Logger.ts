export interface Logger {
  log(message: string): void
  info(message: string): void
  warning(message: string): void
  error(message: string): void
  critical(message: string): void
}

export const Logger = Symbol('Logger')
