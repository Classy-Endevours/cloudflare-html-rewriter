import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import tomlHandler from './tomlHandler'
import { exec } from 'child_process'
import Mongoose from '../config/database/mongoose/config/mongoose.config'
import SiteProxyConst from '../config/database/mongoose/models/SiteProxyConst'
import morgan from 'morgan'
import cors from 'cors'

dotenv.config()

const app: Express = express()
const port = process.env.PORT ?? 80
app.use(express.json())
app.use(cors())
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server v3')
})

app.use(morgan('combined'))
Mongoose.connect(process.env.DATABASE_URL)

app.get('/publish/:id', async (req: Request, res: Response) => {
  try {
    const responseConst = await SiteProxyConst.findById(req.params.id).lean()
    
    tomlHandler.writePrefixFile(responseConst)
    exec('npm run publish', (err, stdout, stderr) => {
      if (err) {
        console.log({ err })
      } 
    })

    return res.status(200).json()
  } catch (error) {
    return res.status(500).json(error)
  }
})

app.post('/', (req, res) => {
  res.json({
    message: 'success',
  })
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})
