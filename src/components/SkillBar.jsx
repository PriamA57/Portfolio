import { useEffect, useState } from 'react'

export default function SkillBar({ value }) {
  const [w, setW] = useState(0)
  useEffect(() => {
    const t = setTimeout(() => setW(value), 150)
    return () => clearTimeout(t)
  }, [value])
  return <div className="bar"><i style={{ width: `${w}%` }}></i></div>
}
