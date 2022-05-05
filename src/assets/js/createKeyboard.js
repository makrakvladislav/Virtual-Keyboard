import keysData from './keysData';

class Keyboard {
  constructor({
    lang, code, value, shift,
  }) {
    this.lang = lang;
    this.code = code;
    this.value = value;
    this.shift = shift;
  }

  createKeys() {
    let template = '';
    const key = document.createElement('div');
    key.classList.add('keyboard__key');
    template += `<button>${this.value}</button>`;
    key.innerHTML = template;
    key.onclick = () => {
      console.log(this.value);
    };
    return key;
  }
}

const keys = [];
keysData.forEach((item) => {
  item.en.forEach((key) => {
    keys.push(new Keyboard(key));
  });
});

console.log(keys);
// cards.push(new Card(item));

function initKeyboard() {
  const { body } = document;
  const keyBoardWrapper = document.createElement('div');
  keyBoardWrapper.classList.add('keyboard-wrapper');
  body.append(keyBoardWrapper);

  keys.forEach((item) => {
    keyBoardWrapper.append(item.createKeys());
  });
}

initKeyboard();
