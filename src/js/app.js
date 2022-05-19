/* 
    by drementer
    klncarslanburak@gmail.com
	
	MIT LICENSE: (https://github.com/drementer/dred/blob/master/LICENSE)
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
} from "./__functions.js";

// Çerez
import cerez from "./__cerez-popup.js";
cerez();

// Sliders
import cerez from "./__sliders.js";
Sliders();

// Lazy Load
import lazy_load from "./__io.js";
lazy_load();

// Form Elemanları
import form_elemanlari from "./__form-elemanlari.js";
form_elemanlari();

/* İmport SON */

/* Atamalar */
const doc = document,
	body = doc.body;
