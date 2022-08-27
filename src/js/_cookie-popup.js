const cookiePopup = () => {
  const popup = document.getElementById('cookie-popup');
  const policyName = 'cookie-policy';
  const policyValue = localStorage.getItem(policyName);
  const buttons = popup.querySelectorAll('.button');

  const togglePopup = () => {
    popup.toggleAttribute('hidden');
  };
  const acceptCookie = () => {
    localStorage.setItem(policyName, 'approve');
    popup.toggleAttribute('hidden');
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      let status = button.matches('.buton--approve');

      status ? acceptCookie() : togglePopup();
    });
  });

  if (window.localStorage) {
    let status = !policyValue || policyValue !== 'approve';
    status ? togglePopup() : '';
  }
  console.warn('Taraycının çerez desteği kapalı, lütfen aktif edin!');
};

export default cookiePopup;
