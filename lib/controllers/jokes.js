const { default: axios } = require('axios');
const { Router } = require('express');
const Joke = require('../models/Joke');

module.exports = Router()

  .get('/:query', async (req, res, next) => {
    try {
      const response = await axios.get(`https://icanhazdadjoke.com/search?term=${req.params.query}`, {
        headers: {
          'Accept': 'application/json'
        }
      });
      // console.log(response.data.results);
      res.json(response.data.results[1]);

    } catch (err) {

      next(err)
    }
    // Joke.find()
    //   .then((jokes) => res.send(jokes))
    //   .catch(next);
  });