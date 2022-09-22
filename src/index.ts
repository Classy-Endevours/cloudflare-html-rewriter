import { handleRequest } from './audit'
// @ts-ignore
import instance from './instance.json'
addEventListener('fetch', (event: any) => {
  // @ts-ignore
  event.passThroughOnException()
  event.respondWith(handleRequest(event.request, instance.input_url))
})
