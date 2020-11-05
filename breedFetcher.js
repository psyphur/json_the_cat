const request = require('request');
const API_URL = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = function(breedInput, callback) {
  const breedName = API_URL + breedInput;

  request(breedName, (err, res, body) => {
    const data = JSON.parse(body);
  
    if (data.length > 0) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data[0].description);
      }
    } else {
      callback("Breed not found. Try again.", null);
    }
  });
};

module.exports = { fetchBreedDescription };