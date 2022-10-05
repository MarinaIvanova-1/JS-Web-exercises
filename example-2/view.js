class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }

  addParagraph() {
    const paragraph = document.createElement('p');
    paragraph.innerText = 'This paragraph has been dynamically added by JavaScript!';
    this.mainContainerEl.append(paragraph)
  }

  clearParagraphs() {
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(paragraph => paragraph.remove());
  }
}

module.exports = View;