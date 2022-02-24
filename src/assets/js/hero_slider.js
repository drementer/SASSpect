export default function() {
	const hero_slider = document.querySelectorAll(".__hero-slider");
	hero_slider.forEach((slider) => {
		// Oluşturulacak alt eleman
		let yazi_sayisi = slider.dataset.yaziSayisi;

		// Minimum değerin altında giriş yapıldığında
		if (yazi_sayisi < 5 || yazi_sayisi == undefined) {
			console.warn(
				"Hero Slider yazi sayisi minimum 5 olabilir, bu yüzden otomatik olarak 5 ayarlandı."
			);
			yazi_sayisi = 5;
		}

		// Yaziları kapsayacak div oluşturuldu
		const hero_icerik = document.createElement("div");
		hero_icerik.classList.add("__icerik");

		// Yazilar için component oluşturuldu
		const yazi = document.createElement("div");
		yazi.classList.add("__yazi");
		yazi.innerHTML = slider.innerHTML;
		slider.innerHTML = null;

		// Ebeveyine kapsayici eklendi
		slider.appendChild(hero_icerik);
		// Oluşturulacak alt eleman

		// Kapsayıcıya istenilen miktarda yazi eklendi
		for (let i = 1; i <= yazi_sayisi; i++) {
			hero_icerik.insertAdjacentHTML("beforeend", yazi.outerHTML);
		}
	});
};