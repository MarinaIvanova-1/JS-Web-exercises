const model = require('./notesModel')

class View {
  constructor(model) { 
    this.model = model
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

  addNote() {
    const inputEl = document.querySelector('#note-text-box')
    this.model.addNote(inputEl.value)
    inputEl.value = ''
    const notes = document.querySelectorAll('div.note');
    notes.forEach(note => note.remove());
    this.displayNotes();
  }
}

module.exports = View;