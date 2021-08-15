import { useEffect, useState } from 'react'
import { getUser } from './api'

export const useUserQuery = (id: string | null) => {
  const [data, setData] = useState<string | null>(null)

  useEffect(() => {
    if (!id) {
      setData(null)
      return
    }

    getUser(id).then(setData)
  }, [id])

  return data
}
