/* CONFIGURATION STARTS HERE */

/* Step 1: enter your domain name like fruitionsite.com */
const MY_DOMAIN = 'shreyasagnihotri.com';

/*
 * Step 2: enter your URL slug to page ID mapping
 * The key on the left is the slug (without the slash)
 * The value on the right is the Notion page ID
 */
const SLUG_TO_PAGE: any = {
  '': 'efeed215401648448d7e45cc2da31b17',
  'about': '3bda3f1e5c0c4edc84babbabbadbac5c',
  'portfolio': 'b912a792642649079b2b8dcd0b42b39d',
  'resume': 'feee1d403da543c2b69a88b9c9d64020',
  'currently': '9101659191f04b6ab2e1aa181c08f601',
  'how-i-built-this': '360b9b15109543ff957c3bf55a372c0d',

  'portfolio/projects': 'bddeb3e2e0f2470a9095566c93c74af9',
  'portfolio/projects/blabl': '55cf474769f84874a15bf1893e651064',
  'portfolio/projects/the-gratefull-bed-company': '71cd9f230c5641b5b5c49062fa3d57a0',
  'portfolio/projects/death-penalty-paper': 'fb3a2868b52a4c17a2556eaba76119a8',
  'portfolio/projects/nba-players-by-home-state': '054f8391eeb641308e54e98893ddd711',
  'portfolio/projects/habit-tracker': '77fd7a8e2fe64d5d816f9dab3bd7c295',
  'portfolio/projects/kpmg-tax-dashboard': '62dbc18676d845979320df278fa6c857',

  'resume/experience': '901019391b574b50a2b86976049af3bb',
  'resume/experience/bain': '145da1cc0fb7444ca8a4667ff325d49a',
  'resume/experience/yelp': '544d479d802d4f43b97449cce9d6f49d',
  'resume/experience/kpmg': 'b8686fe07f914b5eaae627ffa248c126',
  'resume/experience/nj-state-assembly': 'edb98b4c51714b41806e9eda57b9cb23'
};

/* Step 3: enter your page title and description for SEO purposes */
const PAGE_TITLE: any = 'Shreyas Agnihotri';
const PAGE_DESCRIPTION = 'Personal website of Shreyas Agnihotri';

/* Step 3.5: enter site metadata for favicon, OpenGraph, and Twitter */
/* UPDATE 9/2/21: None of this seems to work, not worth fixing for now */
const FAVICON_URL = 'https://drive.google.com/uc?id=1z7yRGcMIgDaDUCKmkUERU9ywplD0xm1D';
const IOS_ICON_URL = 'https://drive.google.com/uc?id=1MdtJNkPOp9_4dZcPNHCMz5m5OUYdaViR';
const OG_URL = 'https://shreyasagnihotri.com';
const OG_TYPE = 'website';
const OG_IMAGE_URL = 'https://drive.google.com/uc?id=1g30levQiVkeLrBSnYhmqliMoosgf5NYu';
const META_TWITTER_CARD = 'summary';
const META_TWITTER_SITE = '@shreysadilla';
const META_TWITTER_TITLE = PAGE_TITLE;
const META_TWITTER_DESC = PAGE_DESCRIPTION;
const META_TWITTER_IMAGE = 'https://drive.google.com/uc?id=19au0QQ1eLEX9DY4Ah5sU-lOH_uZ3DLwO';
const META_TWITTER_URL = 'https://shreyasagnihotri.com';

/* Step 4: enter a Google Font name, you can choose from https://fonts.google.com */
const GOOGLE_FONT: any = 'IBM Plex Sans';

/* Step 5: enter any custom scripts you'd like */
const CUSTOM_SCRIPT =
  `
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-146941175-1"></script>
  <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
          dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'UA-146941175-1');
  </script>
  `;

