export const getTransactions = async () => [
  {
    id: 'one',
    description: 'Coffee',
  },
  {
    id: 'two',
    description: 'Cookie',
  },
]

export const getTransactionDetails = async (id: string) => ({
  merchant: `Mega Mall ${id}`,
})
