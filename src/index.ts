/* eslint-disable @typescript-eslint/ban-ts-comment */
import { handleRequest } from './audit'
// @ts-ignore
import instance from './instance.json'
// @ts-ignore
import instanceConst from './deployment.json'
addEventListener('fetch', (event: any) => {
  // @ts-ignore
  event.passThroughOnException()
  const { pathname } = new URL(event.request.url)
  const currentInstance = instance.find((item:any) => pathname.startsWith(item.path))
  event.respondWith(
    handleRequest(event.request, currentInstance, instanceConst),
  )
})
