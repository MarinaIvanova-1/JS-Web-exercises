/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();

    expect(document.querySelector('#message')).not.toBeNull();
  });

  it('hides the message if the button is clicked again', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    const buttonElShow = document.querySelector('#show-message-button');
    const buttonElHide = document.querySelector('#hide-message-button');

    buttonElShow.click();
    buttonElHide.click();

    // expect(document.querySelectorAll('#message').length).toBe(0)
    expect(document.querySelector('#message')).toBeNull();
  })
});