/**
 * @param {HTMLElements} targets intersectionObserver elemanları
 * @param {function} lazyLoad intersectionObserver fonksiyonu
 * @param {object} options lazyLoad ayarları
 */

const io = () => {
	const targets = document.querySelectorAll("[data-lazy]");

	const options = {
		root: null,
		threshold: 0,
		rootMargin: "300px 0px",
	};

	/**
	 *  Lazy Load
	 *
	 * @param {HTMLElement} target intersectionObserver elemanı
	 * @param {string} src target'in data-lazy attr'si
	 */
	const lazyLoad = (target) => {
		const io = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) {
					return;
				}
				const target = entry.target,
					src = target.getAttribute("data-lazy");

				target.classList.toggle("yuklendi");
				target.setAttribute("src", src);

				observer.disconnect();
			});
		}, options);

		io.observe(target);
	};

	targets.forEach(lazyLoad);
};

export default io;
