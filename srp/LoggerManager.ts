export default class LoggerManager {
  public saving(id: number): void {
    console.log(`Saving message ${id}.`)
  }
  public saved(id: number): void {
    console.info(`Saved message ${id}.`)
  }
  public readingStore(id: number): void {
    console.debug(`Reading message ${id} from Store.`)
  }
  public readingCache(id: number): void {
    console.debug(`Reading message ${id} from Cache.`)
  }
  public messageNotFound(id: number): void {
    console.debug(`No message ${id} found.`)
  }
  public missingFromCache(id: number): void {
    console.debug(`Message ${id} missing from Cache.`)
  }
  public returning(id: number): void {
    console.debug(`Returning message ${id}.`)
  }
  public errorSaving(id: number): void {
    console.debug(`Error saving message ${id}.`)
  }
}