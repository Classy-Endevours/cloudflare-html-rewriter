/* eslint-disable @typescript-eslint/no-explicit-any */
import { readFileSync, writeFileSync } from 'fs'

class TomlHandler {
  prefixFileRead: string
  prefixFileWrite: string
  prefixFileWriteJson: string
  prefixFileWriteDeploymentJson: string
  constructor() {
    this.prefixFileRead = './wrangler-prefix.toml'
    this.prefixFileWriteJson = 'src/instance.json'
    this.prefixFileWrite = './wrangler.toml'
    this.prefixFileWriteDeploymentJson = './deployment.json'
  }

  writePrefixFile(instance: any, instanceConsnt: any) {
    writeFileSync(this.prefixFileWriteJson, JSON.stringify(instance), 'utf8')
    const file = readFileSync(this.prefixFileRead, 'utf-8')
    if (Object.keys(instanceConsnt).length > 0) {
      const context = file
        .replace('{{name}}', `"${instanceConsnt.name}"`)
        .replace('{{account_id}}', `"${instanceConsnt.account_id}"`)
        .replace('{{output_url}}', `"${instanceConsnt.output_url}"`)
      writeFileSync(this.prefixFileWrite, context, 'utf-8')
      writeFileSync(
        this.prefixFileWriteDeploymentJson,
        JSON.stringify(instanceConsnt),
        'utf8',
      )
    }
    return
  }
}

export default new TomlHandler()
