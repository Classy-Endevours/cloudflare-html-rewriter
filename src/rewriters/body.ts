/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import _ from 'lodash';
export default class BodyRewriter {
  bodyPrependJS: string
  bodyPrependCSS: string
  bodyAppendJS: string
  bodyAppendCSS: string
  themeParameters: any
  constructor(
    bodyPrependJS = '',
    bodyPrependCSS = '',
    bodyAppendJS = '',
    bodyAppendCSS = '',
    themeParameters = null,
  ) {
    this.bodyPrependJS = bodyPrependJS
    this.bodyPrependCSS = bodyPrependCSS
    this.bodyAppendJS = bodyAppendJS
    this.bodyAppendCSS = bodyAppendCSS
    this.themeParameters = themeParameters
  }

  element(element: any) {
    if (this.themeParameters && this.themeParameters.length > 0) {
      for (const themeParameter of this.themeParameters) {
        this.bodyAppendCSS = _.template(this.bodyAppendCSS)(themeParameter.parameter)
        this.bodyAppendJS = _.template(this.bodyAppendJS)(themeParameter.parameter)
        this.bodyPrependCSS = _.template(this.bodyPrependCSS)(themeParameter.parameter)
        this.bodyPrependJS = _.template(this.bodyPrependJS)(themeParameter.parameter)
      }
    }
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
