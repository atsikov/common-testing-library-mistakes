import faker from 'faker'

const CHRISTMAS_SONGS = [
  'All I Want For Christmas Is You',
  'Last Christmas',
  'Happy Xmas (War Is Over)',
  'Zat You, Santa Claus?',
  'Frosty the Snowman',
]

export const getRandomSong = () => faker.random.arrayElement(CHRISTMAS_SONGS)
