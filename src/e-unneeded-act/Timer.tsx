import { useEffect, useState } from 'react'

export const Timer = () => {
  const [value, setValue] = useState(0)
  useEffect(() => {
    const interval = window.setInterval(
      () => setValue(state => state + 1),
      1000,
    )
    return () => window.clearInterval(interval)
  }, [])

  return <div>{value}</div>
}
