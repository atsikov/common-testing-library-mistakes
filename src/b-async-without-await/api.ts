export const getUser = async (id: string): Promise<string> =>
  id[0].toUpperCase().concat(id.slice(1))
