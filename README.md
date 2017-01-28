# svel
Calculate velocity over an interval for scroll or resize events.

## Install
```bash
npm i svel --save
```

## Usage 
### svel(scrollY, scrollEvent[, config])
Where `scrollY` is `window.scrollY || window.pageYOffset`, `scrollEvent` is the native event emitted by `window.onscroll`, and `config` is an optional config object. Default config: `{ pool: 10, interval: 100 }`.

Basic example:
```javascript
import svel from 'svel'

window.addEventListener('scroll', event => {
  const speed = svel(window.scrollY, event)

  console.log(speed > 50 ? 'fast!' : 'slow')
})
```

Ideally you would use a more performant solution that uses a debounce or `requestAnimationFrame`:
```javascript
import srraf from 'srraf'
import svel from 'svel'

srrar.scroll.use(({ curr }, event) => {
  const speed = svel(curr, event)

  console.log(speed)
})
```

## How it works
This library is probably overlay simplistic for some use cases. 

It tracks average speed from a given number of ticks (`pool`) and over a specified time interval in milliseconds (`interval`). It returns this average at each tick, and then you can do what you want with the speed value.

Given the defaults for `pool` and `interval` (10 and 100, respectively), you'll get the average speed in `pixels/100ms` over the last 10 ticks. To get `pixels/second`, you would change `config.interval` to `1000`.

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
