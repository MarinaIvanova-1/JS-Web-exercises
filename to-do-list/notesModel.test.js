const NotesModel = require('./notesModel');

describe('NoteModel', () => {
  it('returns the list of notes', () => {
    const model = new NotesModel();
    expect(model.getNotes()).toEqual([]);
  })

  it('adds notes to the list', () => {
    const model = new NotesModel();
    model.addNoteToModel('Buy milk');
    model.addNoteToModel('Go to the gym');
    expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym'])
  })

  it('resets all the notes', () => {
    const model = new NotesModel();
    model.addNoteToModel('Buy milk');
    model.addNoteToModel('Go to the gym');
    model.reset();
    expect(model.getNotes()).toEqual([])
  })
})