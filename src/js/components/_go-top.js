const goTop = () => {
  const goTopButon = document.querySelector('.go-top');

  const ekranKontrol = () => {
    if (window.pageYOffset >= window.innerHeight) {
      // >= 100vh
      goTopButon.classList.add('go-top--aktif');

      return;
    }
    // < 100vh
    goTopButon.classList.remove('go-top--aktif');
  };

  const event = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Buton varsa
  if (goTopButon) {
    // Sayfa yenilendiğinde konum kontrolü için
    ekranKontrol();

    // Sayfadaki kaydırma işleminde konum kontrolü için
    window.addEventListener('scroll', () => {
      ekranKontrol();
    });

    // İşlem
    goTopButon.addEventListener('click', event);
  }
};

export default goTop;
