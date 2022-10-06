/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesModel = require('./notesModel');
const View = require('./view');

describe('View', () => {

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('displays an empty page if there are no notes', () => {
    const model = new NotesModel();
    const view = new View(model);
    view.displayNotes();
    expect(document.querySelectorAll('div.note').length).toBe(0);
  })

  it('displays notes on the page', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    model.addNote('Walk the dog');
    const view = new View(model);
    view.displayNotes();
    expect(document.querySelectorAll('.note').length).toBe(2);
  })

  it('allows a user to add a new note', () => {

    const model = new NotesModel();
    const view = new View(model);
    const inputEl = document.querySelector('#note-text-box')
    inputEl.value = "New note"

    const buttonAddNote = document.querySelector('#add-note');
    buttonAddNote.click();

    const messages = document.querySelectorAll('div.note');
    expect(messages[0].innerText).toEqual(inputEl.value);
  })

  it('refreshes the list of notes every time before the new note is added', () => {
    const model = new NotesModel();
    const view = new View(model);

    const inputEl = document.querySelector('#note-text-box')
    inputEl.value = "New note"

    const buttonAddNote = document.querySelector('#add-note');
    buttonAddNote.click();
    buttonAddNote.click();

    const notes = document.querySelectorAll('.note');
    expect(notes.length).toEqual(2)
  })
})