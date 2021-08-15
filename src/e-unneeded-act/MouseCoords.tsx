import { useEffect, useState } from 'react'

export const MouseCoords = () => {
  const [coords, setCoords] = useState('0, 0')
  useEffect(() => {
    const onMouseMove = (event: MouseEvent) =>
      setCoords(`${event.clientX}, ${event.clientY}`)

    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  return <div>Cursor at {coords}</div>
}
