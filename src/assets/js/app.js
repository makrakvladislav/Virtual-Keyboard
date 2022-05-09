import Keyboard from './createKeyboard';
import control from './control';

window.onload = () => {
  let language;
  if (localStorage.getItem('language')) {
    language = localStorage.getItem('language');
  } else {
    localStorage.setItem('language', 'en');
  }
  const { body } = document;
  const header = control('header', 'header', '', '');
  const headerTitle = control('h1', 'header-title', 'RSS Virtual Keyboard', '');
  const headerSubTitle = control('h3', 'header-subtitle', 'Клавиатура создана в операционной системе Windows </br>', '');
  body.append(header);
  header.append(headerTitle);
  header.append(headerSubTitle);
  headerSubTitle.innerHTML += 'Для переключения языка комбинация: левыe ctrl + alt';
  const keyboard = new Keyboard(language);
  keyboard.generateKeyboard();

  // console.log(keys);
};
