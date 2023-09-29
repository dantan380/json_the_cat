const request = require('request');
/*const args = process.argv.slice(2);
const request = require('request');
request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    if (args[0] !== data[0].name) {
      console.log("Please enter a valid breed name.");
    } else {
      console.log(data[0].description);
    }
  }
});*/

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);	//If there is an error, call the callback function and pass it the error.
    } else {
      const data = JSON.parse(body);
      if (data.length > 0) {
        const description = data[0].description;
        callback(null, description); //If no error, call the callback function and pass it the description pulled from the api request.
      } else {
        callback('Breed not found', null); //If user did not type a breed name or mispelled, call callback and pass the string.
      }
    }
  });
};

module.exports = { fetchBreedDescription };
