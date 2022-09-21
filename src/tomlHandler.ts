import { readFileSync, writeFileSync } from 'fs'

class TomlHandler {
  prefixFileRead: string
  prefixFileWrite: string
  constructor() {
    this.prefixFileRead = './wrangler-prefix.toml'
    this.prefixFileWrite = 'src/instance.json'
  }

  writePrefixFile(
    instance: any
  ) {
    writeFileSync(this.prefixFileWrite, JSON.stringify(instance), 'utf8');
    return
  }
}

export default new TomlHandler()
