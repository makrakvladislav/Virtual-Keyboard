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
    this.key = control('button', 'key', this.data.value, this.keyCode, shiftValue);
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

  click(target) {
    this.print();
    target.classList.add('active');
  }

  keyDown() {
    this.print();
    // console.log(event);
    return this;
    // this.key.classList.add('active');
  }

  print() {
    this.textArea.value += this.data.value;
  }

  changeLanguage() {
    const { lang } = this.keyboard;
    console.log(lang);
    keysData[0][lang].forEach(() => {
      this.data = keysData[0][lang].find((keyDataCode) => keyDataCode.code === this.keyCode);
    });
    // console.log(this.data);
    this.key.innerHTML = this.data.value;
    // console.log(this.key);
    localStorage.setItem('language', lang);
  }
}

export default Key;
