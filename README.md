# micro-scroll-restoration
Manage scroll position using native DOM APIs. Useful for SPAs.

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](http://standardjs.com)

## Install
```bash
npm i micro-scroll-restoration --save
```

## Usage 
By default, just importing the library will listen for `beforeunload` events, check for `scrollPosition` property on the window, and restore that position on page load.
```javascript
import scroller from 'micro-scroll-restoration'
```

For SPAs, you'll want to save scroll position before new routes, and restore position when returning to previous routes:
```javascript
// new route
scroller.save()

// popstate, return to previous route
scroller.restore()
```

Optionally, `restore()` can accept a callback as it's first and only parameter. If provided, the callback will be fired with the `scrollPosition` property, and you can do what you will with it. Use this for animated scrolling, etc.
```javascript
scroller.restore(pos => {
  // handle scrolling
})
```

The `scrollPosition` value is stored on the `history` object i.e. `history.state.scrollPosition`. For convenience, you can also call:
```javascript
scroller.state() // returns scrollPosition
```

## Example
To run the example, clone this repo, then:
```bash
# move into example dir
cd srraf/example
# install deps
npm i
# compile JS
npm run js:build # or js:watch
# serve index.html and update with changes
live-server 
```

MIT License
