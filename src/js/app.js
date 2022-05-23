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
	is_string,
	is_null,
	is_number,
	go_top,
	is_dark_mode,
	pozisyon,
} from "./scripts/__functions.js";

// Çerez
import cerez from "./components/__cerez-popup.js";
cerez();

// Sliders
import sliders from "./scripts/__sliders.js";
sliders();

// Lazy Load
import lazy_load from "./scripts/__lazy-load.js";
lazy_load();

// Form Elemanları
import form_elemanlari from "./components/__form-elemanlari.js";
form_elemanlari();

// Cursor
import cursor from "./components/__cursor.js";
cursor();
/* İmport SON */

/* Atamalar */
const doc = document,
	body = doc.body;
