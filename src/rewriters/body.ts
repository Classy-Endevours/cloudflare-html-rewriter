/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
export default class BodyRewriter {
  id: string
  bodyPrependJS: string
  bodyPrependCSS: string
  bodyAppendJS: string
  bodyAppendCSS: string
  themeParameters: any
  constructor(
    id = '',
    bodyPrependJS = '',
    bodyPrependCSS = '',
    bodyAppendJS = '',
    bodyAppendCSS = '',
    themeParameters = null,
  ) {
    this.id = id
    this.bodyPrependJS = bodyPrependJS
    this.bodyPrependCSS = bodyPrependCSS
    this.bodyAppendJS = bodyAppendJS
    this.bodyAppendCSS = bodyAppendCSS
    this.themeParameters = themeParameters
  }

  element(element: any) {
    if (this.themeParameters && this.themeParameters.length > 0) {
      for (const themeParameter of this.themeParameters) {
        if (
          themeParameter.parameter &&
          Object.keys(themeParameter.parameter).length
        ) {
          let bodyAppendJs = themeParameter?.theme?.bodyAppendJS ?? ""
          let bodyPrependJS = themeParameter?.theme?.bodyPrependJS ?? ""
          let bodyAppendCSS = themeParameter?.theme?.bodyAppendCSS ?? ""
          let bodyPrependCSS = themeParameter?.theme?.bodyPrependCSS ?? ""
          console.log({
            themeParameter: JSON.stringify(themeParameter.parameter, null, 4)
          })
          if (Object.keys(themeParameter.parameter)) {
            Object.keys(themeParameter.parameter).map((key) => {
              const item = `{{${key}}}`
              console.log({
                themeParameter: JSON.stringify(themeParameter.parameter, null, 4)
              })
              bodyAppendCSS = bodyAppendCSS.replace(
                  item,
                  themeParameter.parameter[key],
                )
                bodyAppendJs = bodyAppendJs.replace(
                item,
                themeParameter.parameter[key],
              )
              bodyPrependCSS = bodyPrependCSS.replace(
                  item,
                  themeParameter.parameter[key],
                )
              bodyPrependJS = bodyPrependJS.replace(
                  item,
                  themeParameter.parameter[key],
                )
            })
          } else {
            Object.keys(themeParameter?.theme.defaultParameter).map((key) => {
              const item = `{{${key}}}`
              bodyAppendCSS = bodyAppendCSS.replace(
                item,
                themeParameter.parameter[key],
              )
              bodyAppendJs = bodyAppendJs.replace(
              item,
              themeParameter.parameter[key],
            )
            bodyPrependCSS = bodyPrependCSS.replace(
                item,
                themeParameter.parameter[key],
              )
            bodyPrependJS = bodyPrependJS.replace(
                item,
                themeParameter.parameter[key],
              )
            })
          }

          this.bodyAppendCSS += bodyAppendCSS
          this.bodyAppendJS += bodyAppendJs
          this.bodyPrependCSS += bodyPrependCSS
          this.bodyPrependJS += bodyPrependJS
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

    // appending id of the instance
    element.prepend(
      `<input type="hidden" id="pageRewriterId" name="pageRewriterId" value="${this.id}">`,
      {
        html: true,
      },
    )
  }
}
