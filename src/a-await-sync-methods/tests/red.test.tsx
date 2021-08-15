import { render, screen } from '@testing-library/react'
import { UserAndPartnerView } from '../UserAndPartnerView'

describe.skip('should fail', () => {
  it('should render user and partner info', async () => {
    await render(<UserAndPartnerView id={'alice'} />)

    expect(screen.getByText('Alice and Charlie')).not.toBeNull()
  })
})
