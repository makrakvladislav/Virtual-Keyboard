import keysData from './keysData';
import control from './control';

class Key {
  constructor(keyCode, lang, textArea) {
    this.keyCode = keyCode;
    this.lang = lang;
    this.data = [];
    this.textArea = textArea;
    keysData[0][this.lang].forEach(() => {
      this.data = keysData[0][this.lang].find((keyDataCode) => keyDataCode.code === keyCode);
    });
  }

  createKey() {
    this.key = control('button', 'key-button', this.data.value, this.keyCode, '');
    this.key.onclick = (event) => {
      this.click(event.target);
    };
    return this.key;
  }

  click() {
    this.print();
  }

  keyDown() {
    this.print();
    this.key.classList.add('active');
    if (this.keyCode === 'ShiftLeft') {
      this.shift = true;
      this.keyboard.changeLanguage();
    }
  }

  keyUp() {
    this.key.classList.remove('active');
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
    } else {
      textArea.value += this.data.value;
    }
    textArea.focus();
  }

  changeLanguage() {
    const { lang, shift } = this.keyboard;
    keysData[0][lang].forEach(() => {
      this.data = keysData[0][lang].find((keyDataCode) => keyDataCode.code === this.keyCode);
    });
    if (shift) {
      this.key.innerHTML = `<span class="key-value">${this.data.shift}</span>`;
    } else {
      this.key.innerHTML = `<span class="key-value">${this.data.value}</span>`;
    }
    localStorage.setItem('language', lang);
  }
}

export default Key;
