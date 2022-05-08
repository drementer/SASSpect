/* İşlem */
const io = () => {
	const targets = document.querySelectorAll("[data-lazy]");

	const options = {
		root: null,
		threshold: 0,
		rootMargin: "300px 0px",
	};

	const lazyLoad = (target) => {
		const io = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) {
					return;
				}
				const img = entry.target;
				entry.target.classList.toggle("yuklendi");
				const src = img.getAttribute("data-lazy");

				img.setAttribute("src", src);
				observer.disconnect();
			});
		}, options);

		io.observe(target);
	};

	targets.forEach(lazyLoad);
};
/* İşlem */

/* Export */
export default io;
/* Export SON */
