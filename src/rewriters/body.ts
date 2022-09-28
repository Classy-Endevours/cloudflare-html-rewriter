/* eslint-disable @typescript-eslint/no-explicit-any */
export default class BodyRewriter {
  bodyPrependJS: string
  bodyPrependCSS: string
  bodyAppendJS: string
  bodyAppendCSS: string
  constructor(
    bodyPrependJS = '',
    bodyPrependCSS = '',
    bodyAppendJS = '',
    bodyAppendCSS = '',
  ) {
    this.bodyPrependJS = bodyPrependJS
    this.bodyPrependCSS = bodyPrependCSS
    this.bodyAppendJS = bodyAppendJS
    this.bodyAppendCSS = bodyAppendCSS
  }

  element(element: any) {
    if (this.bodyPrependJS != '')
      element.prepend(this.bodyPrependJS, {
        html: true,
      })
    if (this.bodyPrependCSS != '')
      element.prepend(this.bodyPrependCSS, {
        html: true,
      })
    if (this.bodyAppendJS != '')
      element.append(this.bodyAppendJS, {
        html: true,
      })
    if (this.bodyAppendCSS != '')
      element.append(this.bodyAppendCSS, {
        html: true,
      })
  }
}
