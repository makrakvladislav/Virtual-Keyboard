import Keyboard from './createKeyboard';

window.onload = () => {
  const keyboard = new Keyboard('en');
  keyboard.generateKeyboard();

  // console.log(keys);
};
