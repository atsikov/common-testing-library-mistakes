import { useEffect, useState } from 'react'
import { getTransactions, getTransactionDetails } from './api'

export const useTransactionsQuery = () => {
  const [data, setData] = useState<
    | {
        id: string
        description: string
      }[]
    | null
  >(null)

  useEffect(() => {
    getTransactions().then(setData)
  }, [])

  return data
}

export const useTransactionDetailsQuery = (id: string | null) => {
  const [data, setData] = useState<{
    merchant: string
  } | null>(null)

  useEffect(() => {
    if (!id) {
      setData(null)
      return
    }

    getTransactionDetails(id).then(setData)
  }, [id])

  return data
}
