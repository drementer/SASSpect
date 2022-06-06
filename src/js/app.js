/*!
 * @author drementer
 * klncarslanburak@gmail.com
 * @license MIT (https://github.com/drementer/dred/blob/master/LICENSE)
*/

/* İmport */
import {
	scroll_ac,
	scroll_kapat,
	log,
	go_top,
	pozisyon,
} from "./scripts/_functions.js";

// Çerez
import cerez from "./components/_cerez-popup.js";
cerez();

// Sliders
import sliders from "./scripts/_sliders.js";
sliders();

// Lazy Load
import lazy_load from "./scripts/_lazy-load.js";
lazy_load();

// Form Elemanları
import form_elemanlari from "./components/_form-elemanlari.js";
form_elemanlari();

// Cursor
import cursor from "./components/_cursor.js";
cursor();

// Go Top
import got_top from "./components/_go-top.js";
got_top();

// Loader
import loader from "./components/_loader.js";
loader();
/* İmport SON */

/* Atamalar */
const doc = document,
	body = doc.body;
