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
    joke = await Joke.insert({ userName: 'test user', joke: 'xc21Lmbxcib' });

  });

  it('get a joke with the search term in it', async () => {

    const res = await request(app)
    .get(`/api/v1/jokes/hipster`);
    expect(res.body).toEqual({
      id: expect.any(String),
      joke: expect.any(String)
    });
  });

  it('saves your favorite dad joke', async () => {
    const res = await request(app)
      .post('/api/v1/favorites')
      .send({ userName: 'test user', favoriteJoke: 'xc21Lmbxcib' });

    expect(res.body).toEqual({
      id: expect.any(String),
      user_name: 'test user',
      favorite_jokes: 'xc21Lmbxcib'
    });
  });
});
