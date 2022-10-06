class NotesApi {
  loadNotes(callback) {
    fetch('http://localhost:3000/notes')
      .then(data => data.json())
      .then(json => callback(json))
  }

    createNote = (note, callback) => {
      const noteObject = { content: note };

      fetch('http://localhost:3000/notes', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(noteObject),
      })
      .then((response) => response.json())
      .then((data) => {
        callback(data)
      })
      .catch((error) => {
        console.log(error)
      });
  }
}

module.exports = NotesApi;