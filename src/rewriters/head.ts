const GOOGLE_FONT: any = ''

export default class HeadRewriter {
  head: string
  constructor(head = '') {
    this.head = head
  }
  element(element: any) {
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
    if (this.head != '') {
      element.append(this.head, {
        html: true,
      })
    }
  }
}
