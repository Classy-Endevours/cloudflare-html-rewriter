import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import { exec } from 'child_process'
import { GLOBAL_INFORMATION } from './src/global'

dotenv.config()

const app: Express = express()
const port = process.env.PORT ?? 3000
app.use(express.json())
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

app.get('/publish', (req: Request, res: Response) => {
  exec('npm run publish', (err, stdout, stderr) => {
    console.log(stdout)
    console.log(err)
    console.log(stderr)
    res.send('Express + TypeScript Server')
  })
})

app.post('/', (req, res) => {
  GLOBAL_INFORMATION.CurrentDomain = req.body.domain
  GLOBAL_INFORMATION.Script = req.body.script
  res.json({
    message: 'success',
    GLOBAL_INFORMATION
  })
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})
