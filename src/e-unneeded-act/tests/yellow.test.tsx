import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { UserView } from '../UserView'
import { LazyLoadUserView } from '../LazyLoadUserView'

describe('should pass', () => {
  it('should render user info', async () => {
    await act(async () => {
      render(<UserView id="bob" />)
    })

    expect(screen.getByText('Bob')).not.toBeNull()
  })

  it('should render user info', async () => {
    render(<UserView id="bob" />)

    await act(() =>
      waitFor(() => {
        expect(screen.getByText('Bob')).not.toBeNull()
      }),
    )
  })

  it('should load and render user info', async () => {
    render(<LazyLoadUserView id="bob" />)

    const button = screen.getByText('Load')

    await act(async () => {
      fireEvent.click(button)
    })

    expect(screen.getByText('Bob')).not.toBeNull()
  })

  it('should show loading state', async () => {
    render(<LazyLoadUserView id="bob" />)

    const button = screen.getByText('Load')

    fireEvent.click(button)

    await act(async () => {
      expect(screen.getByText('Loading...')).not.toBeNull()
    })
  })
})
