import LoggerManager from '../srp/LoggerManager'
import StoreManager from '../srp/StoreManager'

export default class DbManager implements StoreManager {
  logger: LoggerManager

  constructor(logger: LoggerManager) {
    this.logger = logger
  }

  public async save(id: number, message: string): Promise<any> {
    this.logger.saving(id)
  }

  public read(id: number): string {
    this.logger.readingStore(id)
    return ''
  }

  // Violation of the LSP
  public getFileInfo(id: number): string {
    throw new Error('Method not implemented.')
  }
}
