const args = process.argv.slice(2);
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
});