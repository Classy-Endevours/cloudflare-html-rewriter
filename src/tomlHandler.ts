import { readFileSync, writeFileSync } from 'fs'

class TomlHandler {
  prefixFileRead: string
  prefixFileWrite: string
  prefixFileWriteJson: string
  constructor() {
    this.prefixFileRead = './wrangler-prefix.toml'
    this.prefixFileWriteJson = 'src/instance.json'
    this.prefixFileWrite = './wrangler.toml'
  }

  writePrefixFile(instance: any) {
    writeFileSync(this.prefixFileWriteJson, JSON.stringify(instance), 'utf8')
    const file = readFileSync(this.prefixFileRead, 'utf-8')
    const context = file
      .replace('{{name}}', `"${instance.name}"`)
      .replace('{{account_id}}', `"${instance.account_id}"`)
    writeFileSync(this.prefixFileWrite, context, 'utf-8')
    return
  }
}

export default new TomlHandler()
