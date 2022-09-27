/* eslint-disable @typescript-eslint/no-explicit-any */
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
    if (instance.length > 0) {
      const context = file
        .replace('{{name}}', `"${instance[0].name}"`)
        .replace('{{account_id}}', `"${instance[0].account_id}"`)
        .replace('{{output_url}}', `"${instance[0].output_url}"`)
      writeFileSync(this.prefixFileWrite, context, 'utf-8')
    }
    return
  }
}

export default new TomlHandler()
