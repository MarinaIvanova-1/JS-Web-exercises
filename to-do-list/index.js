const NotesModel = require('./notesModel');
const View = require('./view');
const model = new NotesModel();

model.addNote('This is an example note');

const view = new View(model);

view.displayNotes();

