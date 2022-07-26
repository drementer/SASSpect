const go_top = () => {
  const go_top_buton = document.querySelector('.go-top');

  const ekran_kontrol = () => {
    if (window.pageYOffset >= window.innerHeight) {
      // >= 100vh
      go_top_buton.classList.add('go-top--aktif');
    } else {
      // < 100vh
      go_top_buton.classList.remove('go-top--aktif');
    }
  };

  const yukari_cik = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Buton varsa
  if (go_top_buton) {
    // Sayfa yenilendiğinde konum kontrolü için
    ekran_kontrol();

    // Sayfadaki kaydırma işleminde konum kontrolü için
    window.addEventListener('scroll', () => {
      ekran_kontrol();
    });

    // İşlem
    go_top_buton.addEventListener('click', yukari_cik);
  }
};

export default go_top;
