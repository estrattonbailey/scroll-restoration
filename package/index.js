let time = 0
let prevtime = 0
let distance = 0
let prevscroll = null
let pool = []

export default (y, event = { timeStamp: 0 }, config = {}) => {
  let total = 0

  if (!event.timeStamp || event.timeStamp === 0) return 0

  time = event.timeStamp - prevtime
  distance = Math.abs(y - prevscroll || 0)
  prevscroll = y
  prevtime = event.timeStamp

  pool.push(distance/(time * (1 / (config.interval || 100))))
  if (pool.length > (config.pool || 10)) pool.shift()

  for (let i = 0; i < pool.length; i++) {
    total = (pool[i] + total)

    return total / (i + 1)
  }
}

