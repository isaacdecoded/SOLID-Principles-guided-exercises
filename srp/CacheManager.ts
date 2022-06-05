import { strict as strictAssert } from 'assert'
import LoggerManager from './LoggerManager'

export default class StoreCache {
  cache: any
  logger: LoggerManager

  constructor(logger: LoggerManager) {
    this.cache = {}
    this.logger = logger
  }

  public addOrUpdate(id: number, message: string): void {
    this.cache[id] = message
  }

  public getOrAdd(id: number, message?: string): string {
    this.logger.readingCache(id)
    if (!this.exists(id)) {
      strictAssert(message, 'Message expected when file does not exist')
      this.logger.missingFromCache(id)
      this.addOrUpdate(id, message)
    }
    return this.cache[id]
  }

  public exists(id: number): boolean {
    return this.cache.hasOwnProperty(id)
  }

  public checkCache(): object {
    return this.cache
  }
}
