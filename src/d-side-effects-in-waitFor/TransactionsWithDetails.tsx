import { useState } from 'react'
import { useTransactionsQuery, useTransactionDetailsQuery } from './queries'
import { TransactionDetails } from './TransactionDetails'

export const TransactionsWithDetails = () => {
  const [selectedTransactionId, setSelectedTransactionId] = useState<
    string | null
  >(null)

  const transactions = useTransactionsQuery()
  const details = useTransactionDetailsQuery(selectedTransactionId)

  if (transactions === null) return <div>Loading...</div>

  return (
    <ul>
      {transactions.map(tx => (
        <li
          key={tx.id}
          onClick={() =>
            setSelectedTransactionId(
              selectedTransactionId === tx.id ? null : tx.id,
            )
          }
        >
          <div>Id:{tx.id}</div>
          {selectedTransactionId === tx.id && (
            <TransactionDetails
              description={tx.description}
              merchant={details?.merchant}
            />
          )}
        </li>
      ))}
    </ul>
  )
}
