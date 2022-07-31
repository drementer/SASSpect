// İmportlar
import {
  doc,
  body,
  log,
  select,
  scroll,
  position,
} from './scripts/_utils.js';
import cookiePopup from './components/_cookie-popup.js';
import formElements from './components/_form-elements.js';
import goTopButon from './components/_go-top.js';
import loader from './components/_loader.js';
import lazyLoad from './vendors/_lazy-load.js';

cookiePopup();
formElements();
goTopButon();
loader();
lazyLoad();
