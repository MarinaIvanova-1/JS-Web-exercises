const NotesApi = require('./notesApi')
require('jest-fetch-mock').enableMocks()

describe('NotesApi', () => {
  it('fetches data from the notes api', (done) => {
    const notesApi = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify({
      name: "New note"
    }))

    notesApi.loadNotes((returnedDataFromApi) => {
      expect(returnedDataFromApi.name).toBe("New note"); 
      done();
    })
  })
})