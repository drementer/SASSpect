/**
 * Shorthand for console log.
 * @param {*} log - Console logged value.
 */
const { log } = console;

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
const selectAll = (selector, scope = document) => {
  return scope.querySelectorAll(selector);
};
