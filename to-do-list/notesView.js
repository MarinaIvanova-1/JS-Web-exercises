const model = require('./notesModel')
const api = require('./notesApi')

class NotesView {
  constructor(model, api) { 
    this.model = model
    this.api = api

    this.mainContainerEl = document.querySelector('#main-container');


    this.addNoteButton = document.querySelector('#add-note')
    this.addNoteButton.addEventListener('click', () => {
      this.addNote()
    })
  }

  displayNotes() {
    this.model.getNotes().forEach(note => {
      const div = document.createElement('div');
      div.innerText = note;
      div.className = "note";
      this.mainContainerEl.append(div);
    })
  }

  displayNotesFromApi() {
    this.api.loadNotes((notes) => {
      notes.forEach(note => {this.model.addNoteToModel(note)});
      this.displayNotes();
    })
  }
  

  addNote() {
    const inputEl = document.querySelector('#note-text-box')
    this.model.addNoteToModel(inputEl.value)
    inputEl.value = ''
    const notes = document.querySelectorAll('div.note');
    notes.forEach(note => note.remove());
    this.displayNotes();
  }
}

module.exports = NotesView;