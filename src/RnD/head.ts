
class HeadRewriter {
  element(element: Element) {
    element.append(
      `<link rel="icon" href="https://api.super.so/asset/super.so/55b95b71-eb85-4643-9315-8e0af7598a2f.svg">`,
      {
        html: true,
      }
    )
  }
}

const rewriter = new HTMLRewriter()
  .on("head", new HeadRewriter())


const SITE_URL_OLD = `https://welcome.developers.workers.dev/wrangler-oauth-consent-granted`
const SITE_URL = `https://outlook.office365.com/calendar/published/b07091f33c2e4b118013d49b8d61ed5b@wpintegrate.com/6e070fb44f7c41f8abe2b9665129241d4795166312977762451/calendar.html`
const WIKI_PEDIA = 'https://en.wikipedia.org/wiki/Main_Page'
const YOUTUBE = 'https://www.youtube.com/'
const GOOGLE_DOCUMENT = 'https://docs.google.com/document/d/1MMzA-3ln3DJxI8SNcWpA7hqCiBQpi2JdnIt-l3YkNpo/edit?usp=sharing'

export async function handleRequest(request: Request): Promise<Response> {
  // Only GET requests work with this proxy.
  if (request.method !== 'GET') return MethodNotAllowed(request)
  const res = await fetch(GOOGLE_DOCUMENT)
  return rewriter.transform(res)
}
function MethodNotAllowed(request: Request) {
  return new Response(`Method ${request.method} not allowed.`, {
    status: 405,
    headers: {
      'Allow': 'GET'
    }
  })
}