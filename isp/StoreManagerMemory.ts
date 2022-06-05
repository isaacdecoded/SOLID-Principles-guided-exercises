import { LoggerManager } from '../srp/LoggerManager'
import { Store } from './Store'
/**
 * Not implemented as this MemoryManager don't stores data on disk.
 * We don't need to implement this.
 */
// import { FileLocator } from './FileLocator'

export class MemoryManager implements Store {
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
}
