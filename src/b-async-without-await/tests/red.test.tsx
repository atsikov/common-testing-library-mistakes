import { render, screen, waitFor } from '@testing-library/react'
import { UserView } from '../UserView'

describe.skip('should pass with incorrect assertion', () => {
  it('should render user info', async () => {
    render(<UserView id="bob" />)

    waitFor(() => {
      expect(screen.getByText('Alice')).not.toBeNull()
    })
  })
})
