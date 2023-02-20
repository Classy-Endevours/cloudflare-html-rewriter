/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
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
        if (Object.keys(themeParameter.parameter).length) {
          Object.keys(themeParameter.parameter).map((item) => {
            this.bodyAppendCSS +=
              // @ts-ignore
              themeParameter?.theme?.bodyAppendCSS.replace(
                item,
                themeParameter.parameter[item],
              )
            this.bodyAppendJS +=
              // @ts-ignore
              themeParameter?.theme?.bodyAppendJS.replace(
                item,
                themeParameter.parameter[item],
              )
            this.bodyPrependCSS +=
              // @ts-ignore
              themeParameter?.theme?.bodyPrependCSS.replace(
                item,
                themeParameter.parameter[item],
              )
            this.bodyPrependJS +=
              // @ts-ignore
              themeParameter?.theme?.bodyPrependJS.replace(
                item,
                themeParameter.parameter[item],
              )
          })
        }
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
