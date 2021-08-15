import { useEffect, useRef, useState } from 'react'
import { getUser } from './api'

export const useUserQuery = (id: string | null) => {
  const isMounted = useRef(true)
  const [data, setData] = useState<string | null>(null)

  useEffect(() => {
    isMounted.current = true

    if (!id) {
      setData(null)
      return
    }

    getUser(id).then(data => {
      if (isMounted.current) {
        setData(data)
      }
    })

    return () => {
      isMounted.current = false
    }
  }, [id])

  return data
}
