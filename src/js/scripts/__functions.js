/* Genel */
const scroll_kapat = () => {
		document.querySelector("body").style.overflowY = "hidden";
	},
	scroll_ac = () => {
		document.querySelector("body").style.overflowY = "auto";
	},
	log = console.log.bind(document),
	is_string = (value) => {
		return typeof value === "string" || value instanceof String;
	},
	is_null = (value) => {
		return value !== null || value !== undefined;
	},
	is_number = (value) => {
		return !isNaN(value);
	},
	go_top = () => window.scrollTo({ top: 0, behavior: "smooth" }),
	is_dark_mode =
		window.matchMedia &&
		window.matchMedia("(prefers-color-scheme: dark)").matches,
	pozisyon = (obje) => {
		// crossbrowser version
		const box = obje.getBoundingClientRect(),
			body = document.body,
			docEl = document.documentElement,
			scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop,
			scrollLeft =
				window.pageXOffset || docEl.scrollLeft || body.scrollLeft,
			clientTop = docEl.clientTop || body.clientTop || 0,
			clientLeft = docEl.clientLeft || body.clientLeft || 0,
			top = box.top + scrollTop - clientTop,
			left = box.left + scrollLeft - clientLeft;

		return { top: Math.round(top), left: Math.round(left) };
		/* return Math.round(top); */
	};
/* Genel SON */

/* Export */
export {
	scroll_ac,
	scroll_kapat,
	log,
	is_string,
	is_null,
	is_number,
	go_top,
	is_dark_mode,
	pozisyon,
};
/* Export SON */
