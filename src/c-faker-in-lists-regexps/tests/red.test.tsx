import faker from 'faker'
import { render, screen } from '@testing-library/react'
import { ChartBestSong } from '../ChartBestSong'
import { Users } from '../Users'
import { getRandomSong } from './helpers'

describe.skip('high chance to fail', () => {
  it.each(
    Array(200)
      .fill('')
      .map((_, idx) => idx),
  )('should render names - run %i', async () => {
    const names = Array(10)
      .fill(faker.name.firstName)
      .map(foo => foo())

    render(<Users names={names} />)

    names.forEach(name => expect(screen.getByText(name)).not.toBeNull())
  })

  it.each(
    Array(20)
      .fill('')
      .map((_, idx) => idx),
  )('should render song title - run %i', async () => {
    const title = getRandomSong()

    render(<ChartBestSong title={title} />)

    expect(screen.getByText(new RegExp(title))).not.toBeNull()
  })
})
