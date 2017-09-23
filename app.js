console.log('Initilized app.js'); // Simply for learning to track how and when files are executed.

//Dependencies
const fs = require('fs'); // Getting the fs functions from node.js (const is used to avoid overwritting)
const _ = require('lodash');

// My Files
const notes = require('./notes.js');

var command = process.argv[2];
console.log(process.argv);
console.log('Command: ', command);

if (command === 'add') {
    console.log('Adding New Note');
} else if (command === 'list') {
    console.log('Listing all notes');
} else if (command === 'read') {
    console.log('Reading note');
} else if (command === 'remove') {
    console.log('Removing Note');
} else {
    console.log('Command not recongized');
}