const CUSTOM_CSS =
  `
  /* Configure page content container: overlap with title, large bottom margin, semi-transparent background */
  .notion-page-content {
      padding-bottom: 4.5rem !important;
      padding-top: 3rem !important;
      background: rgba(128, 128, 128, 0.075);
      border-radius: 1rem;
      margin-top: -2.75rem;
      margin-right: 0;
      margin-bottom: 15rem ;
      margin-left: 0;
  }

  /* Center social links and pull them down off the bottom of page */
  [data-block-id="6ee8d5ab-1c1a-4180-9475-135d7feba801"] {
      text-align: center;
      margin-bottom: -12.5rem !important;
  }

  /* Add space to left of dark/light switch */
  .toggle-mode {
      margin-left: 12px;
  }

  /* Hide default page icon for experiences gallery */
  [data-block-id="90101939-1b57-4b50-a2b8-6976049af3bb"] .notion-record-icon {
      display: none !important;
  }

  /* Shift up page icon for projects gallery */
  [data-block-id="bddeb3e2-e0f2-470a-9095-566c93c74af9"] .notion-record-icon {
      margin-top: 0px !important;
  }

  /* Hide database page icon for inline view */
  [data-block-id="bddeb3e2-e0f2-470a-9095-566c93c74af9"] > div > div > div > div > .notion-record-icon, 
  [data-block-id="90101939-1b57-4b50-a2b8-6976049af3bb"] > div > div > div > div > .notion-record-icon {
      display: none !important;
  }

  /* Hide landing page emoji on mobile */
  [data-block-id="969c01ed-7354-45be-8e0e-4a237d4059e9"] {
      display: none;
  }

  /* Show landing page emoji in line with page title on web */
  @media only screen and (min-width: 40em) {
      [data-block-id="969c01ed-7354-45be-8e0e-4a237d4059e9"] {
          display: block;
          text-align: right;
          margin-top: -6rem !important;
          font-size: 2rem;
      }
  }

  /* Center breadcrumb in footer */
  .notion-breadcrumb-block {
      display: flex !important;
      justify-content: center !important;
  }

  /* Center links in footer */
  [data-block-id="360956ef-51ee-4b92-a120-9313cdaa6fde"] {
      display: flex !important;
      justify-content: center !important;
  }

  /* Hide icons for all sub-pages in footer breadcrumb */
  .notion-breadcrumb-block > div > div > div:not(:first-child) .notion-record-icon {
      display: none !important;
  }

  /* Increase font size of breadcrumb in footer */
  /*.notion-breadcrumb-block > div {
      font-size: 1.3rem;
  }*/

  /* Standardize radius of gallery view images */
  .notion-gallery-view > div > div > a {
      border-radius: 0.5rem !important;	
  }

  /* Make gallery view stretch outside page bounds on web */
  @media only screen and (min-width: 950px) {
      /* Projects & Ventures */  
      [data-block-id="bddeb3e2-e0f2-470a-9095-566c93c74af9"] .notion-gallery-view {
          padding-left: calc((100vw - 900px)/2 - 25px) !important;
          padding-right: calc((100vw - 900px)/2 - 25px) !important;
      }
      /* Professional Experiences */  
      [data-block-id="90101939-1b57-4b50-a2b8-6976049af3bb"] .notion-gallery-view {
          padding-left: calc((100vw - 900px)/2 - 25px) !important;
          padding-right: calc((100vw - 900px)/2 - 25px) !important;
      }
  }

  /* Standardize callout radius and make background semi-transparent */
  .notion-callout-block > div > div {
      border-radius: 0.5rem !important;
      background: rgba(128, 128, 128, 0.075) !important;
  }

  /* Standardize border radius of all images and turn off image preview */
  .notion-image-block img {
      pointer-events: none !important;
      border-radius: 0.5rem !important;
  }
  .notion-image-block {
      pointer-events: none !important;
      border-radius: 0.5rem !important;
  }

  /* Standardize Notion preview window border radius */
  .notion-peek-renderer > div:nth-child(2) {
      border-radius: 0.5rem !important;
      /* overflow: hidden; */
  }
  `;

/* CONFIGURATION ENDS HERE */

