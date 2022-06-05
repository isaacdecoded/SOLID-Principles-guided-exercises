export default interface StoreWriter {
  save(id: number, message: string): void
}