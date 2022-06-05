import LoggerManager from '../srp/LoggerManager'
import Store from './Store'

export default class DbManager implements Store {
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
}
