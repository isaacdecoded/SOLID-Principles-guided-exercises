import { promises as fsp } from 'fs'
import fs from 'fs'
import path from 'path'

export default class _FileStore {
  directory: string
  cache: any

  constructor(public _directory: string) {
    this.directory = _directory
    this.cache = {}
  }

  public async save (id: number, message: string) {
    console.log('Saving message:', id)
    var fileFullName = this.getFileInfo(id)
    await fsp.writeFile(fileFullName, message).then(() => {
      this.cache[id] = message
      console.log('Message saved:', id)
    }).catch((err: any) => console.error('There was an error: ', err))
  }

  public read(id: number): string {
    console.log('Reading message:', id)
    var fileFullName = this.getFileInfo(id)
    var exists = fs.existsSync(fileFullName)
    console.log('File exists: ', exists)
    if(!exists) {
      console.log(`No message ${id} found`)
      return ''
    }

    if(!this.cache.hasOwnProperty(id)) {
      console.info(`Message id ${id} not in cache`)
      var data = fs.readFileSync(fileFullName, {encoding: 'ASCII'})
      this.cache[id] = data
    }
    var message = this.cache[id]
    console.log(`Returning message ${id}`)
    return message
  }

  public checkCache() {
    return this.cache
  }

  private getFileInfo(id: number): string {
    return path.join(__dirname, this.directory, `${id}.txt`)
  }
}