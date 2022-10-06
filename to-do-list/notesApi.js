class NotesApi {
  loadNotes(callback) {
    fetch('http://localhost:3000/notes')
      .then(data => data.json())
      .then(json => callback(json))
  }
}

module.exports = NotesApi;