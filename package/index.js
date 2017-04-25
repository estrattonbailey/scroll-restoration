const scroll = y => window.scrollTo(0, y)

const state = () => {
  return history.state ? history.state.scrollPosition : 0
}

const save = (y = null) => {
  window.history.replaceState({
    ...window.history.state,
    scrollPosition: y || window.pageYOffset || window.scrollY 
  }, '')
}

const restore = (cb = null) => {
  const pos = state()

  cb ? (
    cb(pos)
  ) : (
    scroll(pos)
  )
}

const init = () => {
  if ('scrollRestoration' in history){
    history.scrollRestoration = 'manual'

    scroll(state())

    window.onbeforeunload = e => save()
  }
}

export default typeof window !== 'undefined' ? {
  init,
  save,
  restore,
  state,
} : {}
