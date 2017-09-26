// var obj = {
//     name: 'Scot',
// };

// // obj to JSON
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// // JSON to obj
// jsonObj = JSON.parse(stringObj);
// console.log(jsonObj);

// //JSON Example
// var personJson = {
//     "name": "Scot",
//     "age": "23"
// };

const fs = require('fs');
var origionalNote = {
    title: 'some title',
    body: 'some body'
};
var origionalNoteString = JSON.stringify(origionalNote);
fs.writeFileSync('notes.json', origionalNoteString);

var noteString = fs.readFileSync('notes.json');
// note
var note = JSON.parse(noteString);
console.log(noteString);
console.log(note);

console.log(note.title);