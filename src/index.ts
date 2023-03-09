/* eslint-disable @typescript-eslint/ban-ts-comment */
import { handleRequest } from './audit'
// @ts-ignore
import instanceConst from './deployment.json'
addEventListener('fetch', (event: any) => {
  // @ts-ignore
  event.passThroughOnException()
  const { pathname } = new URL(event.request.url)
  event.respondWith(
    handleRequest(event.request, instanceConst),
  )
})
