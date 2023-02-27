export default class HeadRewriter {
  head: string
  themeParameters: any
  constructor(head = '', themeParameters = '') {
    this.head = head
    this.themeParameters = themeParameters
  }
  element(element: any) {
    if (this.themeParameters && this.themeParameters.length > 0) {
      for (const themeParameter of this.themeParameters) {
        if (
          themeParameter.parameter &&
          Object.keys(themeParameter.parameter).length
        ) {
          Object.keys(themeParameter.parameter).map((key) => {
            const item = `{{${key}}}`
            this.head += themeParameter?.theme?.head.replace(
              item,
              themeParameter.parameter[item],
            )
          })
        } else {
          Object.keys(themeParameter?.theme.defaultParameter).map((key) => {
            const item = `{{${key}}}`
            this.head += themeParameter?.theme?.head.replace(
              item,
              themeParameter?.theme.defaultParameter[item],
            )
          })
        }
      }
    }
    if (this.head != '') {
      element.append(this.head, {
        html: true,
      })
    }
  }
}
