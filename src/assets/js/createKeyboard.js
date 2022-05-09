import Key from './key';
import control from './control';

class Keyboard {
  constructor(lang, textArea, shift, shiftValue) {
    this.lang = lang;
    this.textArea = textArea;
    this.shift = shift;
    this.shiftValue = shiftValue;
  }

  generateKeyboard() {
    this.template = [
      ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
      ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
      ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
      ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
      ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
    ];
    const { body } = document;
    const container = control('div', 'container', '', '');
    body.append(container);
    const keyboardWrapper = control('div', 'keyboard-wrapper', '', '');
    const textArea = control('textarea', 'keyboard__input', '', '');
    container.append(textArea);
    container.append(keyboardWrapper);

    this.keys = {};
    this.template.forEach((row) => {
      const rowEl = document.createElement('div');
      rowEl.classList.add('keyboard__row');
      row.forEach((keyCode) => {
        const key = new Key(keyCode, this.lang, textArea);
        this.keys[keyCode] = key;
        key.keyboard = this;
        rowEl.append(key.createKey());
      });

      keyboardWrapper.append(rowEl);
    });

    document.addEventListener('keydown', (event) => this.eventHandler(event));
    document.addEventListener('keyup', (event) => { this.eventHandler(event); });
  }

  eventHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    let language = localStorage.getItem('language');
    const key = this.keys;
    const keyCode = event.code;
    if (event.type === 'keydown') {
      this.lang = language;
      if (keyCode === 'ShiftLeft' || keyCode === 'ShiftRight') {
        this.shift = true;
        // this.shiftValue = key[keyCode].data.shift;
        // console.log(key[keyCode].data.shift);
        key[keyCode].keyDown(event);
      }
      if (key[keyCode]) {
        key[keyCode].keyDown(event);
      }

      /*
      this.shiftValue = key[keyCode].data.shift;
      if (this.shiftValue) {
        key[keyCode].keyDown(this.shiftValue);
      }
      */
    }
    if (event.type === 'keyup' && key[keyCode]) {
      key[keyCode].keyUp(event);
      if (keyCode === 'ShiftLeft' || keyCode === 'ShiftRight') {
        this.shift = false;
      }
      key[keyCode].keyUp(event);
    }
    if (event.ctrlKey && event.altKey) {
      if (language === 'ru') {
        language = 'en';
      } else {
        language = 'ru';
      }
      this.lang = language;
      this.changeLanguage();
    }
  }

  changeLanguage() {
    Object.keys(this.keys).forEach((keyCode) => {
      this.keys[keyCode].changeLanguage();
    });
  }
}

export default Keyboard;
