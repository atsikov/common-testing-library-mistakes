import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { TransactionsWithDetails } from '../TransactionsWithDetails'

describe.skip('should pass', () => {
  it('should render transaction details', async () => {
    render(<TransactionsWithDetails />)

    await waitFor(() => {
      fireEvent.click(screen.getByText('one', { exact: false }))
    })

    await waitFor(() => {
      expect(screen.getByText('Coffee', { exact: false })).not.toBeNull()
      expect(screen.getByText('Mega Mall one', { exact: false })).not.toBeNull()
    })
  })
})
