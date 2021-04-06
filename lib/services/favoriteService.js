const Favorite = require('../models/Favorite.js');
const { getDadJoke } = require('../utils/dadJokeApi.js')

module.exports = class FavoriteService {
    static async create({ userName, favoriteJoke }) {

        const joke = await getDadJoke(favoriteJoke);
        // await console.log(favoriteJoke)
        const favorites = await Favorite.insert({
            userName,
            favoriteJoke
        });
        
        return favorites;

    }
}