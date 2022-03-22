/* Genel */
let scrool_kapat = () => {
		document.querySelector("html, body").style.overflowY = "hidden";
	},
	scrool_ac = () => {
		document.querySelector("html, body").style.overflowY = "auto";
	};
/* Genel SON */

/* Export */
export { scrool_ac, scrool_kapat };
/* Export SON */
