import { readFileSync, writeFileSync } from 'fs';

class TomlHandler {
    prefixFileRead: string
    prefixFileWrite: string
    constructor(){
        this.prefixFileRead = './wrangler-prefix.toml'
        this.prefixFileWrite = './wrangler.toml'
    }

    writePrefixFile(JavaScriptId: string){
        const file = readFileSync(this.prefixFileRead, 'utf-8');
        const context = file.replace('{{JAVASCRIPT_ID}}', `"${JavaScriptId}"`)
        writeFileSync(this.prefixFileWrite, context, 'utf-8')
        return
    }
}

export default new TomlHandler()