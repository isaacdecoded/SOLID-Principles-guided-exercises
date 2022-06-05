import { StoreReader } from './StoreReader'
import { StoreWriter } from './StoreWriter'

export class MessageLogger implements StoreReader, StoreWriter {
  private _loggerId: string
  private _messages: Map<number, string>

  constructor(id: string) {
    this._loggerId = id
    this._messages = new Map()
  }

  public read(id: number): string {
    this.readingStore(id)
    // some reading policies ...
    this._messages.get(id)
    this.returning(id)
    return ''
  }

  public save(id: number, message: string): void {
    this.saving(id)
    // some saving policies ...
    this._messages.set(id, message)
    this.saved(id)
  }

  public saving(id: number): void {
    console.log(`${this._loggerId}: Saving message ${id}.`)
  }
  public saved(id: number): void {
    console.info(`${this._loggerId}: Saved message ${id}.`)
  }
  public readingStore(id: number): void {
    console.debug(`${this._loggerId}: Reading message ${id} from Store.`)
  }
  public messageNotFound(id: number): void {
    console.debug(`${this._loggerId}: No message ${id} found.`)
  }
  public returning(id: number): void {
    console.debug(`${this._loggerId}: Returning message ${id}.`)
  }
  public errorSaving(id: number): void {
    console.debug(`${this._loggerId}: Error saving message ${id}.`)
  }
}
