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
import sliders from "./__sliders.js";
sliders();

// Lazy Load
import lazy_load from "./__io.js";
lazy_load();

// Form Elemanları
import form_elemanlari from "./__form-elemanlari.js";
form_elemanlari();

// Mouse Follower
import MouseFollower from "./__mouse-follower.js";
MouseFollower.registerGSAP(gsap);
const cursor = new MouseFollower({
	el: null,
	container: document.body,
	className: "mf-cursor",
	innerClassName: "mf-cursor-inner",
	textClassName: "mf-cursor-text",
	mediaClassName: "mf-cursor-media",
	mediaBoxClassName: "mf-cursor-media-box",
	iconSvgClassName: "mf-svgsprite",
	iconSvgStatePrefix: "-",
	iconSvgSrc: "",
	dataAttr: "cursor",
	hiddenState: "-hidden",
	textState: "-text",
	iconState: "-icon",
	activeState: "-active",
	mediaState: "-media",
	stateDetection: {
		"-pointer": "a,button",
		"-hidden": "iframe",
	},
	speed: 0.55,
	ease: "expo.out",
	overwrite: true,
	skewing: 0,
	skewingText: 2,
	skewingIcon: 2,
	skewingMedia: 2,
	skewingDelta: 0.001,
	skewingDeltaMax: 0.15,
	stickDelta: 0.15,
	showTimeout: 20,
	showOnEnter: true,
	hideOnLeave: true,
	hideTimeout: 300,
	hideMediaTimeout: 300,
	initialPos: [-window.innerWidth, -window.innerHeight],
});

/* İmport SON */

/* Atamalar */
const doc = document,
	body = doc.body;
