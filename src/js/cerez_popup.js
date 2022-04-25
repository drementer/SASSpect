export default function () {
	let cerez_popup = document.getElementById("cerez-popup");
	if (cerez_popup) {
		let cerez_politikasi__isim = "cerez-politikasi",
			cerez_politikasi__deger = localStorage.getItem(
				cerez_politikasi__isim
			),
			cerez_popup__tuslar = cerez_popup.querySelectorAll(
				".__butonlar > .buton"
			),
			cerez_popup__kapat = () => {
				cerez_popup.classList.toggle("--acik");
				if (!cerez_popup.matches(".--kapali")) {
					cerez_popup.classList.add("--kapali");
				}
			},
			cerez_kabul_et = () => {
				localStorage.setItem(cerez_politikasi__isim, "kabul");
				cerez_popup__kapat();
			};

		cerez_popup__tuslar.forEach((tus) => {
			tus.addEventListener("click", () => {
				if (tus.matches(".--kabul")) {
					cerez_kabul_et();
				} else {
					cerez_popup__kapat();
				}
			});
		});

		if (window.localStorage) {
			if (cerez_politikasi__deger) {
				if (cerez_politikasi__deger === "kabul") {
					cerez_popup__kapat();
					console.log("a");
				}
			} else {
				cerez_popup.classList.toggle("--acik");
			}
		} else {
			console.error(
				"Taraycının çerez desteği kapalı, lütfen aktive edin!"
			);
		}
	}
}
