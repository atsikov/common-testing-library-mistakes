import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import { LazyLoadUserView } from '../LazyLoadUserView'
import { MouseCoords } from '../MouseCoords'
import { Timer } from '../Timer'
import { UserView } from '../UserView'

describe.skip('should pass', () => {
  describe('unneeded act', () => {
    it('should render user info', async () => {
      render(<UserView id="bob" />)

      // findBy uses act() internally
      expect(await screen.findByText('Bob')).not.toBeNull()
    })

    it('should render user info', async () => {
      render(<UserView id="bob" />)

      // waitFor uses act() internally before running assertions
      await waitFor(() => {
        expect(screen.getByText('Bob')).not.toBeNull()
      })
    })

    it('should load and render user info', async () => {
      render(<LazyLoadUserView id="bob" />)

      const button = screen.getByText('Load')

      // fireEvent uses act() internally
      fireEvent.click(button)

      expect(await screen.findByText('Bob')).not.toBeNull()
    })

    it('should show loading state (wait for next state)', async () => {
      render(<LazyLoadUserView id="bob" />)

      const button = screen.getByText('Load')

      fireEvent.click(button)

      expect(screen.getByText('Loading...')).not.toBeNull()

      await waitForElementToBeRemoved(() => screen.getByText('Loading...'))
    })

    it('should show loading state (unmount)', async () => {
      const { unmount } = render(<LazyLoadUserView id="bob" />)

      const button = screen.getByText('Load')

      fireEvent.click(button)

      expect(screen.getByText('Loading...')).not.toBeNull()

      unmount()
    })
  })

  describe('required act', () => {
    it('should render mouse coords', () => {
      render(<MouseCoords />)

      // External DOM event
      act(() => {
        window.dispatchEvent(
          new MouseEvent('mousemove', { clientX: 100, clientY: 200 }),
        )
      })

      expect(screen.getByText('Cursor at 100, 200')).not.toBeNull()
    })

    it('should render timer', () => {
      jest.useFakeTimers()

      render(<Timer />)
      expect(screen.getByText('0')).not.toBeNull()

      // External Timer event
      act(() => {
        jest.advanceTimersByTime(1000)
      })

      expect(screen.getByText('1')).not.toBeNull()

      // External Timer event
      act(() => {
        jest.advanceTimersByTime(1000)
      })

      expect(screen.getByText('2')).not.toBeNull()

      jest.useRealTimers()
    })
  })
})
