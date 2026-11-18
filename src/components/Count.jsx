import { useEffect, useState } from 'react'

export default function Count({ to }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setN((x) => (x >= to ? (clearInterval(t), x) : x + 1)), 260)
    return () => clearInterval(t)
  }, [to])
  return n
}
