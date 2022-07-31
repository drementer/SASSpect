const doc = document,
  body = doc.body;

const log = console.log.bind(doc);

const select = (selector, isMultiSelect = 0) => {
  if (isMultiSelect == 0) {
    return doc.querySelector(selector);
  }

  return doc.querySelectorAll(selector);
};

const scroll = (val = 1) => {
  const close = () => {
      doc.querySelector('body').style.overflowY = 'hidden';
    },
    open = () => {
      doc.querySelector('body').style.overflowY = 'auto';
    };

  if (val == 0) {
    close();
    return;
  }
  open();
};

const position = (obje) => {
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

export { doc, body, log, select, scroll, position };
