import { useEffect, useRef, useState } from 'react'

// Hacker-style text reveal effect
export default function HackerText({ text = '', speed = 18, className = '' }) {
  const [display, setDisplay] = useState('')
  const frame = useRef(0)
  const raf = useRef(null)
  const letters = '█▓▒░/\\<>|(){}[]#%*&$^!?=+~-_'

  useEffect(() => {
    cancelAnimationFrame(raf.current)
    frame.current = 0

    const animate = () => {
      frame.current += 1
      const progress = Math.min(1, frame.current / (text.length * (60 / speed)))
      const revealed = Math.floor(progress * text.length)

      let next = ''
      for (let i = 0; i < text.length; i++) {
        if (i < revealed) {
          next += text[i]
        } else if (text[i] === ' ') {
          next += ' '
        } else {
          next += letters[Math.floor(Math.random() * letters.length)]
        }
      }
      setDisplay(next)

      if (progress < 1) raf.current = requestAnimationFrame(animate)
    }

    raf.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf.current)
  }, [text, speed])

  return <span className={`font-mono tracking-wide ${className}`}>{display}</span>
}