const PAGE_TO_SLUG: any = {};
const slugs: any = [];
const pages = [];
Object.keys(SLUG_TO_PAGE).forEach(slug => {
  const page = SLUG_TO_PAGE[slug];
  slugs.push(slug);
  pages.push(page);
  PAGE_TO_SLUG[page] = slug;
});

function generateSitemap() {
  let sitemap = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  slugs.forEach(
    (slug: any) =>
    (sitemap +=
      '<url><loc>https://' + MY_DOMAIN + '/' + slug + '</loc></url>')
  );
  sitemap += '</urlset>';
  return sitemap;
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

function handleOptions(request: Request) {
  if (request.headers.get('Origin') !== null &&
    request.headers.get('Access-Control-Request-Method') !== null &&
    request.headers.get('Access-Control-Request-Headers') !== null) {
    // Handle CORS pre-flight request.
    return new Response(null, {
      headers: corsHeaders
    });
  } else {
    // Handle standard OPTIONS request.
    return new Response(null, {
      headers: {
        'Allow': 'GET, HEAD, POST, PUT, OPTIONS',
      }
    });
  }
}
const MS_BOOKING_OUTLOOK_URL = 'https://outlook.office365.com/owa/calendar/TestBusiness@dwsnow.com/bookings/'

export async function handleRequest(request: Request) {
  if (request.method === 'OPTIONS') {
    return handleOptions(request);
  }
  let url = new URL(request.url);
  url.hostname = 'www.notion.so';
  if (url.pathname === '/robots.txt') {
    return new Response('Sitemap: https://' + MY_DOMAIN + '/sitemap.xml');
  }
  if (url.pathname === '/sitemap.xml') {
    let response = new Response(generateSitemap());
    response.headers.set('content-type', 'application/xml');
    return response;
  }
  let response;
  if (url.pathname.startsWith('/app') && url.pathname.endsWith('js')) {
    response = await fetch(url.toString());
    let body = await response.text();
    response = new Response(body.replace(/www.notion.so/g, MY_DOMAIN).replace(/notion.so/g, MY_DOMAIN), response);
    response.headers.set('Content-Type', 'application/x-javascript');
    return response;
  } else if ((url.pathname.startsWith('/api'))) {
    // Forward API
    response = await fetch(url.toString(), {
      body: url.pathname.startsWith('/api/v3/getPublicPageData') ? null : request.body,
      headers: {
        'content-type': 'application/json;charset=UTF-8',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36'
      },
      method: 'POST',
    });
    response = new Response(response.body, response);
    response.headers.set('Access-Control-Allow-Origin', '*');
    return response;
  } else if (slugs.indexOf(url.pathname.slice(1)) > -1) {
    const pageId = SLUG_TO_PAGE[url.pathname.slice(1)];
    return Response.redirect('https://' + MY_DOMAIN + '/' + pageId, 301);
  } else {
    console.log({ 
      u: request.url
    })
    response = await fetch(MS_BOOKING_OUTLOOK_URL, {
      body: request.body,
      headers: request.headers,
      method: request.method,
    });
    response = new Response(response.body, response);
    // response.headers.delete('Content-Security-Policy');
    // response.headers.delete('X-Content-Security-Policy');
  }

  return appendJavascript(response, SLUG_TO_PAGE);
}

class MetaRewriter {
  element(element: Element) {
    if (PAGE_TITLE !== '') {
      if (element.getAttribute('property') === 'og:title' ||
        element.getAttribute('property') === 'og:site_name' ||
        element.getAttribute('name') === 'twitter:title') {
        element.setAttribute('content', PAGE_TITLE);
      }
      if (element.tagName === 'title') {
        element.setInnerContent(PAGE_TITLE);
      }
    }
    if (element.getAttribute('name') === 'description' ||
        element.getAttribute('property') === 'og:description' ||
        element.getAttribute('name') === 'twitter:description') {
        element.setAttribute('content', PAGE_DESCRIPTION);
    }
    if (element.getAttribute('property') === 'og:url') {
      element.setAttribute('content', OG_URL);
    }
    if (element.getAttribute('name') === 'apple-itunes-app') {
      element.remove();
    }
    if (element.getAttribute('property') === 'og:type') {
      element.setAttribute('content', OG_TYPE);
    }
    if (element.getAttribute('property') === 'og:image') {
      element.setAttribute('content', OG_IMAGE_URL);
    }
    if (element.tagName === 'link' && element.getAttribute('rel') === 'icon') {
      element.setAttribute('href', FAVICON_URL);
    }
    if (element.tagName === 'link' && element.getAttribute('rel') === 'shortcut icon') {
      element.setAttribute('href', FAVICON_URL);
    }
    if (element.tagName === 'link' && element.getAttribute('rel') === 'apple-touch-icon') {
      element.setAttribute('href', IOS_ICON_URL);
    }
    if (element.getAttribute('name') === 'twitter:card') {
      element.setAttribute('content', META_TWITTER_CARD);
    }
    if (element.getAttribute('name') === 'twitter:site') {
      element.setAttribute('content', META_TWITTER_SITE);
    }
    if (element.getAttribute('name') === 'twitter:image') {
      element.setAttribute('content', META_TWITTER_IMAGE);
    }
    if (element.getAttribute('name') === 'twitter:url') {
      element.setAttribute('content', META_TWITTER_URL);
    }
  }
}

class HeadRewriter {
  element(element: Element) {
    if (GOOGLE_FONT !== '') {
      element.append(`<link href="https://fonts.googleapis.com/css?family=${GOOGLE_FONT.replace(' ', '+')}:Regular,Bold,Italic&display=swap" rel="stylesheet">
      <style>* { font-family: "${GOOGLE_FONT}" !important; }</style>`, {
        html: true
      });
    }
    element.append(`<style>
    div.notion-topbar > div > div:nth-child(3) { display: none !important; }
    div.notion-topbar > div > div:nth-child(4) { display: none !important; }
    div.notion-topbar > div > div:nth-child(5) { display: none !important; }
    div.notion-topbar > div > div:nth-child(6) { display: none !important; }
    div.notion-topbar-mobile > div:nth-child(3) { display: none !important; }
    div.notion-topbar-mobile > div:nth-child(4) { display: none !important; }
    div.notion-topbar-mobile > div:nth-child(5) { display: none !important; }
    div.notion-topbar > div > div:nth-child(1n).toggle-mode { display: block !important; }
    div.notion-topbar-mobile > div:nth-child(1n).toggle-mode { display: block !important; }
    </style>`, {
      html: true
    })
  }
}

class BodyRewriter {
    SLUG_TO_PAGE: any
  constructor(SLUG_TO_PAGE: any) {
    this.SLUG_TO_PAGE = SLUG_TO_PAGE;
  }
  element(element: Element) {
    element.append(`
    <script>
    window.CONFIG.domainBaseUrl = 'https://${MY_DOMAIN}';
    const SLUG_TO_PAGE = ${JSON.stringify(this.SLUG_TO_PAGE)};
    const PAGE_TO_SLUG = {};
    const slugs = [];
    const pages = [];
    const el = document.createElement('div');
    let redirected = false;
    Object.keys(SLUG_TO_PAGE).forEach(slug => {
      const page = SLUG_TO_PAGE[slug];
      slugs.push(slug);
      pages.push(page);
      PAGE_TO_SLUG[page] = slug;
    });
    function getPage() {
      return location.pathname.slice(-32);
    }
    function getSlug() {
      return location.pathname.slice(1);
    }
    function updateSlug() {
      const slug = PAGE_TO_SLUG[getPage()];
      if (slug != null) {
        history.replaceState(history.state, '', '/' + slug);
      }
    }
    function onDark() {
      el.innerHTML = '<div title="Change to Light Mode" style="margin-left: auto; margin-right: 14px; min-width: 0px;"><div role="button" tabindex="0" style="user-select: none; transition: background 120ms ease-in 0s; cursor: pointer; border-radius: 44px;"><div style="display: flex; flex-shrink: 0; height: 14px; width: 26px; border-radius: 44px; padding: 2px; box-sizing: content-box; background: rgb(46, 170, 220); transition: background 200ms ease 0s, box-shadow 200ms ease 0s;"><div style="width: 14px; height: 14px; border-radius: 44px; background: white; transition: transform 200ms ease-out 0s, background 200ms ease-out 0s; transform: translateX(12px) translateY(0px);"></div></div></div></div>';
      document.body.classList.add('dark');
      __console.environment.ThemeStore.setState({ mode: 'dark' });
    };
    function onLight() {
      el.innerHTML = '<div title="Change to Dark Mode" style="margin-left: auto; margin-right: 14px; min-width: 0px;"><div role="button" tabindex="0" style="user-select: none; transition: background 120ms ease-in 0s; cursor: pointer; border-radius: 44px;"><div style="display: flex; flex-shrink: 0; height: 14px; width: 26px; border-radius: 44px; padding: 2px; box-sizing: content-box; background: rgba(135, 131, 120, 0.3); transition: background 200ms ease 0s, box-shadow 200ms ease 0s;"><div style="width: 14px; height: 14px; border-radius: 44px; background: white; transition: transform 200ms ease-out 0s, background 200ms ease-out 0s; transform: translateX(0px) translateY(0px);"></div></div></div></div>';
      document.body.classList.remove('dark');
      __console.environment.ThemeStore.setState({ mode: 'light' });
    }
    function toggle() {
      if (document.body.classList.contains('dark')) {
        onLight();
      } else {
        onDark();
      }
    }
    function addDarkModeButton(device) {
      const nav = device === 'web' ? document.querySelector('.notion-topbar').firstChild : document.querySelector('.notion-topbar-mobile');
      el.className = 'toggle-mode';
      el.addEventListener('click', toggle);
      nav.appendChild(el);
      onLight();
    }
    const observer = new MutationObserver(function() {
      if (redirected) return;
      const nav = document.querySelector('.notion-topbar');
      const mobileNav = document.querySelector('.notion-topbar-mobile');
      if (nav && nav.firstChild && nav.firstChild.firstChild
        || mobileNav && mobileNav.firstChild) {
        redirected = true;
        updateSlug();
        addDarkModeButton(nav ? 'web' : 'mobile');
        const onpopstate = window.onpopstate;
        window.onpopstate = function() {
          if (slugs.includes(getSlug())) {
            const page = SLUG_TO_PAGE[getSlug()];
            if (page) {
              history.replaceState(history.state, 'bypass', '/' + page);
            }
          }
          onpopstate.apply(this, [].slice.call(arguments));
          updateSlug();
        };
      }
    });
    observer.observe(document.querySelector('#notion-app'), {
      childList: true,
      subtree: true,
    });
    const replaceState = window.history.replaceState;
    window.history.replaceState = function(state) {
      if (arguments[1] !== 'bypass' && slugs.includes(getSlug())) return;
      return replaceState.apply(window.history, arguments);
    };
    const pushState = window.history.pushState;
    window.history.pushState = function(state) {
      const dest = new URL(location.protocol + location.host + arguments[2]);
      const id = dest.pathname.slice(-32);
      if (pages.includes(id)) {
        arguments[2] = '/' + PAGE_TO_SLUG[id];
      }
      return pushState.apply(window.history, arguments);
    };
    const open = window.XMLHttpRequest.prototype.open;
    window.XMLHttpRequest.prototype.open = function() {
      arguments[1] = arguments[1].replace('${MY_DOMAIN}', 'www.notion.so');
      return open.apply(this, [].slice.call(arguments));
    };
  </script>${CUSTOM_SCRIPT}<style>${CUSTOM_CSS}</style>`, {
      html: true
    });
  }
}

async function appendJavascript(res: Response, SLUG_TO_PAGE: any) {
  return new HTMLRewriter()
    .on('title', new MetaRewriter())
    .on('meta', new MetaRewriter())
    .on('head', new HeadRewriter())
    .on('body', new BodyRewriter(SLUG_TO_PAGE))
    .transform(res);
}