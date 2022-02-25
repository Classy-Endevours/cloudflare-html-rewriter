import { handleRequest } from './fruition-notion-service'

addEventListener('fetch', (event) => {
  event.passThroughOnException()
  event.respondWith(handleRequest(event.request))
})
