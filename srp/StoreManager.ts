import {
  promises as fsp,
  existsSync,
  readFileSync,
} from 'fs'
import path from 'path'
import { LoggerManager } from './LoggerManager'

export class StoreManager {
  directory?: string
  logger: LoggerManager

  constructor(directory: string, logger: LoggerManager) {
    this.directory = directory
    this.logger = logger
  }

  public async save(id: number, message: string): Promise<any> {
    try {
      this.logger.saving(id)
      const filePath = this.getFilePath(id)
      await fsp.writeFile(filePath, message)
      this.logger.saved(id)
    } catch (e) {
      this.logger.errorSaving(id)
    }
  }

  public read(id: number): string {
    this.logger.readingStore(id)
    const filePath = this.getFilePath(id)
    const exists = existsSync(filePath)
    if(!exists) {
      this.logger.messageNotFound(id)
      return ''
    }
    return readFileSync(filePath, { encoding: 'ASCII' })
  }

  public getFilePath(id: number) {
    return path.join(__dirname, this.directory, `${id}.txt`)
  }
}
