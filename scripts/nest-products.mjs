import fs from 'fs'

const file = 'dist/products/index.html'
const html = fs.readFileSync(file, 'utf8')
const next = html.replace(
  /\b(href|src)=(?:"([^"]+)"|([^\s>]+))/g,
  (match, attr, quoted, bare) => {
    const url = quoted ?? bare
    if (!url || /^(?:https?:|\/|#|data:|mailto:)/.test(url)) return match
    const prefixed = `../${url}`
    return quoted == null ? `${attr}=${prefixed}` : `${attr}="${prefixed}"`
  }
)
fs.writeFileSync(file, next)
