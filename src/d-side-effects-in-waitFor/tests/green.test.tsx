import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { TransactionsWithDetails } from '../TransactionsWithDetails'

describe.skip('should pass', () => {
  it('should render transaction details', async () => {
    render(<TransactionsWithDetails />)

    fireEvent.click(await screen.findByText('Id: one'))

    await waitFor(() => {
      expect(screen.getByText('Description: Coffee')).not.toBeNull()
      expect(screen.getByText('Merchant: Mega Mall one')).not.toBeNull()
    })
  })
})
