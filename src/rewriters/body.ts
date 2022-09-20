
  // @ts-ignore
const script = `<script>console.log('page has been loaded! ${JAVASCRIPT_ID}')
var var1 = setInterval(color, 200);  
  
function color() {  
  var var2 = document.body;  
  var2.style.backgroundColor = var2.style.backgroundColor == "lightblue" ? "lightgreen" : "lightblue";  
}  
</script>

`

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