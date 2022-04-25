/* Genel */
let scrool_kapat = () => {
		document.querySelector("html, body").style.overflowY = "hidden";
	},
	scrool_ac = () => {
		document.querySelector("html, body").style.overflowY = "auto";
	},
	log = console.log.bind(document),
	isString = (value) => {
		return typeof value === "string" || value instanceof String;
	},
	isNull = (value) => {
		return value !== null || value !== undefined;
	},
	isNumber = (value) => {
		return !isNaN(value);
	},
	goToTop = () => window.scrollTo(0, 0),
	isDarkMode =
		window.matchMedia &&
		window.matchMedia("(prefers-color-scheme: dark)").matches;
/* Genel SON */

/*  */
///		(function () {
///			some private code that will be executed automatically
///		})();
///		(function (a, b) {
///			var result = a + b;
///			return result;
///		})(10, 20);
/*  */

/* Export */
export {
	scrool_ac,
	scrool_kapat,
	log,
	isString,
	isNull,
	isNumber,
	goToTop,
	isDarkMode,
};
/* Export SON */
