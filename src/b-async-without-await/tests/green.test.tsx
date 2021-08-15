import { render, screen, waitFor } from '@testing-library/react'
import { UserView } from '../UserView'

describe.skip('should pass with correct and fail with incorrect assertion', () => {
  it('should render user info', async () => {
    render(<UserView id="alice" />)

    await waitFor(() => {
      expect(screen.getByText('Alice')).not.toBeNull()
    })
  })

  it('should render user info and fail', async () => {
    render(<UserView id="bob" />)

    await waitFor(() => {
      expect(screen.getByText('Alice')).not.toBeNull()
    })
  })
})
