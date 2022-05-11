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
    return this.key;
  }

  click(event) {
    this.print(event);
  }

  keyDown(event) {
    const caps = event.getModifierState && event.getModifierState('CapsLock');
    const shift = event.getModifierState && event.getModifierState('Shift');
    this.print(event, caps, shift);
    this.key.classList.add('active');
    if (this.keyCode === 'ShiftLeft' || this.keyCode === 'ShiftRight' || event.target.value === 'ShiftLeft' || event.target.value === 'ShiftRight') {
      this.shift = true;
      this.keyboard.changeLanguage();
    }
    if (caps) {
      this.shift = true;
      this.keyboard.changeLanguage();
    } else if (!caps) {
      this.shift = false;
      this.keyboard.changeLanguage();
    }
  }

  keyUp() {
    this.key.classList.remove('active');
    if (this.keyCode === 'ShiftLeft' || this.keyCode === 'ShiftRight' || this.key.value === 'ShiftLeft' || this.key.value === 'ShiftRight') {
      this.shift = false;
      this.keyboard.changeLanguage();
    }
  }

  print(event, caps, shift) {
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
    } else if (event.shiftKey || shift || this.key.value === 'ShiftLeft' || this.key.value === 'ShifRight') {
      if (this.data.shift !== null) {
        textArea.value += this.data.shift;
      }
    } else if (this.data.code === 'CapsLock' || this.key.value === 'CapsLock') {
      if (caps) {
        this.data.value = '';
        textArea.value += this.data.value.toUpperCase();
      } else {
        textArea.value += this.data.value;
      }
    } else if (this.keyCode === 'AltLeft' || this.keyCode === 'ControlLeft' || this.keyCode === 'ControlRight' || this.keyCode === 'AltRight' || this.keyCode === 'MetaLeft') {
      textArea.textContent += '';
    } else {
      textArea.value += this.data.value;
    }
  }

  changeLanguage() {
    const { lang, shift } = this.keyboard;
    keysData[0][lang].forEach(() => {
      this.data = keysData[0][lang].find((keyDataCode) => keyDataCode.code === this.keyCode);
    });
    if (shift && this.data.shift !== null) {
      this.key.innerHTML = `<span class="key-value">${this.data.shift}</span>`;
    } else {
      this.key.innerHTML = `<span class="key-value">${this.data.value}</span>`;
    }
    if (!shift) {
      this.key.innerHTML = `<span class="key-value">${this.data.value}</span>`;
    }
    localStorage.setItem('language', lang);
  }
}

export default Key;
