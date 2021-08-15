import { useState } from 'react'
import { useUserQuery } from './queries'

export const LazyLoadUserView = ({ id }: { id: string | null }) => {
  const [requestedId, setRequestedId] = useState<string | null>(null)
  const data = useUserQuery(requestedId)

  return (
    <div>
      <button onClick={() => setRequestedId(id)}>Load</button>
      {requestedId !== null && <div>{data ? data : 'Loading...'}</div>}
    </div>
  )
}
