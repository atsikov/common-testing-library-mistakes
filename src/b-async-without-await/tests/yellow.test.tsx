import { render, screen, waitFor } from '@testing-library/react'
import { UserView } from '../UserView'

describe('should pass', () => {
  it('should render user info', async () => {
    render(<UserView id="alice" />)

    waitFor(() => {
      expect(screen.getByText('Alice')).not.toBeNull()
    })
  })
})
