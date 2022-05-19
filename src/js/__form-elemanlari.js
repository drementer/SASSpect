/* Form Elemanları */
const form_elemanlari = () => {
	/* Textarea */
	const ta_hizala = (ta) => {
			ta.style.height = ta.scrollHeight + "px";
		},
		textareas = document.querySelectorAll("textarea");
	textareas.forEach((ta) => {
		// Değer girildiğinde
		ta.addEventListener("input", () => {
			// İçeriği silindiğinde
			if (!ta.value) {
				ta.style.height = "initial";
			}
			// İşlem
			ta_hizala(ta);
		});

		// Render olduğunda
		ta.onload = ta_hizala(ta);
	});
	/* Textarea SON */
};
/* Form Elemanları SON */

/* Export */
export default form_elemanlari;
/* Export  SON */
