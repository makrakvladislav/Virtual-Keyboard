const control = (tagName, className, content, keyCode, shiftVal) => {
  if (className === 'key-button') {
    const element = document.createElement(tagName);
    element.classList.add(className);
    const keyValue = document.createElement('span');
    keyValue.classList.add('key-value');
    keyValue.innerHTML = content;
    element.append(keyValue);
    element.value = keyCode;
    const shiftValue = document.createElement('span');
    shiftValue.classList.add('key-shift');
    shiftValue.innerHTML = shiftVal;
    element.append(shiftValue);
    return element;
  }
  const element = document.createElement(tagName);
  element.classList.add(className);
  element.innerHTML = content;
  element.value = keyCode;
  return element;
};

export default control;
