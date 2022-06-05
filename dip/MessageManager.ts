import StoreReader from './StoreReader'
import StoreWriter from './StoreWriter'

export default class MessageManager {
  storeReader: StoreReader
  storeWriter: StoreWriter

  constructor(storeReader: StoreReader, storeWriter: StoreWriter) {
    this.storeReader = storeReader
    this.storeWriter = storeWriter
  }

  public async save(id: number, message: string) {
    this.storeWriter.save(id, message)
  }

  public read(id: number) {
    return this.storeReader.read(id)
  }
}
