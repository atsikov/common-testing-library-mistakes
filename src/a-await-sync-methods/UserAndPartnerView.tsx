import { useUserAndPartnerQuery } from './queries'

export const UserAndPartnerView = ({ id }: { id: string | null }) => {
  const data = useUserAndPartnerQuery(id)

  if (data === null) return <div>Loading...</div>

  return <>{data}</>
}
