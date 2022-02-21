// Head rewriter to handle favicon
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

// Change HTML response to fix favicon
async function appendHtml(res: Response) {
  return (
    new HTMLRewriter()
      .on("head", new HeadRewriter())
      .transform(res)
  )
}
const SITE_URL_OLD = `https://welcome.developers.workers.dev/wrangler-oauth-consent-granted`
const SITE_URL = `https://outlook.office365.com/calendar/published/b07091f33c2e4b118013d49b8d61ed5b@wpintegrate.com/6e070fb44f7c41f8abe2b9665129241d4795166312977762451/calendar.html`

const config = {
  originPage: SITE_URL_OLD
}

export async function handleRequest(request: Request) {
  // Grab the request URL's pathname, we'll use it later
  const url = new URL(request.url)
  const targetPath = url.pathname
 
  // Change request URLs to go through to the subdomain
  let response = await fetch(`https://${config.originPage}${targetPath}`)

  // We don't need to change these requests at all
  // So we return the response of the fetch request from above
  // immediately.
  return appendHtml(response)
}
