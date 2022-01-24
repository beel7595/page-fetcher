
const url = process.argv.slice(2)[0];
const targetUrl = process.argv.slice(2)[1];
const request = require('request');
const fs = require("fs");
request(url, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    // body.
    fs.writeFile(targetUrl, body, (error) => {
        if (error) {
            console.log("Failed to write to file");
            return;
        }
        console.log("Downloaded and saved 3261 bytes to ./index.html")
    });
});