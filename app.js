console.log('Initilized app.js'); // Simply for learning to track how and when files are executed.

//Dependencies
const fs = require('fs'); // Getting the fs functions from node.js (const is used to avoid overwritting)
const os = require('os'); // Getting os functions
const _ = require('lodash');

// My Files
const notes = require('./notes.js');

var filteredArray = _.uniq(['Scot', 'Scot', 1, 1, 2, 3, 4, 5, 6, 7]);
console.log(filteredArray);

console.log(_.isString('Scot'));
// var res = notes.addNote();
// console.log(res);

// var add = notes.add;
// console.log(add(1, 5));
// var user = os.userInfo();

// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);