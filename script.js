let selectedPlant = "";
let selectedLokasi = "";
let selectedCahaya = "";

function pilihTanaman(namaTanaman, element) {
	if (selectedPlant == namaTanaman) {
		selectedPlant = "";
		document.querySelectorAll(".plant-card").forEach(card => {card.classList.remove("selected");});

	} else {
		selectedPlant = namaTanaman;
		document.querySelectorAll(".plant-card").forEach(card => {card.classList.remove("selected");});
		element.classList.add("selected");
	}
}

function pilihLokasi(lokasi, element) {
	if (selectedLokasi == lokasi) {
		selectedLokasi = "";
		document.querySelectorAll(".lokasi-grid .choice-card").forEach(card => {
			card.classList.remove("selected");
		});

	} else {
		selectedLokasi = lokasi;
		document.querySelectorAll(".lokasi-grid .choice-card").forEach(card => {
			card.classList.remove("selected");
		});
		element.classList.add("selected");
	}
}

function pilihCahaya(cahaya, element) {
	if (selectedCahaya == cahaya) {
		selectedCahaya = "";
		document.querySelectorAll(".cahaya-grid .choice-card").forEach(card => {
			card.classList.remove("selected");
		});
	
	} else {
		selectedCahaya = cahaya;
		document.querySelectorAll(".cahaya-grid .choice-card").forEach(card => {
			card.classList.remove("selected");
		});
		element.classList.add("selected");
	}
}

function cariRekomendasi() {
	const hasil = rules.find(rule =>
		rule.tanaman === selectedPlant &&
		rule.lokasi === selectedLokasi &&
		rule.cahaya === selectedCahaya
	);

	if (!hasil) {
		alert("Silakan lengkapi pilihan terlebih dahulu.");
		return;
	}

	sessionStorage.setItem("hasilRule", JSON.stringify(hasil));
	window.location.href = "hasil.html";
}