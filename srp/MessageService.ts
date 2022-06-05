import { StoreManager } from './StoreManager'
import { CacheManager } from './CacheManager'
import { LoggerManager } from './LoggerManager'

export class MessageService {
  storeManager : StoreManager
  cacheManager: CacheManager
  private loggerManager: LoggerManager

  constructor(directory: string, loggerManager: LoggerManager) {
    this.loggerManager = loggerManager
    this.storeManager = new StoreManager(directory, this.logger)
    this.cacheManager = new CacheManager(this.logger)
  }

  get logger(): LoggerManager {
    return this.loggerManager
  }

  public async save(id: number, message: string) {
    await this.storeManager.save(id, message)
    this.cacheManager.addOrUpdate(id, message)
  }

  public read(id: number): string {
    if(!this.cacheManager.exists(id)) {
      const message = this.storeManager.read(id)
      this.cacheManager.getOrAdd(id, message)
    }
    return this.cacheManager.getOrAdd(id)
  }
}
