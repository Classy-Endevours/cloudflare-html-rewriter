import { handleRequest } from './audit'
import Mongoose from '../config/database/mongoose/config/mongoose.config'
const Domain = 'outlook.office365.com'
addEventListener('fetch', (event: any) => {
  // @ts-ignore
  Mongoose.connect(DATABASE_URL)
  event.passThroughOnException()
  event.respondWith(handleRequest(event.request, Domain))
})
