import faker from 'faker'
import { render, screen } from '@testing-library/react'
import { ChartBestSong } from '../ChartBestSong'
import { Users } from '../Users'
import { getRandomSong } from './helpers'

describe('should pass', () => {
  it('should render names', async () => {
    const names = Array(10)
      .fill(faker.name.firstName)
      .map(foo => foo())

    render(<Users names={names} />)

    names.forEach(name => expect(screen.getByText(name)).not.toBeNull())
  })

  it('should render song title', async () => {
    const title = getRandomSong()

    render(<ChartBestSong title={title} />)

    expect(screen.getByText(new RegExp(title))).not.toBeNull()
  })
})
