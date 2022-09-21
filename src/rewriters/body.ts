

export default class BodyRewriter {
  js: string

  constructor(js: string){
    this.js = js
  }

  element(element: any) {
    element.append(this.js, {
      html: true
    })
  }
}