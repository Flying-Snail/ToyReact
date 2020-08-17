class ElementWrapper {
  constructor (typeName) {
    this.root = document.createElement(typeName)
  }
  setAttribute(key, value) {
    this.root.setAttribute(key, value)
  }
  appendChild(component) {
    this.root.appendChild(component.root)
  }
}

class TextWrapper {
  constructor (text) {
    this.root = document.createTextNode(text)
  }
}

export function creatElement(type, opt, ...children) {
  let comp = typeof type === 'string'
    ? new ElementWrapper(type)
    : new type()

  for (let name in opt) {
    comp.setAttribute(name, opt[name])
  }

  const appendChildren = (children) => {
    for (let child of children) {
      if (typeof child === 'string') {
        child = new TextWrapper(child)
      }
      if (Array.isArray(child)) {
        appendChildren(child)
      } else {
        comp.appendChild(child)
      }
    }
  }
  appendChildren(children)

  return comp
}

export class Component {
  constructor () {
    this.props = Object.create(null)
    this.children = []
    this._root = null
  }

  setAttribute(key, value) {
    this.props[key] = value
  }

  appendChild(component) {
    this.children.push(component)
  }

  get root() {
    if (!this._root) this._root = this.render().root
    return this._root
  }

  render() {
    return null
  }
}

export function render(component, target) {
  console.log(component.root)
  target.appendChild(component.root)
}
