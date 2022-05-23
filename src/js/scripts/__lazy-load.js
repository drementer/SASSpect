/**
 * Export için fonksiyon
 *
 * @param {HTMLElements} elemanlar lazy_load'a gönderilecek elemanlar
 * @param {function} lazy_Load IntersectionObserver için kısayol
 */
const lazy_load = () => {
	const elemanlar = document.querySelectorAll("[lazy-load]");

	/**
	 * Ana fonksiyon
	 *
	 * @param {HTMLElement} eleman intersectionObserver Api'ye gönderilecek eleman
	 * @param {function} io IntersectionObserver Api
	 * @param {object} ayarlar lazy_load ayarları
	 */
	const lazy_load = (eleman) => {
		const ayarlar = {
			root: null,
			threshold: 1,
			rootMargin: "300px 0px",
		};

		/**
		 * IntersectionObserver Api'yi çalıştırmak için
		 *
		 * @param {HTMLElement} eleman intersectionObserver Api elemanı
		 * @param {string} medya_src eleman'ın lazy-load attr'si
		 */
		const io = new IntersectionObserver((entries, observer) => {
			// Eleman her ekrana girdiğinde
			entries.forEach((entry) => {
				// Ekrandan diğilse bir şey yapma
				if (!entry.isIntersecting) {
					return;
				}

				// Atamalar
				const eleman = entry.target,
					medya_src = eleman.getAttribute("lazy-load");

				// Ana işlev
				eleman.classList.toggle("yuklendi");
				eleman.setAttribute("src", medya_src);

				// İlk entry'den sonra observer'ı kapatıyorum
				observer.disconnect();
			});
		}, ayarlar);

		// IntersectionObserver Eleman için çalıştırılıypr
		io.observe(eleman);
	};

	// Her target için lazy_load fonsiyonu çağrıldı
	elemanlar.forEach(lazy_load);
};

// Export
export default lazy_load;
