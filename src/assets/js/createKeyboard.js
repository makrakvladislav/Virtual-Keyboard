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
        return key;
      });

      keyboardWrapper.append(rowEl);
    });

    keyboardWrapper.addEventListener('mousedown', (event) => this.eventHandler(event));
    keyboardWrapper.addEventListener('mouseup', (event) => this.eventHandler(event));
    document.addEventListener('keydown', (event) => this.eventHandler(event));
    document.addEventListener('keyup', (event) => this.eventHandler(event));
  }

  eventHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    let language = localStorage.getItem('language');
    const key = this.keys;
    const keyCode = event.code;
    if (event.type === 'mousedown') {
      if (!event.target.closest('.key-button')) return;
      this.lang = language;
      const keyVal = event.target.closest('.key-button').value;

      if (keyVal === 'ShiftLeft' || keyVal === 'ShiftRight' || keyVal === 'CapsLock') {
        this.shift = true;
        this.shiftValue = key[event.target.value].data.shift;
        key[keyVal].keyDown(event);
      }
      key[keyVal].click(event);
    }
    if (event.type === 'mouseup') {
      if (!event.target.closest('.key-button')) return;
      const keyVal = event.target.closest('.key-button').value;
      key[keyVal].keyUp(event);
      if (event.target.value === 'ShiftLeft' || event.target.value === 'ShiftRight') {
        this.shift = false;
      }
      key[keyVal].keyUp(event);
    }
    if (event.type === 'keydown') {
      this.lang = language;
      if (keyCode === 'ShiftLeft' || keyCode === 'ShiftRight' || keyCode === 'CapsLock') {
        this.shift = true;
        this.shiftValue = key[keyCode].data.shift;
        key[keyCode].keyDown(event);
      }
      if (key[keyCode]) {
        key[keyCode].keyDown(event);
      }
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
