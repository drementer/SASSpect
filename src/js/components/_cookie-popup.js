const cookiePopup = () => {
  const popup = document.getElementById('cookie-popup');

  if (popup) {
    const cookieName = 'cookie-policy',
      cookieValue = localStorage.getItem(cookieName),
      buttons = popup.querySelectorAll('.cerez-popup__buttons > .button');

    const closePopup = () => {
        popup.toggleAttribute('hidden');
      },
      acceptCookie = () => {
        localStorage.setItem(cookieName, 'approve');
        closePopup();
      };

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        if (button.matches('.buton--approve')) {
          acceptCookie();
          return;
        }
        closePopup();
      });
    });

    if (window.localStorage) {
      if (!cookieValue || cookieValue !== 'approve') {
        closePopup();
      }

      return;
    }
    console.error('Taraycının çerez desteği kapalı, lütfen aktif edin!');
  }
};

export default cookiePopup;
