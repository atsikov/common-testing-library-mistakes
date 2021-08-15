import { render, screen } from '@testing-library/react'
import { UserAndPartnerView } from '../UserAndPartnerView'
import { UserView } from '../UserView'

describe.skip('should pass', () => {
  it('should render user info', async () => {
    render(<UserView id="bob" />)

    expect(await screen.findByText('Bob')).not.toBeNull()
  })

  it('should render user and partner info', async () => {
    render(<UserAndPartnerView id="alice" />)

    expect(await screen.findByText('Alice and Charlie')).not.toBeNull()
  })
})
