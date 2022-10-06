/**
 * @jest-environment jsdom
 */

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
    const view = new NotesView(model);
    const inputEl = document.querySelector('#note-text-box')
    inputEl.value = "New note"

    const buttonAddNote = document.querySelector('#add-note');
    buttonAddNote.click();

    const messages = document.querySelectorAll('div.note');
    expect(messages[0].innerText).toEqual("New note");
    // This line doesn't work for some reason: expect(messages[0].innerText).toEqual(inputEl.value);
  })

  it('refreshes the list of notes every time before the new note is added', () => {
    const model = new NotesModel();
    const view = new NotesView(model);

    const inputEl = document.querySelector('#note-text-box')
    inputEl.value = "New note"

    const buttonAddNote = document.querySelector('#add-note');
    buttonAddNote.click();
    buttonAddNote.click();

    const notes = document.querySelectorAll('.note');
    expect(notes.length).toEqual(2)
  })

  // it('displays notes from the API', () => {
  //   const model = new NotesModel();
  //   const api = new NotesApi();
  //   const view = new NotesView(model, api);

  //   fetch.mockResponseOnce(JSON.stringify({
  //     name: "New note"
  //   }))

  //   expect(view.displayNotesFromApi()).toEqual('')
  // })

  it('Fetches the notes through the api class', (done) => {
    // const model = new NotesModel();
    const api = {
      loadNotes: (callback) => {
        callback([{ content: "This is a note"}]);
      },
    };

    const view = new NotesView(api);

    view.displayNotesFromApi(() => {
      const note = document.querySelector('.note');
      expect(note.textContent).toEqual("This is a note");
      done();
    })
  })
})