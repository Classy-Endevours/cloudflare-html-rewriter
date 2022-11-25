import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import { ContainerInstanceManagementClient } from '@azure/arm-containerinstance'
import { DefaultAzureCredential } from '@azure/identity'
import tomlHandler from './tomlHandler'
import { exec } from 'child_process'
import Mongoose from '../config/database/mongoose/config/mongoose.config'
import SiteProxy from '../config/database/mongoose/models/SiteProxy'
import SiteProxyConst from '../config/database/mongoose/models/SiteProxyConst'
import morgan from 'morgan'
import cors from 'cors'
import cron from 'node-cron'
import mongoose from 'mongoose';


dotenv.config()

cron.schedule('0 0 * * *', async () => {
  try {
    const responseConsts = await SiteProxyConst.find().lean()
    for (const item of responseConsts) {
      const endTime = new Date(new Date().setHours(11, 59, 59)).setDate(
        new Date().getDate() - 1,
      )
      const startTime = new Date(new Date().setHours(0, 0, 0)).setDate(
        new Date().getDate() - 1,
      )
      const responseSite = await SiteProxy.find({
        constant: item._id,
        isExpired: false,
        isUpdated: {
          $lte: startTime,
          $gte: endTime,
        },
      }).lean()
      if (responseSite.length > 0) {
        tomlHandler.writePrefixFile(responseSite, item)
        exec('npm run publish', (err, result) => {
          if (err) {
            console.log({ err })
          } else {
            console.log({ result })
          }
        })
      }
    }
  } catch (error) {
    console.log({ error })
  }
})

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
    const responseSite = await SiteProxy.find({
      constant: new mongoose.Types.ObjectId(req.params.id),
    }).lean()
    const responseConst = await SiteProxyConst.findById(req.params.id).lean()
    if (responseSite.length <= 0 || !responseConst) {
      res.status(404).json({})
      return
    }
    tomlHandler.writePrefixFile(responseSite, responseConst)
    exec('npm run publish', (err, stdout, stderr) => {
      if (err) {
        // res.status(500).json(err)
        return
      } else {
      }
    })

    // const subscriptionId = process.env.SUBSCRIPTION_ID ?? req.query.SUBSCRIPTION_ID as string
    // const resourceGroupName = process.env.RESOURCE_GROUP ?? req.query.RESOURCE_GROUP as string
    // const containerGroupName = process.env.CONTAINER_GROUP ?? req.query.CONTAINER_GROUP as string
    // const containerName = process.env.CONTAINER_NAME ?? req.query.CONTAINER_NAME as string
    // const credential = new DefaultAzureCredential()
    // const client = new ContainerInstanceManagementClient(
    //   credential,
    //   subscriptionId,
    // )
    // tomlHandler.writePrefixFile(req.params.id as string)
    // const result = await client.containers.executeCommand(
    //   resourceGroupName,
    //   containerGroupName,
    //   containerName,
    //   {
    //     command: `npm run publish`,
    //     terminalSize: {
    //       rows: 1,
    //       cols: 1
    //     }
    //   },
    // )
    // res.status(200).json(result)
    
    res.status(200).json()
    return
  } catch (error) {
    res.status(500).json(error)
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
