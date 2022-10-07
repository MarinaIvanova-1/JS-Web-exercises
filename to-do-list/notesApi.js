class NotesApi {
  loadNotes(callback, callbackError) {
    fetch('http://localhost:3000/notes')
      .then(data => data.json())
      .then(json => callback(json))
      .catch((error) => {
        callbackError(error)
      })
  }

    createNote = (note, callback, callbackError) => {
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
        callback(data);
      })
      .catch((error) => {
        console.log(error);
        callbackError(error);
      });
  }
}

module.exports = NotesApi;