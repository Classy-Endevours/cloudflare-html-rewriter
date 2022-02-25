const GOOGLE_FONT: any = 'IBM Plex Sans'
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
const MS_BOOKING_OUTLOOK_URL =
  'https://outlook.office365.com/owa/calendar/TestBusiness@dwsnow.com/bookings/'

export async function handleRequest(request: Request) {
  if (request.method === 'OPTIONS') {
    return handleOptions(request)
  }
  let url = new URL(request.url)
  url.hostname = 'outlook.office365.com'

  let response

  response = await fetch(url.toString(), {
    body: request.body,
    headers: request.headers,
    method: request.method,
  })
  response = new Response(response.body, response)
  response.headers.delete('Content-Security-Policy')
  response.headers.delete('X-Content-Security-Policy')

  return injectJavaScript(response)
}

async function injectJavaScript(res: Response) {
  return new HTMLRewriter().on('head', new HeadRewriter()).transform(res)
}

class HeadRewriter {
  element(element: Element) {
    if (GOOGLE_FONT !== '') {
      element.append(
        `<link href="https://fonts.googleapis.com/css?family=${GOOGLE_FONT.replace(
          ' ',
          '+',
        )}:Regular,Bold,Italic&display=swap" rel="stylesheet">
        <style>* { font-family: "${GOOGLE_FONT}" !important; }</style>`,
        {
          html: true,
        },
      )
    }
  }
}
