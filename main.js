
var view;

async function render(dist) {

	view = await vegaEmbed(
		'#view',
		`graph-${dist}.json`,
		opt = {
			renderer: 'svg',
			actions: false
		}
	);

}

async function changeDist() {
	let newDist = document.querySelector('.dists').value;
	render(newDist);
}

render('bernoulli');

