class NotesModel {
  constructor () {
    this.notes = []
  }

  getNotes() {
    return this.notes
  }

  addNoteToModel(note) {
    return this.notes.push(note);
  }

  reset() {
    this.notes = []
  }

  setNotes(data) {
    data.forEach ((note) => this.notes.push(note))
  }
}

module.exports = NotesModel