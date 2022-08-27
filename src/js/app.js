/*
	Imports
*/
import {
  doc,
  body,
  log,
  select,
  selects,
  scroll,
  addClass,
  removeClass,
  position,
} from './_utils.js';
import cookiePopup from './_cookie-popup.js';
import formElements from './_form-elements.js';
import goTop from './_go-top.js';
import loader from './_loader.js';
import lazyLoad from './vendors/_lazy-load.js';

/*
	Inits
*/
/* cookiePopup(); */
formElements();
goTop();
loader();
lazyLoad();