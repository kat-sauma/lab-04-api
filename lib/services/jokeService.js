const Joke = require('../models/Joke.js');
const { getDadJoke } = require('../utils/dadJokeApi.js')

const Joke = require('../models/Joke')

module.exports = class JokeService {
    static async create({ joke }) {

        const searchTerm = await getDadJoke(joke);
        // await console.log(getD)
        const jokeReturn = await Joke.insert({
            joke
        });
        
        return jokeReturn;

    }
}