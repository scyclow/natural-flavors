import { useState, useEffect } from 'react'

export const prettyNumber = n => n
  ? Number(n.substring(0, n.length - 14)) / 10000
  : null


export const fmt = (n) => {
  const r = Math.floor(n)
  if (r < 10) return '0' + r
  else return '' + r
}

export const getTimes = (endTime) => {
  const now = Date.now()
  const diff = ((endTime||0) - now)
  const h = (diff / 86400000) * 24
  const m = (h - Math.floor(h)) * 60
  const s = (m - Math.floor(m)) * 60
  const e = diff < 0  && endTime

  return {
    h: Math.floor(h),
    m: Math.floor(m),
    s: Math.floor(s),
    e
  }
}

export function useCountdown(endTime) {
  const endTimeSet = !!endTime
  const { h, m, s, e } = getTimes(endTime)

  const [hours, setHours] = useState(endTimeSet ? h : 0)
  const [minutes, setMinutes] = useState(endTimeSet ? m : 0)
  const [seconds, setSeconds] = useState(endTimeSet ? s : 0)
  const [expired, setExpired] = useState(endTimeSet ? e : 0)

  useEffect(() => {
    const interval = setInterval(() => {
      const { h, m, s, e } = getTimes(endTime)

      setHours(h)
      setMinutes(m)
      setSeconds(s)
      setExpired(e)
    }, 1000)

    return () => clearInterval(interval)
  })

  return {
    hours, minutes, seconds, expired
  }
}

export function times(n, fn) {
  const out = []
  for (let i = 0; i < n; i++) {
    out.push(fn(i))
  }
  return out
}