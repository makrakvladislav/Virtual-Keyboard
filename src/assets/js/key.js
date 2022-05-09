import keysData from './keysData';
import control from './control';

class Key {
  constructor(keyCode, lang, textArea) {
    this.keyCode = keyCode;
    this.lang = lang;
    this.data = [];
    this.textArea = textArea;
    // console.log(keyCode);
    // console.log(this.lang);
    keysData[0][this.lang].forEach(() => {
      this.data = keysData[0][this.lang].find((keyDataCode) => keyDataCode.code === keyCode);
    });
    // console.log(this.data);
  }

  createKey() {
    /*
    const template = '';
    const key = document.createElement('button');
    key.classList.add('key');
    key.value = this.keyCode;
    let shiftValue = '';
    if (this.data.shift !== null) {
      shiftValue = this.data.shift;
    }
    template += `
      <span class="key--shift">${shiftValue}</span>
      ${this.data.value}
    `;
    key.innerHTML = template;
    key.onclick = (event) => {
      console.log(event);
      this.click(event.target);
    };
    const button = document.createElement('button');
    button.classList.add('key');
    */
    let shiftValue = '';
    if (this.data.shift !== null) {
      shiftValue = this.data.shift;
    }
    this.key = control('button', 'key-button', this.data.value, this.keyCode, '');
    // this.title = control('button', 'key', this.data.value, this.keyCode, shiftValue);
    // console.log(this.title);
    // document.body.append(this.title);
    this.key.onclick = (event) => {
      // console.log(event);
      this.click(event.target);
    };
    // console.log(key);
    return this.key;
    // return key;
  }

  click() {
    this.print();
  }

  keyDown() {
    this.print();
    this.key.classList.add('active');
    // console.log(this.key);
    console.log(this.keyCode);
    if (this.keyCode === 'ShiftLeft') {
      this.shift = true;
      this.keyboard.changeLanguage();
    }
  }

  keyUp() {
    this.key.classList.remove('active');
    console.log(this.keyCode);
    if (this.keyCode === 'ShiftLeft') {
      this.shift = false;
      this.keyboard.changeLanguage();
    }
  }

  print() {
    const { textArea } = this;
    const textAreaValue = textArea.value;
    const strStart = textArea.selectionStart;
    const strEnd = textArea.selectionEnd;

    if (this.key.value === 'Tab') {
      textArea.value += '    ';
    } else if (this.keyCode === 'Enter') {
      textArea.value += '\n';
    } else if (this.keyCode === 'Backspace') {
      textArea.value = textAreaValue.substring(0, strStart - 1) + textAreaValue.substring(strEnd);
      textArea.setSelectionRange(strStart - 1, strStart - 1);
    } else if (this.keyCode === 'Delete') {
      textArea.value = textAreaValue.substring(0, strStart) + textAreaValue.substring(strStart + 1);
      textArea.setSelectionRange(strStart, strStart);
    } else if (this.keyCode === 'ShiftLeft' || this.keyCode === 'ShiftRight') {
      textArea.textContent.toUpperCase();
      console.log(this.value);
    } else {
      textArea.value += this.data.value;
    }
    textArea.focus();
  }

  changeLanguage() {
    const { lang, shift } = this.keyboard;
    // console.log(lang);
    keysData[0][lang].forEach(() => {
      this.data = keysData[0][lang].find((keyDataCode) => keyDataCode.code === this.keyCode);
    });
    if (shift) {
      this.key.innerHTML = `<span class="key-value">${this.data.shift}</span>`;
    } else {
      this.key.innerHTML = `<span class="key-value">${this.data.value}</span>`;
    }
    // console.log(this.data);
    // this.key.innerHTML = `<span class="key-value">${this.data.value}</span>`;
    // console.log(this.key);
    localStorage.setItem('language', lang);
  }
}

export default Key;
