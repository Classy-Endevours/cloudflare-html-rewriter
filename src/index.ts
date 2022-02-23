import { handleRequest } from './roam'

addEventListener('fetch', (event) => {
  event.passThroughOnException()
  event.respondWith(handleRequest(event.request))
})
