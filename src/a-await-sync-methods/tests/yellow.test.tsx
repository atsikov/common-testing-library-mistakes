import { render, screen } from '@testing-library/react'
import { UserView } from '../UserView'

describe('should pass with a warning', () => {
  it('should render user info', async () => {
    await render(<UserView id="bob" />)

    expect(screen.getByText('Bob')).not.toBeNull()
  })
})
