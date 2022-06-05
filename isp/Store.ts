export interface Store {
  save(id: number, message: string): void
  read(id: number): string
}