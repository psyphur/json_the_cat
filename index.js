const { fetchBreedDescription } = require('./breedFetcher');
const breedInput = process.argv[2];
// const breedName = API_URL + breedInput;

fetchBreedDescription(breedInput, (err, desc) => {
  if (err) {
    console.log('Error fetch details: ', err);
  } else {
    console.log(desc);
  }
});