import { useEffect, useRef } from 'react'

// Fait apparaître le contenu quand il entre dans l’écran
export default function Reveal({ children, delay = 0 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('on')
          obs.disconnect()
        }
      },
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="rv" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}
