import StoreReader from './StoreReader'
import StoreWriter from './StoreWriter'

export default class MessageLogger implements StoreReader, StoreWriter {
  public read(id: number): string {
    this.readingStore(id)
    // some reading policies ...
    this.returning(id)
    return ''
  }
  public save(id: number, message: string): void {
    this.saving(id)
    // some saving policies ...
    this.saved(id)
  }

  public saving(id: number): void {
    console.log(`Saving message ${id}.`)
  }
  public saved(id: number): void {
    console.info(`Saved message ${id}.`)
  }
  public readingStore(id: number): void {
    console.debug(`Reading message ${id} from Store.`)
  }
  public messageNotFound(id: number): void {
    console.debug(`No message ${id} found.`)
  }
  public returning(id: number): void {
    console.debug(`Returning message ${id}.`)
  }
  public errorSaving(id: number): void {
    console.debug(`Error saving message ${id}.`)
  }
}
