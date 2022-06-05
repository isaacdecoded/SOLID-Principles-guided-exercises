export interface StoreWriter {
  save(id: number, message: string): void
}