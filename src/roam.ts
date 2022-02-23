// Config for our domain (where we want the Roam blog to live)
// and the start page (where we want our readers to land)
// Change these to suit your case!
// IMPORTANT: don't have '/' at the end of either domain or startPage
const config = {
    domain: "roam.cloak.ist",
    startPage: "/#/app/nudge/page/RI01qJl4P",
  }
  
  const DOMAIN = 'https://roamresearch.com' 
  const OUTLOOK = `https://outlook.office365.com/calendar/published/b07091f33c2e4b118013d49b8d61ed5b@wpintegrate.com/6e070fb44f7c41f8abe2b9665129241d4795166312977762451/calendar.html`
  const GOOGLE = 'https://docs.google.com' 

  // Function that processes requests to the domain the worker is at
  export async function handleRequest(request: Request) {
    // Grab the request URL's pathname, we'll use it later
    const url = new URL(request.url)
    const targetPath = url.pathname
  
    // Send request through to roamresearch.com, get response
    // let response = await fetch(`${OUTLOOK}${targetPath}`)
    let response = await fetch(`${OUTLOOK}`)
    console.log(response)
  
    // For the root path, modify the response to send to startPage
    if (targetPath === '/') {
      return modifyResponse(response)
    } else {
    // For other paths, simply return the response
      return response
    }
  }
  
  // Modify the response for root path
  async function modifyResponse(response: Response) {
    return new HTMLRewriter()
      .on("head", new HeadRewriter())
      .transform(response)
  }
  
  // Change the head of the HTML document
  class HeadRewriter {
    element(element: Element) {
      element.prepend(
        `<script>
          if (window.location.hash === "" && window.location.host === "${config.domain}") {
            history.pushState(history.state, "", "${config.startPage}");
          }
        </script>`,
        {
          html: true,
        }
      )
    }
  }
  