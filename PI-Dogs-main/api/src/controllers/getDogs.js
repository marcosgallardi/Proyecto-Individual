require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;
//const getImage = require("./getImage");

const getDogs = async () => {
  let { data } = await axios.get("https://api.thedogapi.com/v1/breeds", {
    headers: {
      'x-api-key': API_KEY,
    },
  });
 
  return data;
};

module.exports = getDogs;
