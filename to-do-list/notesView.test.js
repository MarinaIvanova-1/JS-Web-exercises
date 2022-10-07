/**
 * @jest-environment jsdom
 */
require('jest-fetch-mock').enableMocks()
const fs = require('fs');
const NotesModel = require('./notesModel');
const NotesView = require('./notesView');
const NotesApi = require('./notesApi')

describe('NotesView', () => {

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('displays an empty page if there are no notes', () => {
    const model = new NotesModel();
    const view = new NotesView(model);
    view.displayNotes();
    expect(document.querySelectorAll('div.note').length).toBe(0);
  })

  it('displays notes on the page', () => {
    const model = new NotesModel();
    model.addNoteToModel('Buy milk');
    model.addNoteToModel('Walk the dog');
    const view = new NotesView(model);
    view.displayNotes();
    expect(document.querySelectorAll('.note').length).toBe(2);
  })

  it('allows a user to add a new note', () => {

    const model = new NotesModel();
    const api = new NotesApi();
    const view = new NotesView(model, api);
    const inputEl = document.querySelector('#note-text-box')
    inputEl.value = "New note"

    const addNoteButton = document.querySelector('#add-note');
    addNoteButton.click();

    const messages = document.querySelectorAll('div.note');

    expect(messages[0].innerText).toEqual("New note");
  })

  it('refreshes the list of notes every time before the new note is added', () => {
    const model = new NotesModel();
    const api = new NotesApi();
    const view = new NotesView(model, api);

    const inputEl = document.querySelector('#note-text-box')
    inputEl.value = "New note"

    const buttonAddNote = document.querySelector('#add-note');
    buttonAddNote.click();
    buttonAddNote.click();

    const notes = document.querySelectorAll('.note');
    expect(notes.length).toEqual(2)
  })

  it('Fetches the notes through the api class', (done) => {
    const model = new NotesModel();
    const api = {
      loadNotes: ((callback) => {
        callback(["This is a note"]);
      })
    };

    const view = new NotesView(model, api);

    view.displayNotesFromApi()

    setTimeout(() => {
      const note = document.querySelector('.note');
      expect(note.innerText).toEqual("This is a note"); 
      done();
    }, 0)
  })


  it('shows an error message if there is no connection to the server', (done) => {
    const model = new NotesModel();
    const api = {
      loadNotes: (_, callbackError) => {
        callbackError();
      },
    };
    const view = new NotesView(model, api)

    view.displayNotesFromApi()

    setTimeout(() => {
      const notes = document.querySelectorAll('.note');
      expect(notes.length).toEqual(0)

      const error = document.querySelector('.error')
      expect(error.innerText).toEqual("Oops, something went wrong!")
      done();
    }, 0)
  })
})