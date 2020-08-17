import * as ToyReact from './toy-react'

class MyComponent extends ToyReact.Component {
  render() {
    return (
      <div class="a">
        <span>test</span>
        <p class="b"></p>
        { this.children }
      </div>
    )
  }
}

class ChildCompontent extends ToyReact.Component {
  render() {
    return <div class="child-compontent"></div>
  }
}

ToyReact.render(<MyComponent id="abc" class="name">
  <ChildCompontent></ChildCompontent>
  <div class="child1"></div>
  <h2>child2</h2>
</MyComponent>, document.body)
// ToyReact.render(<div></div>, document.body)
