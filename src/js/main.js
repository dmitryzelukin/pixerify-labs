import '../css/styles.css'

const root = document.documentElement
const toggle = document.querySelector('[data-theme-toggle]')

function theme() {
  if (root.dataset.theme === 'dark' || root.dataset.theme === 'light') return root.dataset.theme
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function setChrome(value) {
  const color = value === 'dark' ? '#1b1418' : '#fbf4f6'
  const nodes = document.querySelectorAll('meta[name="theme-color"]')
  nodes.forEach((node, index) => {
    if (index === 0) {
      node.setAttribute('content', color)
      node.removeAttribute('media')
      return
    }
    node.remove()
  })
}

function sync(value) {
  if (!toggle) return
  toggle.setAttribute('aria-pressed', value === 'dark' ? 'true' : 'false')
}

sync(theme())
if (root.dataset.theme) setChrome(root.dataset.theme)

toggle?.addEventListener('click', () => {
  const next = theme() === 'dark' ? 'light' : 'dark'
  root.dataset.theme = next
  localStorage.setItem('theme', next)
  setChrome(next)
  sync(next)
})

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (root.dataset.theme) return
  sync(theme())
})
