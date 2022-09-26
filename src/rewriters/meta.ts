const PAGE_TITLE: any = 'WP content'
const PAGE_DESCRIPTION = 'App related to Microsoft | Purchase and Trial'

/* Step 3.5: enter site metadata for favicon, OpenGraph, and Twitter */
const FAVICON_URL =
  'https://drive.google.com/uc?id=1z7yRGcMIgDaDUCKmkUERU9ywplD0xm1D'
const IOS_ICON_URL =
  'https://drive.google.com/uc?id=1MdtJNkPOp9_4dZcPNHCMz5m5OUYdaViR'
const OG_URL = 'https://wpintegrate.com'
const OG_TYPE = 'website'
const OG_IMAGE_URL =
  'https://drive.google.com/uc?id=1g30levQiVkeLrBSnYhmqliMoosgf5NYu'
const META_TWITTER_CARD = 'summary'
const META_TWITTER_SITE = '@wpcontent'
const META_TWITTER_IMAGE =
  'https://drive.google.com/uc?id=19au0QQ1eLEX9DY4Ah5sU-lOH_uZ3DLwO'
const META_TWITTER_URL = 'https://wpintegrate.com'

export default class MetaRewriter {
  head: string
  constructor(head = '') {
    this.head = head
  }
  element(element: any) {
    
    if (this.head != ''){
      element.append(this.head, {
        html: true,
      })
    }
    if (PAGE_TITLE !== '') {
      if (
        element.getAttribute('property') === 'og:title' ||
        element.getAttribute('property') === 'og:site_name' ||
        element.getAttribute('name') === 'twitter:title'
      ) {
        element.setAttribute('content', PAGE_TITLE)
      }
      if (element.tagName === 'title') {
        element.setInnerContent(PAGE_TITLE)
      }
    }
    if (
      element.getAttribute('name') === 'description' ||
      element.getAttribute('property') === 'og:description' ||
      element.getAttribute('name') === 'twitter:description'
    ) {
      element.setAttribute('content', PAGE_DESCRIPTION)
    }
    if (element.getAttribute('property') === 'og:url') {
      element.setAttribute('content', OG_URL)
    }
    if (element.getAttribute('name') === 'apple-itunes-app') {
      element.remove()
    }
    if (element.getAttribute('property') === 'og:type') {
      element.setAttribute('content', OG_TYPE)
    }
    if (element.getAttribute('property') === 'og:image') {
      element.setAttribute('content', OG_IMAGE_URL)
    }
    if (element.tagName === 'link' && element.getAttribute('rel') === 'icon') {
      element.setAttribute('href', FAVICON_URL)
    }
    if (
      element.tagName === 'link' &&
      element.getAttribute('rel') === 'shortcut icon'
    ) {
      element.setAttribute('href', FAVICON_URL)
    }
    if (
      element.tagName === 'link' &&
      element.getAttribute('rel') === 'apple-touch-icon'
    ) {
      element.setAttribute('href', IOS_ICON_URL)
    }
    if (element.getAttribute('name') === 'twitter:card') {
      element.setAttribute('content', META_TWITTER_CARD)
    }
    if (element.getAttribute('name') === 'twitter:site') {
      element.setAttribute('content', META_TWITTER_SITE)
    }
    if (element.getAttribute('name') === 'twitter:image') {
      element.setAttribute('content', META_TWITTER_IMAGE)
    }
    if (element.getAttribute('name') === 'twitter:url') {
      element.setAttribute('content', META_TWITTER_URL)
    }
  }
}
