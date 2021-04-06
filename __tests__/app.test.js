const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Joke = require('../lib/models/Joke');

describe('lab-04-api routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  let joke;
  beforeEach(async () => {
    joke = await Joke.insert({ joke: 'xc21Lmbxcib' });

  });

  it('get a joke with the search term in it', async () => {

    const res = await request(app)
    .get(`/api/v1/jokes/hipster`);
    expect(res.body).toEqual({
      id: expect.any(String),
      joke: expect.any(String)
    });
  });

  it.skip('saves your favorite dad joke', async () => {
    const res = await request(app)
      .post('/api/v1/favorites')
      .send({ userName: 'test user', favoriteCharacter: '030555b3-4c92-4fce-93fb-e70c3ae3df8b', hairColor: 'Brown' });

    expect(res.body).toEqual({
      id: expect.any(String),
      userName: 'test user',
      favoriteCharacter: '030555b3-4c92-4fce-93fb-e70c3ae3df8b',
      hairColor: expect.any(String),
    });
  });
});
