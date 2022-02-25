import { handleRequest } from './audit'

addEventListener('fetch', (event) => {
  event.passThroughOnException()
  event.respondWith(handleRequest(event.request))
})
