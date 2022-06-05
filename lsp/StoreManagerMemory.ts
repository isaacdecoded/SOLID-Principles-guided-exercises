import { LoggerManager } from '../srp/LoggerManager'
import { StoreManager } from '../srp/StoreManager'

export class MemoryManager implements StoreManager {
  logger: LoggerManager
  private _messages: Map<number, string>

  constructor(logger: LoggerManager) {
    this.logger = logger
    this._messages = new Map()
  }

  public async save(id: number, message: string): Promise<any> {
    this.logger.saving(id)
    this._messages.set(id, message)
  }

  public read(id: number): string {
    this.logger.readingStore(id)
    return this._messages.get(id)
  }

  // Violation of the LSP
  public getFilePath(id: number) {
    throw new Error('Method not implemented.')
  }
}
