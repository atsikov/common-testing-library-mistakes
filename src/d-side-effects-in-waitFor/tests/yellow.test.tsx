import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Transactions } from '../Transactions'

describe('should pass', () => {
  it('should render transaction details', async () => {
    render(<Transactions />)

    await waitFor(() => {
      fireEvent.click(screen.getByText('Id: one'))
      expect(screen.getByText('Description: Coffee')).not.toBeNull()
    })
  })
})
  