const doc = document,
  body = doc.body;

const log = console.log.bind(doc);

const scrollKapat = () => {
    doc.querySelector('body').style.overflowY = 'hidden';
  },
  scrollAc = () => {
    doc.querySelector('body').style.overflowY = 'auto';
  },
  goTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

const pozisyon = (obje) => {
  const box = obje.getBoundingClientRect(),
    docEl = doc.documentElement;

  let scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop,
    scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft,
    clientTop = docEl.clientTop || body.clientTop || 0,
    clientLeft = docEl.clientLeft || body.clientLeft || 0,
    top = box.top + scrollTop - clientTop,
    left = box.left + scrollLeft - clientLeft;

  return { top: Math.round(top), left: Math.round(left) };
};

export { doc, body, log, scrollKapat, scrollAc, goTop, pozisyon };
