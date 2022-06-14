const doc = document,
	body = doc.body,
	scroll_kapat = () => {
		doc.querySelector("body").style.overflowY = "hidden";
	},
	scroll_ac = () => {
		doc.querySelector("body").style.overflowY = "auto";
	},
	log = console.log.bind(doc),
	go_top = () => window.scrollTo({ top: 0, behavior: "smooth" }),
	pozisyon = (obje) => {
		const box = obje.getBoundingClientRect(),
			docEl = document.documentElement,
			scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop,
			scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft,
			clientTop = docEl.clientTop || body.clientTop || 0,
			clientLeft = docEl.clientLeft || body.clientLeft || 0,
			top = box.top + scrollTop - clientTop,
			left = box.left + scrollLeft - clientLeft;

		return { top: Math.round(top), left: Math.round(left) };
	};

export { doc, body, scroll_ac, scroll_kapat, log, go_top, pozisyon };
