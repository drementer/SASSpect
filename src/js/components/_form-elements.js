const formElements = () => {
  /* Textarea */
  const textareas = document.querySelectorAll('textarea');

  const taEvent = (obje) => {
    obje.style.height = 'auto';
    obje.style.height = obje.scrollHeight + 'px';
  };

  textareas.forEach((textarea) => {
    // Element yüklendiğinde
    textarea.onload = taEvent(textarea);

    // Değer girildiğinde
    textarea.addEventListener('input', () => {
      taEvent(textarea);

      // İçeriği silindiğinde
      if (textarea.value == undefined || textarea.value == '') {
        element.style.height = '70px';
      }
    });
  });
  /* Textarea SON */

  /* İnputlar */
  const inputs = document.querySelectorAll('.input');

  inputs.forEach((input) => {
    let inputElement =
      input.querySelector('input') || input.querySelector('textarea');
    if (inputElement) {
      inputElement.addEventListener('input', () => {
        if (inputElement.checkValidity()) {
          input.removeAttribute('invalid');
          return;
        }
        input.setAttribute('invalid', '');
      });
    }
  });
  /* İnputlar SON */

  /* Checkbox & Radio */
  const checkboxAndRadios = document.querySelectorAll('.checkbox, .radio');
  checkboxAndRadios.forEach((checkboxAndRadio) => {
    let element = checkboxAndRadio.querySelector('input');

    if (checkboxAndRadio.hasAttribute('checked')) {
      element.toggleAttribute('checked');
    }
  });
  /* Checkbox & Radio SON */
};

export default formElements;
