import scroller from '../package/dist/index.js'

window.history.replaceState({
  key: 'abc'
}, '')

window.scroller = scroller
