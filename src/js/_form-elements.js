const formElements = () => {
  /*
		Textarea
	*/
  const textareas = document.querySelectorAll('textarea');

  const textareaReset = (object) => {
    object.style.height = 'auto';
    object.style.height = object.scrollHeight + 'px';
  };

  textareas.forEach((textarea) => {
    textarea.onload = textareaReset(textarea);

    textarea.addEventListener('input', () => {
      !!textarea.value
        ? (element.style.height = '70px')
        : textareaReset(textarea);
    });
  });

  /*
		İnputlar
	*/
  const inputs = document.querySelectorAll('.input');

  inputs.forEach((input) => {
    let inputElement =
      input.querySelector('input') || input.querySelector('textarea');
    if (inputElement) {
      inputElement.addEventListener('input', () => {
        inputElement.checkValidity()
          ? input.removeAttribute('invalid')
          : nput.setAttribute('invalid', '');
      });
    }
  });

  /*
		Checkbox & Radio
	*/
  const checkboxAndRadios = document.querySelectorAll('.checkbox, .radio');

  checkboxAndRadios.forEach((checkboxAndRadio) => {
    let element = checkboxAndRadio.querySelector('input');
    let status = checkboxAndRadio.hasAttribute('checked');

    status ? element.toggleAttribute('checked') : '';
  });
};

export default formElements;
