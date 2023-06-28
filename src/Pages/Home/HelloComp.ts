const template: any = document.createElement('template')
template.innerHTML = `
  <style>
    .container {
      height: 100px;
      line-height: 100px;
      background: green;
    }
  </style>

  <div class='container'>
    <h1>Hello World</h1>
  </dib>
`;
console.log(template)
class HelloComp extends HTMLElement {
  constructor() {
    super()
    // mode  open 可以从js外部访问根节点  closed 拒绝从js外部访问shadow root节点
    const shadowRoot = this.attachShadow({ mode: 'open'})
    shadowRoot.appendChild(template.content.cloneNode(true))
  }
}
if (!customElements.get('hello-comp')) {
  customElements.define('hello-comp', HelloComp)
}
