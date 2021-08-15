export const TransactionDetails = ({
  description,
  merchant,
}: {
  description?: string | null
  merchant?: string | null
}) => (
  <ul>
    {description && <li>Description: {description}</li>}
    {merchant && <li>Merchant: {merchant}</li>}
  </ul>
)
