export const getUser = async (id: string): Promise<string> =>
  id[0].toUpperCase().concat(id.slice(1))

export const getUserWithPartner = async (id: string): Promise<string> => {
  const user = await getUser(id)
  const partner = await (user[0] === 'A'
    ? getUser('charlie')
    : getUser('daisy'))

  return `${user} and ${partner}`
}
