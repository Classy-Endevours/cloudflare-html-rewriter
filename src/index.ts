import { handleRequestWithText } from './handler'

addEventListener('fetch', (event) => {
  event.respondWith(handleRequestWithText(event.request))
})
