import { handleRequest } from './audit'
import { GLOBAL_INFORMATION } from './global'

addEventListener('fetch', (event) => {
  event.passThroughOnException()
  event.respondWith(handleRequest(event.request, GLOBAL_INFORMATION.CurrentDomain, GLOBAL_INFORMATION.Script ))
})
