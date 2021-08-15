import { useUserQuery } from './queries'

export const UserView = ({ id }: { id: string | null }) => {
  const data = useUserQuery(id)

  if (data === null) return <div>Loading...</div>

  return <>{data}</>
}
