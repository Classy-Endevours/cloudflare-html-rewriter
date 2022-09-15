
const script = `

<script>
console.log('page has been loaded!')
var var1 = setInterval(color, 200);  
  
function color() {  
  var var2 = document.body;  
  var2.style.backgroundColor = var2.style.backgroundColor == "lightblue" ? "lightgreen" : "lightblue";  
}  
</script>

`

export default class BodyRewriter {

  script: string
  constructor(script: string){
    this.script = script
  }

  element(element: Element) {
    element.append(this.script, {
      html: true
    })
  }
}