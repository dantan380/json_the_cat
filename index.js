const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => { //Call fetch and pass it an anonymous function that takes two parameters.
  if (error) {
    console.log("Error:", error); //If error, console.log it.
  } else {
    console.log(desc); //If not, console.log desc, which should be the data received from the API request.
  }
});