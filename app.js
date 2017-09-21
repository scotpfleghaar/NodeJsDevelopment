console.log('Initilized app.js'); // Simply for learning to track how files are executed.
const fs = require('fs'); // Getting the fs functions from node.js (const is used to avoid overwritting)
const os = require('os'); // Getting os functions


var user = os.userInfo();

fs.appendFileSync('greetings.txt', `Hello ${user.username}!`);