let center = [55.747023187419096, 37.62071970898438]

function init() {
	let map = new ymaps.Map('map', {
		center: center,
		zoom: 11,
	})

	let placemark = new ymaps.Placemark(
		[55.7043329792479, 37.64653060633471],
		{},
		{}
	)

	map.controls.remove('geolocationControl') // удаляем геолокацию
	map.controls.remove('searchControl') // удаляем поиск
	map.controls.remove('trafficControl') // удаляем контроль трафика
	map.controls.remove('typeSelector') // удаляем тип
	map.controls.remove('fullscreenControl') // удаляем кнопку перехода в полноэкранный режим
	map.controls.remove('rulerControl') // удаляем контрол правил

	map.geoObjects.add(placemark)
}

ymaps.ready(init)
