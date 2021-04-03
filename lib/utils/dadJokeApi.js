const { default: axios } = require('axios');

const getDadJoke = async (searchTerm) => {
  const { data } = await axios.get(
    `https://icanhazdadjoke.com/search?term=${searchTerm}`
  );

  return data.joke;
};

module.exports = { getDadJoke };