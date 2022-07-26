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
import cerez_popup from "./components/_cerez-popup.js";
import form_elemanlari from "./components/_form-elemanlari.js";
import goTopButon from "./components/_go-top.js";
import loader from "./components/_loader.js";
import lazy_load from "./vendors/_lazy-load.js";

cerez_popup();
form_elemanlari();
goTopButon();
loader();
lazy_load();