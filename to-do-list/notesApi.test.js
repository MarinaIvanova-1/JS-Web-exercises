const NotesApi = require('./notesApi')

require('jest-fetch-mock').enableMocks()

describe('NotesApi', () => {
  it('fetches data from the notes api', (done) => {
    const notesApi = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify({
      content: "New note"
    }))

    notesApi.loadNotes((returnedDataFromApi) => {
      expect(returnedDataFromApi.content).toEqual("New note"); 
      done();
    })
  })

  it('saves the note to the server', (done) => {
    const notesApi = new NotesApi();

    const note = "New note"
    
    fetch.mockResponseOnce(JSON.stringify({
        content: note
      })
    );

    notesApi.createNote(note, (returnedDataFromApi) => {
      expect(returnedDataFromApi.content).toEqual(note); 
      done();
    });
  });
});