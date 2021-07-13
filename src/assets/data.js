import { v4 as uuid } from 'uuid';
import { lyric01 } from './lyrics/01';
import { lyric02 } from './lyrics/02';
import { lyric03 } from './lyrics/03';
import { lyric04 } from './lyrics/04';
import { lyric05 } from './lyrics/05';
import { lyric06 } from './lyrics/06';
import { lyric07 } from './lyrics/07';
import { lyric08 } from './lyrics/08';
import { lyric09 } from './lyrics/09';
import { lyric10 } from './lyrics/10';

const generateVotes = () => Math.floor(Math.random() * 100) + 1;

export const songs = [
  {
    id: uuid(),
    title: 'The Heart Wants What It Wants',
    artist: 'Selena Gomez',
    image: 'selena.jpg',
    writers: ['Selena Gomez', 'Antonina Armato', 'David Jost', 'Tim James'],
    album: 'For You',
    thumbnail: 'album01',
    genres: ['pop', 'r&b'],
    released: '2014-11-06',
    lyrics: lyric01,
    links: {
      youtube: 'https://music.youtube.com/watch?v=FhHP3vpTf4A&list=RDAMVMFhHP3vpTf4A',
      spotify: 'https://open.spotify.com/track/2dRvMEW4EwySxRUtEamSfG?autoplay=true',
      deezer: 'https://www.deezer.com/en/track/89805365?autoplay=true'
    },
    votes: generateVotes()
  },
  {
    id: uuid(),
    title: 'Traitor',
    artist: 'Olivia Rodrigo',
    image: 'olivia.jpg',
    writers: ['Olivia Rodrigo', 'Dan Nigro'],
    album: 'Sour',
    thumbnail: 'album02',
    genres: ['indie pop'],
    released: '2021-05-21',
    lyrics: lyric02,
    links: {
      youtube: 'https://music.youtube.com/watch?v=4QLvEIXlF6Q&list=RDAMVM4QLvEIXlF6Q',
      spotify: 'https://open.spotify.com/track/5CZ40GBx1sQ9agT82CLQCT?autoplay=true',
      deezer: 'https://www.deezer.com/en/track/1378352182?autoplay=true'
    },
    votes: generateVotes()
  },
  {
    id: uuid(),
    title: 'Close',
    artist: 'Nick Jonas',
    image: 'nick.jpg',
    writers: ['Robin Fredriksson', 'Mattias Larsson', 'Julia Michaels', 'Justin Tranter', 'Tove Nilsson'],
    album: 'Last Year Was Complicated',
    thumbnail: 'album03',
    genres: ['pop'],
    released: '2016-03-25',
    lyrics: lyric03,
    links: {
      youtube: 'https://music.youtube.com/watch?v=m-OKTa5e9xQ&list=RDAMVMm-OKTa5e9xQ',
      spotify: 'https://open.spotify.com/track/0BnF8gcEILVfPbe46GQlSB?autoplay=true',
      deezer: 'https://www.deezer.com/en/track/123874668?autoplay=true'
    },
    votes: generateVotes()
  },
  {
    id: uuid(),
    title: 'Salt',
    artist: 'Ava Max',
    image: 'ava.jpg',
    writers: ['Amanda Koci', 'Autumn Rowe', 'Henry Walter', 'Madison Love', 'Nicole Morier'],
    album: 'Heaven & Hell',
    thumbnail: 'album04',
    genres: ['dance-pop'],
    released: '2019-12-12',
    lyrics: lyric04,
    links: {
      youtube: 'https://music.youtube.com/watch?v=Z5NNPqJZy6g&list=RDAMVMZ5NNPqJZy6g',
      spotify: 'https://open.spotify.com/track/5ikMYV9hscSVE9ncSFidRL?autoplay=true',
      deezer: 'https://www.deezer.com/en/track/827958002?autoplay=true'
    },
    votes: generateVotes()
  },
  {
    id: uuid(),
    title: 'July',
    artist: 'Noah Cyrus',
    image: 'noah.jpg',
    writers: ['Noah Cyrus', 'Peter Harding', 'Michael Sonier'],
    album: 'The End of Everything',
    thumbnail: 'album05',
    genres: ['pop'],
    released: '2019-07-31',
    lyrics: lyric05,
    links: {
      youtube: 'https://music.youtube.com/watch?v=9jUh4X3WwqU&list=RDAMVM9jUh4X3WwqU',
      spotify: 'https://open.spotify.com/track/6J2LdBN97cDWn0MLxYh9HB?autoplay=true',
      deezer: 'https://www.deezer.com/en/track/796891282?autoplay=true'
    },
    votes: generateVotes()
  },
  {
    id: uuid(),
    title: 'Numbers',
    artist: 'Melanie Martinez',
    image: 'melanie.jpg',
    writers: ['Melanie Martinez'],
    album: 'K-12',
    thumbnail: 'album06',
    genres: ['trip-hop', 'electropop'],
    released: '2020-09-25',
    lyrics: lyric06,
    links: {
      youtube: 'https://music.youtube.com/watch?v=0ZhL5t4SXTk&list=RDAMVM0ZhL5t4SXTk',
      spotify: 'https://open.spotify.com/track/7D0VClhoNONSsdPYWwcTej?autoplay=true',
      deezer: 'https://www.deezer.com/en/track/1090381962?autoplay=true'
    },
    votes: generateVotes()
  },
  {
    id: uuid(),
    title: 'Is It Just Me?',
    artist: 'Sasha Sloan',
    image: 'sasha.jpg',
    writers: ['Nicolle Galyon', 'Sasha Yatchenko', 'Henry Agincourt'],
    album: 'Only Child',
    thumbnail: 'album07',
    genres: ['alternative/indie'],
    released: '2020-09-18',
    lyrics: lyric07,
    links: {
      youtube: 'https://music.youtube.com/watch?v=xe2EuWf9Hrw&list=RDAMVMxe2EuWf9Hrw',
      spotify: 'https://open.spotify.com/track/38MKH1U8zGuzNXbm5tCBrn?autoplay=true',
      deezer: ''
    },
    votes: generateVotes()
  },
  {
    id: uuid(),
    title: 'Think Before I Talk',
    artist: 'Astrid S',
    image: 'astrid.jpg',
    writers: ['Andrew Cedar', 'Madison Love', 'Scott Harris', 'Thomas Eriksen'],
    album: 'Leave It Beautiful',
    thumbnail: 'album08',
    genres: ['pop'],
    released: '2017-08-27',
    lyrics: lyric08,
    links: {
      youtube: 'https://music.youtube.com/watch?v=foriEhwfDeY&list=RDAMVMforiEhwfDeY',
      spotify: 'https://open.spotify.com/track/4lszNcJSaz61QT6gpMhFU1?autoplay=true',
      deezer: 'https://www.deezer.com/en/track/421484872?autoplay=true'
    },
    votes: generateVotes()
  },
  {
    id: uuid(),
    title: 'Heathens',
    artist: 'Twenty One Pilots',
    image: 'pilots.jpg',
    writers: ['Tyler Joseph'],
    album: 'Suicide Squad',
    thumbnail: 'album09',
    genres: ['rap rock', 'dark wave'],
    released: '2016-06-16',
    lyrics: lyric09,
    links: {
      youtube: 'https://music.youtube.com/watch?v=oLeROuCMwj8&list=RDAMVMoLeROuCMwj8',
      spotify: 'https://open.spotify.com/track/6i0V12jOa3mr6uu4WYhUBr?autoplay=true',
      deezer: 'https://www.deezer.com/en/track/126884459?autoplay=true'
    },
    votes: generateVotes()
  },
  {
    id: uuid(),
    title: 'Go Ahead and Break My Heart',
    artist: 'Blake Shelton',
    image: 'blake.jpg',
    writers: ['Blake Shelton', 'Gwen Stefani'],
    album: "If I'm Honest",
    thumbnail: 'album10',
    genres: ['country'],
    released: '2016-05-09',
    lyrics: lyric10,
    links: {
      youtube: 'https://music.youtube.com/watch?v=2lh2AMpVJSw&list=RDAMVM2lh2AMpVJSw',
      spotify: 'https://open.spotify.com/track/6eJBihAzTWRxvvjJWuRQXM?autoplay=true',
      deezer: 'https://www.deezer.com/en/track/124286696?autoplay=true'
    },
    votes: generateVotes()
  }
]