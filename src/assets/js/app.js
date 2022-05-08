import Keyboard from './createKeyboard';

window.onload = () => {
  let language;
  if (localStorage.getItem('language')) {
    language = localStorage.getItem('language');
  } else {
    localStorage.setItem('language', 'en');
  }
  const keyboard = new Keyboard(language);
  keyboard.generateKeyboard();

  // console.log(keys);
};
