console.log('Initilized app.js'); // Simply for learning to track how and when files are executed.

//Dependencies
const fs = require('fs'); // Getting the fs functions from node.js (const is used to avoid overwritting)
const _ = require('lodash');
const yargs = require('yargs');

// My Files
const notes = require('./notes.js');


const argv = yargs.argv;

var command = argv._[0];
// console.log('Command: ', command);
// console.log('Process', process.argv);
console.log('yargs', argv);

if (command === 'add') {
    if (note === undefined) {
        var note = notes.addNote(argv.title, argv.body);
    } else {
        console.log('Note already in use');
    }

} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('Command not recongized');
}