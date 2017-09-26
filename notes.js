console.log('Initilized notes.js');
const fs = require('fs');

var fetchNotes = function () {
    //If the notes-data.json file does note exist this will fail
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};
var saveNotes = function (notes) {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};


var addNote = function (title, body) {
    var notes = fetchNotes();
    var note = {
        title,
        body,
    };



    //Searching and filterting for duplicate notes
    var duplicateNotes = notes.filter(function (note) {
        return note.title === title;
    });
    if (duplicateNotes.length === 0) {
        notes.push(note);

        // Sort the object by title
        notes.sort(function (a, b) {
            if (a.title < b.title) return -1;
            if (a.title > b.title) return 1;
            return 0;
        });

        console.log('Notes Sorted');
        saveNotes(notes);
        return note;
    }

};

var getAll = function () {
    console.log('getting all notes');
};

var getNote = function (title) {
    console.log('getting note', title);
};

var removeNote = function (title) {
    console.log('removing', title);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};