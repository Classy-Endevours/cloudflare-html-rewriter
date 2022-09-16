import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import { exec } from 'child_process'
import { ContainerInstanceManagementClient } from '@azure/arm-containerinstance'
import { DefaultAzureCredential } from '@azure/identity'

dotenv.config()

const app: Express = express()
const port = process.env.PORT ?? 3000
app.use(express.json())
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

app.get('/publish/:id', async (req: Request, res: Response) => {
  try {
    const subscriptionId = process.env.SUBSCRIPTION_ID ?? ''
    const resourceGroupName = process.env.RESOURCE_GROUP ?? ''
    const containerGroupName = process.env.CONTAINER_GROUP ?? ''
    const containerName = process.env.CONTAINER_NAME ?? ''
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
        command: `export SCRIPT_ID=${req.params.id} && npm run publish`,
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