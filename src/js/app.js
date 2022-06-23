/*!
 * @author drementer
 * klncarslanburak@gmail.com
 * @license MIT (https://github.com/drementer/dred/blob/master/LICENSE)
 */

// İmportlar
import {
	scroll_ac,
	scroll_kapat,
	log,
	go_top,
	pozisyon,
	doc,
	body,
} from "./scripts/_utils.js";
import sliders from "./scripts/_sliders.js";
import lazy_load from "./vendor/_lazy-load.js";
import cerez from "./components/_cerez-popup.js";
import form_elemanlari from "./components/_form-elemanlari.js";
import got_top from "./components/_go-top.js";
import loader from "./components/_loader.js";

cerez();
sliders();
lazy_load();
form_elemanlari();
got_top();
loader();
