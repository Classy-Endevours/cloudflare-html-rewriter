import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import { ContainerInstanceManagementClient } from '@azure/arm-containerinstance'
import { DefaultAzureCredential } from '@azure/identity'

dotenv.config()

const app: Express = express()
const port = process.env.PORT ?? 80
app.use(express.json())
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server v3')
})

app.get('/publish/:id', async (req: Request, res: Response) => {
  try {
    const subscriptionId = process.env.SUBSCRIPTION_ID ?? req.query.SUBSCRIPTION_ID as string
    const resourceGroupName = process.env.RESOURCE_GROUP ?? req.query.RESOURCE_GROUP as string
    const containerGroupName = process.env.CONTAINER_GROUP ?? req.query.CONTAINER_GROUP as string
    const containerName = process.env.CONTAINER_NAME ?? req.query.CONTAINER_NAME as string
    const credential = new DefaultAzureCredential()
    const client = new ContainerInstanceManagementClient(
      credential,
      subscriptionId,
    )
    const result = await client.containers.executeCommand(
      resourceGroupName,
      containerGroupName,
      containerName,
      {
        command: `npm run testing && export SCRIPT_ID=${req.params.id} && export SCRIPT_VALUE=${req.query.SCRIPT_VALUE} && npm run publish`,
        terminalSize: {
          rows: 1,
          cols: 1
        }
      },
    )
    res.status(200).json(result)
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