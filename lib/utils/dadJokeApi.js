const { default: axios } = require('axios');

const getCharacterInfo = async (characterName) => {
  const { data } = await axios.get(
    `https://icanhazdadjoke.com/`
  );

  return data.hair_color;
};

module.exports = { getCharacterInfo };