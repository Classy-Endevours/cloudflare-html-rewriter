import BodyRewriter from "./rewriters/body"
import HeadRewriter from "./rewriters/head"
import MetaRewriter from "./rewriters/meta"

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

export async function handleRequest(request: Request, domain: string) {
  if (request.method === 'OPTIONS') {
    return handleOptions(request)
  }
  let url = new URL(request.url)
  url.hostname = domain
  // url.hostname = 'lists.live.com'

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

const data = [{
  id: 1,
  js: `<script>
  console.log('page has been loaded from docker 1!')
  var var1 = setInterval(color, 200);  
    
  function color() {  
    var var2 = document.body;  
    var2.style.backgroundColor = var2.style.backgroundColor == "red" ? "lightgreen" : "red";  
  }  
  </script>`
}, {
  id: 2,
  js: `<script>
  console.log('page has been loaded from docker 2!')
  var var1 = setInterval(color, 200);  
    
  function color() {  
    var var2 = document.body;  
    var2.style.backgroundColor = var2.style.backgroundColor == "blue" ? "lightgreen" : "blue";  
  }  
  </script>`
}]

async function injectJavaScript(res: Response) {
  const id = parseInt(process.env.SCRIPT_ID ?? '0')
  let instance = data.find(d => d.id === id)
  instance = instance ?? data[0]

  // @ts-ignore
  return new HTMLRewriter()
  // .on('head', new HeadRewriter())
  .on('title', new MetaRewriter())
  .on('meta', new MetaRewriter())
  .on('body', new BodyRewriter(instance.js))
    .transform(res)
}


