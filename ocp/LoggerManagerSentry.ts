import LoggerManager from '../srp/LoggerManager'

export default class LoggerManagerSentry implements LoggerManager {
  public saving(id: number): void {
    this.SentryLogger(`Saving message ${id}.`)
  }
  public saved(id: number): void {
    this.SentryLogger(`Saved message ${id}.`)
  }
  public readingStore(id: number): void {
    this.SentryLogger(`Reading message ${id} from Store.`)
  }
  public readingCache(id: number): void {
    this.SentryLogger(`Reading message ${id} from Cache.`)
  }
  public messageNotFound(id: number): void {
    this.SentryLogger(`No message ${id} found.`)
  }
  public missingFromCache(id: number): void {
    this.SentryLogger(`Message ${id} missing from cache.`)
  }
  public returning(id: number): void {
    this.SentryLogger(`Returning message ${id}.`)
  }
  public errorSaving(id: number): void {
    this.SentryLogger(`Error saving message ${id}.`)
  }

  // mock Sentry logger
  private SentryLogger(log: string) {
    console.log('Logged to Sentry: ', log)
  }
}