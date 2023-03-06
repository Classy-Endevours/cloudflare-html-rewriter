/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import BodyRewriter from './rewriters/body'
import HeadRewriter from './rewriters/head'
import MetaRewriter from './rewriters/meta'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

function handleOptions(request: Request) {
  if (
    request.headers.get('Origin') !== null &&
    request.headers.get('Access-Control-Request-Method') !== null &&
    request.headers.get('Access-Control-Request-Headers') !== null
  ) {
    // Handle CORS pre-flight request.
    return new Response(null, {
      headers: corsHeaders,
    })
  } else {
    // Handle standard OPTIONS request.
    return new Response(null, {
      headers: {
        Allow: 'GET, HEAD, POST, PUT, OPTIONS',
      },
    })
  }
}

// @ts-ignore
export async function handleRequest(request: Request, instanceConst:any) {
  if (request.method === 'OPTIONS') {
    return handleOptions(request)
  }
  const url = new URL(request.url)
  const [_, siteId] = url.pathname.split('/')
  console.log(siteId)
  url.hostname = instanceConst.input_url
  url.pathname = url.pathname.replace(siteId, '')

  let response = await fetch(url.toString(), {
    body: request.body,
    headers: request.headers,
    method: request.method,
  })
  response = new Response(response.body, response)
  response.headers.delete('Content-Security-Policy')
  response.headers.delete('X-Content-Security-Policy')

  fetch(`https://walrus-app-v3k99.ondigitalocean.app/api/site-proxy/update-views/${siteId}`)
  const resp = await fetch(`https://walrus-app-v3k99.ondigitalocean.app/api/site-proxy/get-instance/${siteId}`)
  const data = await resp.json()

  // return injectJavaScript(response, instance)
  return injectJavaScript(response, data)
}

// @ts-ignore
async function injectJavaScript(res: Response, instance: any) {
  // @ts-ignore
  return new HTMLRewriter()
      .on('head', new HeadRewriter(instance.head, instance.themeParameters))
      .on('title', new MetaRewriter())
      .on('meta', new MetaRewriter(instance.head))
      .on(
        'body',
        new BodyRewriter(
          instance.bodyPrependJS,
          instance.bodyPrependCSS,
          instance.bodyAppendJS,
          instance.bodyAppendCSS,
          instance.themeParameters
        ),
      )
      .transform(res)
  
}
