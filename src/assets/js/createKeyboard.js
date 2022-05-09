import keysData from './keysData';
import Key from './key';

class Keyboard {
  constructor(lang, textArea) {
    this.lang = lang;
    this.textArea = textArea;
  }

  generateKeyboard() {
    this.template = [
      ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
      ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
      ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
      ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
      ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
    ];
    // this.keys = [];
    const { body } = document;
    const keyboardWrapper = document.createElement('div');
    keyboardWrapper.classList.add('keyboard-wrapper');
    body.append(keyboardWrapper);
    const textArea = document.createElement('textarea');
    textArea.classList.add('keyboard__input');
    body.prepend(textArea);

    this.keys = {};
    this.template.forEach((row) => {
      const rowEl = document.createElement('div');
      rowEl.classList.add('keyboard__row');
      row.forEach((keyCode) => {
        const key = new Key(keyCode, this.lang, textArea);
        this.keys[keyCode] = key;
        key.keyboard = this;
        rowEl.append(key.createKey());
        // console.log(key);
      });

      keyboardWrapper.append(rowEl);
    });

    document.addEventListener('keydown', (event) => this.eventHandler(event));
    document.addEventListener('keyup', (event) => { this.eventHandler(event); });
    // window.addEventListener('mousedown', (event) => { this.eventHandler(event); });
    // window.addEventListener('mouseup', (event) => { this.eventHandler(event); });
    /*
    const { body } = document;

    const textArea = document.createElement('textarea');
    textArea.classList.add('keyboard-textarea');
    body.append(textArea);

    const data = [...keysData];
    const { lang } = this;

    body.append(keyboardWrapper);
    console.log(this.textArea);
    data.forEach((item) => {
      item[lang].forEach((key) => {
        console.log(key);
        this.keys.push(new Key(key));
      });
    });
    // const createKey = new Key();
    this.keys.forEach((item) => {
      keyboardWrapper.append(item.createKey());
    });
    */
  }

  eventHandler(event) {
    event.preventDefault();
    event.stopPropagation();

    const key = this.keys;
    if (event.type === 'keydown') {
      const keyCode = event.code;
      key[keyCode].keyDown(event);
    }
    if (event.type === 'keyup') {
      const keyCode = event.code;
      key[keyCode].keyUp(event);
    }
    let language = localStorage.getItem('language');
    if (event.ctrlKey && event.altKey) {
      if (language === 'ru') {
        language = 'en';
      } else {
        language = 'ru';
      }
      console.log(language);
      this.lang = language;
      this.changeLanguage();
    }
    console.log(event);
    if (event.key === 'Shift') {
      console.log('shift');
      this.lang = language;
      this.shiftKey();
    }
  }

  changeLanguage() {
    Object.keys(this.keys).forEach((keyCode) => {
      this.keys[keyCode].changeLanguage();
    });
  }
}

export default Keyboard;
