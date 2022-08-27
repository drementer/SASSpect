const loader = () => {
  const loader = document.querySelector('.loader');

  window.addEventListener(
    'load',
    () => {
      setInterval(() => {
        loader.setAttribute('hidden', '');
      }, 1000);
    },
    false
  );
};

export default loader;
