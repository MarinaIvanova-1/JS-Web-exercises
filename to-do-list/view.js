const model = require('./notesModel')

class View {
  constructor(model) { 
    this.model = model
    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayNotes() {
    this.model.getNotes().forEach(note => {
      const div = document.createElement('div');
      div.innerText = note;
      div.className = "note";
      this.mainContainerEl.append(div);
    })
  }
}

module.exports = View;