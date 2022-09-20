import { handleRequest } from './audit'
import Mongoose from '../config/database/mongoose/config/mongoose.config'
const Domain = 'outlook.office365.com'
// @ts-ignore
Mongoose.connect(DATABASE_URL)
addEventListener('fetch', (event: any) => {
  event.passThroughOnException()
  event.respondWith(handleRequest(event.request, Domain))
})
