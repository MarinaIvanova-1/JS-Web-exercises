const NotesModel = require('./notesModel');
const View = require('./view');
const model = new NotesModel();

const view = new View(model);

view.displayNotes();

