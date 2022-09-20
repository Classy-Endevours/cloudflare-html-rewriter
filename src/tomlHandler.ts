import { readFileSync, writeFileSync } from 'fs'

class TomlHandler {
  prefixFileRead: string
  prefixFileWrite: string
  constructor() {
    this.prefixFileRead = './wrangler-prefix.toml'
    this.prefixFileWrite = './wrangler.toml'
  }

  writePrefixFile(
    JavaScriptId: string,
    name: string,
    account_id: string,
    DATABASE_URL: string,
  ) {
    const file = readFileSync(this.prefixFileRead, 'utf-8')
    const context = file
      .replace('{{JAVASCRIPT_ID}}', `"${JavaScriptId}"`)
      .replace('{{name}}', `"${name}"`)
      .replace('{{account_id}}', `"${account_id}"`)
      .replace('{{DATABASE_URL}}', `"${DATABASE_URL}"`)
    writeFileSync(this.prefixFileWrite, context, 'utf-8')
    return
  }
}

export default new TomlHandler()
