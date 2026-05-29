const hasil = JSON.parse(sessionStorage.getItem("hasilRule"));
const container = document.getElementById("hasil-container");

if (!hasil) {
	container.innerHTML = `
		<div class="result-card">
			<h2>Data Tidak Ditemukan</h2>
			<p>Silakan lakukan konsultasi terlebih dahulu.</p>
			<a href="index.html">
				<div class="button-wrapper">
					<button>Kembali</button>
				</div>
			</a>
			</a>
		</div>
	`;
}

else {
	const infoTanaman = tanamanInfo[hasil.tanaman];
	let mediaHTML = "";
	let alasanHTML = "";

	hasil.media.forEach(media => {
		mediaHTML += `
			<div class="media-card">
				<h3>${media}</h3>
				<img src="assets/media/${mediaInfo[media].id}.png" class="media-image">
				<p>
					${mediaInfo[media].deskripsi}. 
					Dapat ${mediaInfo[media].fungsi.toLowerCase()}. 
					Cocok untuk ${mediaInfo[media].cocok.toLowerCase()}.
				</p>
			</div>
		`;

		alasanHTML += `
			<li>
				<strong>${media}</strong> dipilih karena ${mediaInfo[media].kelebihan.toLowerCase()}
			</li>
		`;

	});

	container.innerHTML = `
		<div class="result-card fade-in">
			<div class="desc-tanaman">
				<h2>${hasil.tanaman}</h2>
				<img src="assets/tanaman/${infoTanaman.id}.png" class="hasil-image" alt="${infoTanaman.id}">

				<table class="desc-table">
					<tr>
						<th>Lokasi Penempatan</th>
						<th>Intensitas Cahaya</th>
					</tr>

					<tr>
						<td>${hasil.lokasi}</td>
						<td>${hasil.cahaya}</td>
					</tr>

				</table>
			</div>

			<hr>

			<h3>Informasi Tanaman</h3>

			<table class="info-table">
				<tr>
					<td class="left-table">Karakter</td>
					<td>: </td>
					<td>${infoTanaman.karakter}</td>
				</tr>

				<tr>
					<td class="left-table">Kebutuhan</td>
					<td>: </td>
					<td>${infoTanaman.kebutuhan}</td>
				</tr>

				<tr>
					<td class="left-table">Lokasi Ideal</td>
					<td>: </td>
					<td>${infoTanaman.cocok}</td>
				</tr>
			</table>

			<hr>

			<h3>Media Tanam Direkomendasikan</h3>
			<div class="media-grid">
				${mediaHTML}
			</div>

			<hr>

			<h3>Mengapa Media Ini Dipilih?</h3>
			<ul>${alasanHTML}</ul>

			<a href="index.html">
				<div class="button-wrapper">
					<button>Kembali</button>
				</div>
			</a>
		</div>
	`;
}

sessionStorage.removeItem("hasilRule");