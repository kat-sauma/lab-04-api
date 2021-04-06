const { default: axios } = require('axios');

const getDadJoke = async (query) => {
  const { data } = await axios.get(
    `https://icanhazdadjoke.com/search?term=${query}`
  );

  return data.joke;
};

module.exports = { getDadJoke };