const propiedadesJSON = [
	{
		name: "Casa de campo",
		description: "Un lugar ideal para descansar de la ciudad",
		src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
		rooms: 2,
		m: 170,
	},
	{
		name: "Casa de playa",
		description: "Despierta tus días oyendo el oceano",
		src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
		rooms: 2,
		m: 130,
	},
	{
		name: "Casa en el centro",
		description: "Ten cerca de ti todo lo que necesitas",
		src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
		rooms: 1,
		m: 80,
	},
	{
		name: "Casa rodante",
		description: "Conviertete en un nómada del mundo sin salir de tu casa",
		src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
		rooms: 1,
		m: 6,
	},
	{
		name: "Departamento",
		description: "Desde las alturas todo se ve mejor",
		src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
		rooms: 3,
		m: 200,
	},
	{
		name: "Mansión",
		description: "Vive una vida lujosa en la mansión de tus sueños ",
		src: "https://media-cdn.tripadvisor.com/media/photo-s/1b/68/af/16/cretan-mansion.jpg",
		rooms: 5,
		m: 500,
	},
];

const formulario = document.getElementById("formulario");
const inputmMin = document.getElementById("mMin");
const inputmMax = document.getElementById("mMax");
const roomsTotal = document.getElementById("roomsTotal");
const propiedades = document.getElementById("propiedadesGrid");
const total = document.getElementById("total");

const render = (array) => {
	let html = "";
	for (let propied of array) {
		html += `<div class="propiedad">
					<div
						class="img"
						style="
							background-image: url(${propied.src});
						"
					></div>
					<section>
						<h5>${propied.name}</h5>
						<div class="d-flex justify-content-between">
							<p>Cuartos: ${propied.rooms}</p>
							<p>Metros: ${propied.m}</p>
						</div>
						<p class="my-3">${propied.description}</p>
						<button class="btn btn-info">Ver más</button>
					</section>
				</div>`;
		propiedades.innerHTML = html;
		total.innerHTML = array.length;
	}
};

render(propiedadesJSON);
formulario.addEventListener("submit", (e) => {
	console.log("entro el submit");
	e.preventDefault();
	let mMin = +inputmMin.value;
	let mMax = +inputmMax.value;
	let rTotal = +roomsTotal.value;
	const arrayFiltrado = [];

	for (let propiedadJSON of propiedadesJSON) {
		if (mMin === 0 || mMax === 0 || rTotal === 0) {
			alert("Debes rellenar todos los datos antes de buscar una propiedad");
			return;
		} else if (propiedadJSON.m >= mMin && propiedadJSON.m <= mMax)
			arrayFiltrado.push(propiedadJSON);
	}
	render(arrayFiltrado);
});
