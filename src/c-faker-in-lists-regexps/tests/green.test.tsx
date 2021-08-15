import faker from 'faker'
import { render, screen } from '@testing-library/react'
import { ChartBestSong } from '../ChartBestSong'
import { Users } from '../Users'
import { getRandomSong } from './helpers'

describe.skip('always passes', () => {
  it.each(
    Array(500)
      .fill('')
      .map((_, idx) => idx),
  )('should render names - run %i', async () => {
    const names = Array(10)
      .fill(faker.name.firstName)
      .map(foo => foo())

    render(<Users names={names} />)

    names.forEach(name => expect(screen.getAllByText(name)).not.toHaveLength(0))
  })

  it.each(
    Array(100)
      .fill('')
      .map((_, idx) => idx),
  )('should render song title - run %i', async () => {
    const title = getRandomSong()

    render(<ChartBestSong title={title} />)

    expect(screen.getByText(title, { exact: false })).not.toBeNull()
  })

  it.each(
    Array(100)
      .fill('')
      .map((_, idx) => idx),
  )('should render song title - run %i', async () => {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping
    const escapeRegExp = (value: string) =>
      value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

    const title = getRandomSong()

    render(<ChartBestSong title={title} />)

    expect(screen.getByText(new RegExp(escapeRegExp(title)))).not.toBeNull()
  })
})
