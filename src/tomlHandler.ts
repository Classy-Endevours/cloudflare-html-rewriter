/* eslint-disable @typescript-eslint/no-explicit-any */
import { readFileSync, writeFileSync } from 'fs'

class TomlHandler {
  prefixFileRead: string
  prefixFileWrite: string
  prefixFileWriteDeploymentJson: string
  constructor() {
    this.prefixFileRead = './wrangler-prefix.toml'
    this.prefixFileWrite = './wrangler.toml'
    this.prefixFileWriteDeploymentJson = 'src/deployment.json'
  }

  writePrefixFile(instanceConst: any) {
    const file = readFileSync(this.prefixFileRead, 'utf-8')
    if (Object.keys(instanceConst).length > 0) {
      const context = file
        .replace('{{name}}', `"${instanceConst.pageContainerName}"`)
        .replace('{{account_id}}', `"${instanceConst.account_id}"`)
        .replace('{{output_url}}', `"${instanceConst.output_url}"`)
      writeFileSync(this.prefixFileWrite, context, 'utf-8')
      writeFileSync(
        this.prefixFileWriteDeploymentJson,
        JSON.stringify(instanceConst),
        'utf8',
      )
    }
    return
  }
}

export default new TomlHandler()
