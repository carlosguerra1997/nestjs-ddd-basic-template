import * as fs from 'fs'
import * as path from 'path'

import { Injectable } from '@nestjs/common'

import { Logger } from '@core/Domain/Logger/Logger'

@Injectable()
export class FileLogger implements Logger {
  private readonly logDirectory: string = './var/log'
  private logFilePath: string

  private readonly LOG_LEVEL = 'LOG'
  private readonly INFO_LEVEL = 'INFO'
  private readonly WARNING_LEVEL = 'WARNING'
  private readonly ERROR_LEVEL = 'ERROR'
  private readonly CRITICAL_LEVEL = 'CRITICAL'

  log(message: string): void {
    this.writeLog(this.LOG_LEVEL, message)
  }

  info(message: string): void {
    this.writeLog(this.INFO_LEVEL, message)
  }

  warning(message: string): void {
    this.writeLog(this.WARNING_LEVEL, message)
  }

  error(message: string): void {
    this.writeLog(this.ERROR_LEVEL, message)
  }

  critical(message: string): void {
    this.writeLog(this.CRITICAL_LEVEL, message)
  }

  private getCurrentDateString(): string {
    const date = new Date().toLocaleDateString('es-ES', { 
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
    return date.split('/').join('-')
  }

  private getLogFilePath(): void {
    const dateString = this.getCurrentDateString()
    this.logFilePath = path.join(this.logDirectory, `${dateString}.log`)
    
    if (!fs.existsSync(this.logDirectory)) {
      fs.mkdirSync(this.logDirectory, { recursive: true })
    }
  }

  private writeLog(level: string, message: string): void  {
    this.getLogFilePath()
    fs.appendFileSync(this.logFilePath, `${level}: ${message}\n`)
  }
}