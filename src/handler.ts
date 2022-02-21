export async function handleRequestWithText(request: Request): Promise<Response> {
  return new Response(`request method: ${request.method}. Hello world`)
}

const SITE_URL = `https://welcome.developers.workers.dev/wrangler-oauth-consent-granted`

export async function handleRequest(request: Request): Promise<Response> {
  // Only GET requests work with this proxy.
  if (request.method !== 'GET') return MethodNotAllowed(request)
  return fetch(SITE_URL)
}
function MethodNotAllowed(request: Request) {
  return new Response(`Method ${request.method} not allowed.`, {
    status: 405,
    headers: {
      'Allow': 'GET'
    }
  })
}