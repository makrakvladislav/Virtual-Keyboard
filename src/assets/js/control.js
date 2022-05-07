const control = (tagName, className, content, keyCode, shiftVal) => {
  const element = document.createElement(tagName);
  element.classList.add(className);
  element.innerHTML = content;
  element.value = keyCode;
  if (className === 'key') {
    const shiftValue = document.createElement('span');
    shiftValue.classList.add('shift-value');
    shiftValue.innerHTML = shiftVal;
    element.append(shiftValue);
  }

  return element;
};

export default control;
