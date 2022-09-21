export default class BodyRewriter {
  bodyPrepend: string
  bodyAppend: string
  constructor(bodyPrepend = '', bodyAppend = '') {
    this.bodyPrepend = bodyPrepend
    this.bodyAppend = bodyAppend
  }

  element(element: any) {
    if (this.bodyPrepend != '')
      element.prepend(this.bodyPrepend, {
        html: true,
      })
    if (this.bodyAppend != '')
      element.append(this.bodyAppend, {
        html: true,
      })
  }
}
