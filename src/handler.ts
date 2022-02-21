export async function handleRequestWithText(request: Request): Promise<Response> {
  return new Response(`request method: ${request.method}. Hello world`)
}

const SITE_URL_OLD = `https://welcome.developers.workers.dev/wrangler-oauth-consent-granted`

const SITE_URL = `https://outlook.office365.com/calendar/published/b07091f33c2e4b118013d49b8d61ed5b@wpintegrate.com/6e070fb44f7c41f8abe2b9665129241d4795166312977762451/calendar.html`

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