import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { TransactionsWithDetails } from '../TransactionsWithDetails'

describe.skip('should hang', () => {
  it('should render transaction details', async () => {
    render(<TransactionsWithDetails />)

    await waitFor(() => {
      fireEvent.click(screen.getByText('Id: one', { exact: false }))
      expect(screen.getByText('Coffee', { exact: false })).not.toBeNull()
      expect(screen.getByText('Mega Mall one', { exact: false })).not.toBeNull()
    })
  })
})
