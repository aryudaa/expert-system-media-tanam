const hasilRule = JSON.parse(sessionStorage.getItem("hasilRule"));
const hasilEval = JSON.parse(sessionStorage.getItem("hasilEval"));
const container = document.getElementById("hasil-container");

if (!hasilRule) {
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
	const infoTanaman = tanamanInfo[hasilRule.tanaman];
	let mediaHTML = "";
	let alasanHTML = "";

	hasilRule.media.forEach(media => {
		mediaHTML += `
			<div class="media-card">
				<h3>${media}</h3>
				<img src="assets/media/${mediaInfo[media].id}.png" class="media-image">
				<p>${mediaInfo[media].deskripsi}.</p>
			</div>
		`;

		alasanHTML += `
			<li style="margin-bottom:8px">
				<strong>${media}</strong> dipilih karena mampu ${mediaInfo[media].karakteristik.toLowerCase()}
			</li>
		`;

	});

	container.innerHTML = `
		<div class="result-card fade-in">
			<div class="desc-tanaman">
				<h2>${hasilRule.tanaman}</h2>
				<img src="assets/tanaman/${infoTanaman.id}.png" class="hasil-image" alt="${infoTanaman.id}">
				
				<table class="desc-table">
					<tr>
						<th>Lokasi Penempatan</th>
						<th>Intensitas Cahaya</th>
					</tr>

					<tr>
						<td>${hasilEval.lokasi}</td>
						<td>${hasilRule.cahaya}</td>
					</tr>

				</table>

				<p style="padding-left:10px; padding-right:10px;">
					${infoTanaman.deskripsi} Tanaman ${hasilRule.tanaman.toLowerCase()} disarankan untuk 
					diletakkan di lokasi <b>${infoTanaman.lokasi.toLowerCase()}</b> dengan <b>kelembapan
					${infoTanaman.kelembapan.toLowerCase()}</b>. Tanaman ini membutuhkan media tanam
					dengan <b>aerasi ${infoTanaman.aerasi.toLowerCase()}</b> dan 
					<b>nutrisi ${infoTanaman.nutrisi.toLowerCase()}</b>.
				</p>
			</div>

			<hr>

			<h3>Evaluasi Lokasi</h3>
			<div class="evaluation">
			<p>${hasilEval.evaluasi}</p>
			</div>

			<hr>

			<h3>Media Tanam Direkomendasikan</h3>
			<div class="media-grid">
				${mediaHTML}
			</div>

			<hr>

			<h3>Mengapa Media Ini Dipilih?</h3>
			<ul class="alasan-media">${alasanHTML}</ul>

			<a href="index.html">
				<div class="button-wrapper">
					<button>Kembali</button>
				</div>
			</a>
		</div>
	`;
}

sessionStorage.removeItem("hasilRule");
