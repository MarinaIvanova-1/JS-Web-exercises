const NotesModel = require('./notesModel');
const NotesView = require('./notesView');
const NotesApi = require('./notesApi')

const api = new NotesApi();
const model = new NotesModel();
const view = new NotesView(model, api);

// view.displayNotes();

view.displayNotesFromApi();

