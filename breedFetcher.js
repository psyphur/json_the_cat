const request = require('request');
const breedInput = process.argv[2];
const API_URL = 'https://api.thecatapi.com/v1/breeds/search?q=';
const searchQuery = API_URL + breedInput;

request(searchQuery, (err, res, body) => {
  const data = JSON.parse(body);

  if (data.length > 0) {
    if (err) {
      console.log(err);
    } else {
      console.log(data[0].description);
    }
  } else {
    console.log("Breed not found. Try again.");
  }
});