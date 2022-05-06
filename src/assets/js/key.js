import keysData from './keysData';

class Key {
  constructor(keyCode, lang, textArea) {
    this.keyCode = keyCode;
    this.lang = lang;
    this.data = [];
    this.textArea = textArea;
    console.log(keyCode);
    console.log(this.lang);
    keysData[0][this.lang].forEach(() => {
      this.data = keysData[0][this.lang].find((keyDataCode) => keyDataCode.code === keyCode);
    });
    console.log(this.data);
  }

  createKey() {
    let template = '';
    const key = document.createElement('div');
    key.classList.add('keyboard__key');
    let shiftValue = '';
    if (this.data.shift !== null) {
      shiftValue = this.data.shift;
    }
    template += `
      <button class="key" value="${this.keyCode}">
        <span class="key--shift">${shiftValue}</span>
        ${this.data.value}
      </button>
    `;
    key.innerHTML = template;

    key.onclick = () => {
      key.classList.add('active');
      this.click();
    };

    return key;
  }

  click() {
    this.print();
    console.log(this.data.value);
  }

  print() {
    console.log(this.textArea);
    this.textArea.value += this.data.value;
  }

  changeLanguage() {
    console.log('language change');

    return this;
  }
}

export default Key;
