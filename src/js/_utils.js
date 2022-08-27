/**
 * @module Utils
 */

/**
 * Shorthand for document.
 */
const doc = document;

/**
 * Shorthand for body.
 */
const body = doc.body;

/**
 * Shorthand for console log.
 * @param {*} log - Console logged value.
 */
const log = (log) => {
  console.log(log);
};

/**
 * Fast add class from element.
 * @param {object} element - Manipulation element
 * @param {string} className - Class name
 */
const addClass = (element, className) => {
  element.classList.add(className);
};

/**
 * Fast remove class from element.
 * @param {object} element - Manipulation element
 * @param {string} className - Class name
 */
const removeClass = (element, className) => {
  element.classList.remove(className);
};

/**
 * Fast select item.
 * @param {string} selector - Css selector
 * @param {object} [scope = document] - The parent of the item to be selected
 * @return {object} Selected element
 */
const select = (selector, scope = document) => {
  return scope.querySelector(selector);
};

/**
 * Fast select items.
 * @param {string} selector - Css selector
 * @param {object} [scope = document] - The parent of the items to be selected
 * @returns {object} Selected elements
 */
const selects = (selector, scope = document) => {
  return scope.querySelectorAll(selector);
};

/**
 * Setting scroll status function.
 * @param {integer} [status = 1] - Status of scroll is enabled.
 */
const scroll = (status = 1) => {
  status === 1
    ? (body.style.overflowY = 'auto')
    : (body.style.overflowY = 'hidden');
};

/**
 * Get element position.
 * @param {object} object - Object for pick position
 * @return {object} Position of object
 */
const position = (object) => {
  const box = object.getBoundingClientRect();
  const docEl = doc.documentElement;

  let scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  let scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
  let clientTop = docEl.clientTop || body.clientTop || 0;
  let clientLeft = docEl.clientLeft || body.clientLeft || 0;
  let top = box.top + scrollTop - clientTop;
  let left = box.left + scrollLeft - clientLeft;

  top = Math.round(top);
  left = Math.round(left);

  return { top, left };
};

/*
	Exports
*/
export {
  doc,
  body,
  log,
  select,
  selects,
  scroll,
  addClass,
  removeClass,
  position,
};
