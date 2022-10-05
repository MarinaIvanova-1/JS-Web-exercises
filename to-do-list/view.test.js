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
})