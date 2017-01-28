import svel from '../package/dist/index.js'

function position() {
  return window.scrollY || window.pageYOffset
}

window.addEventListener('scroll', e => {
  const speed = svel(position(), e, {
    interval: 1000,
  })

  if (speed > 200) {
    console.log('fast!')
  }
})
