class MessageView {
  constructor() {
    this.buttonElShow = document.querySelector('#show-message-button');

    this.buttonElShow.addEventListener('click', () => {
       this.displayMessage();
    });

    this.buttonElHide = document.querySelector('#hide-message-button');

    this.buttonElHide.addEventListener('click', () => {
      this.hideMessage();
    })
  }

  displayMessage() {
    const div = document.createElement('div');
    div.setAttribute('id', 'message');
    const inputEl = document.querySelector('#message-input');
    // console.log(inputEl.value)
    div.innerText = inputEl.value
    const mainContainer = document.querySelector('#main-container');
    mainContainer.append(div);
  }

  hideMessage() {
    const message = document.querySelector('#message');
    message.remove();
  }
}

module.exports = MessageView;