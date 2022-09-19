import { handleRequest } from './audit'

const Domain = 'outlook.office365.com'

addEventListener('fetch', (event: any) => {
  event.passThroughOnException()
  event.respondWith(handleRequest(event.request, Domain))
})
