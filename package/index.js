const scroll = y => window.scrollTo(0, y)

const state = () => {
  return history.state ? history.state.scrollPosition : 0
}

const save = () => {
  window.history.replaceState({ 
    scrollPosition: window.pageYOffset || window.scrollY 
  }, '')
}

const restore = (cb = null) => {
  let pos = state()

  pos ? (
    cb ? (
      cb(pos)
    ) : (
      scroll(pos)
    )
  ) : (
    scroll(0)
  )
}

const instance = {
  get export() {
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in history){
        history.scrollRestoration = 'manual'

        scroll(state())

        window.onbeforeunload = save
      }

      return {
        save,
        restore,
        state,
      }
    }

    return {}
  }
}

export default instance.export
