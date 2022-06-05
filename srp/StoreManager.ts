import {
  promises as fsp,
  existsSync,
  readFileSync,
} from 'fs'
import path from 'path'
import LoggerManager from './LoggerManager'

export default class StoreManager {
  directory?: string
  logger: LoggerManager

  constructor(directory: string, logger: LoggerManager) {
    this.directory = directory
    this.logger = logger
  }

  public async save(id: number, message: string): Promise<any> {
    try {
      this.logger.saving(id)
      const fileFullName = this.getFileInfo(id)
      await fsp.writeFile(fileFullName, message)
      this.logger.saved(id)
    } catch (e) {
      this.logger.errorSaving(id)
    }
  }

  public read(id: number): string {
    this.logger.readingStore(id)
    const fileFullName = this.getFileInfo(id)
    const exists = existsSync(fileFullName)
    if(!exists) {
      this.logger.messageNotFound(id)
      return ''
    }
    return readFileSync(fileFullName, { encoding: 'ASCII' })
  }

  public getFileInfo(id: number) {
    return path.join(__dirname, this.directory, `${id}.txt`)
  }
}
