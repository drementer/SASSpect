/* Loader */
const loader = () => {
	const loader = document.querySelector(".loader");
	if (loader) {
		window.addEventListener(
			"load",
			() => {
				setInterval(() => {
					loader.setAttribute("kapat", "");
				}, 1000);
			},
			false
		);
	}
};
/* Loader Son */

/* Export */
export default loader;
/* Export SON */
