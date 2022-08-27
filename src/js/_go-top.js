const goTop = () => {
  const button = document.querySelector('.go-top');
  const activeClass = '-active';

  const event = () => {
    let status = window.pageYOffset >= window.innerHeight;

    status
      ? button.classList.add(activeClass)
      : button.classList.remove(activeClass);
  };

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', () => {
    event();
  });

  button.addEventListener('click', goTop);

  event();
};

export default goTop;
