import { useEffect, useState } from 'react'

const WORDS = ['Etudie au Lycée Robert Schuman', 'Futur développeur full stack']

export default function Typed() {
  const [text, setText] = useState('')

  useEffect(() => {
    let wi = 0, ci = 0, deleting = false, id
    const tick = () => {
      const word = WORDS[wi]
      ci += deleting ? -1 : 1
      setText(word.slice(0, ci))
      let delay = deleting ? 35 : 80
      if (!deleting && ci === word.length) { deleting = true; delay = 1400 }
      else if (deleting && ci === 0) { deleting = false; wi = (wi + 1) % WORDS.length; delay = 300 }
      id = setTimeout(tick, delay)
    }
    tick()
    return () => clearTimeout(id)
  }, [])

  return <div className="typed">{text}<b></b></div>
}
