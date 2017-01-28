let time = 0
let prevtime = 0
let distance = 0
let prevscroll = 0
let pool = []

export default (y, { timeStamp: t }, config = {}) => {
  let total = 0

  time = t - prevtime
  distance = Math.abs(y - prevscroll)
  prevscroll = y
  prevtime = t

  pool.push(distance/(time * (1 / config.interval || 100)))
  if (pool.length > (config.pool || 10)) pool.shift()

  for (let i = 0; i < pool.length; i++) {
    total = (pool[i] + total)

    return total / (i + 1)
  }
}

