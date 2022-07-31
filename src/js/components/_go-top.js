const goTop = () => {
  const button = document.querySelector('.go-top');

  const event = () => {
    if (window.pageYOffset >= window.innerHeight) {
      // >= 100vh
      button.classList.add('go-top--active');

      return;
    }
    // < 100vh
    button.classList.remove('go-top--active');
  };

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Buton varsa
  if (button) {
    // Sayfa yenilendiğinde konum kontrolü için
    event();

    // Sayfadaki kaydırma işleminde konum kontrolü için
    window.addEventListener('scroll', () => {
      event();
    });

    // İşlem
    button.addEventListener('click', goTop);
  }
};

export default goTop;
