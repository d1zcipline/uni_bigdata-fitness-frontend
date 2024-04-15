let center = [55.747023187419096, 37.62071970898438]

function init() {
	let map = new ymaps.Map('map', {
		center: center,
		zoom: 11,
	})

	let placemark_avtozavodskaya = new ymaps.Placemark(
		[55.7043329792479, 37.64653060633471],
		{
			balloonContent: `
        <div class="map__body">
          <div class="map__header">Автозаводская</div>
          <div class="map__address">Автозаводская улица, 16с5</div>
          <div class="map__contacts">
            <a href="tel: +79000000000">+79000000000</a>
          </div>
        </div>
      `,
		},
		{}
	)

	let placemark_zuzino = new ymaps.Placemark(
		[55.65527954179762, 37.57239166695404],
		{
			balloonContent: `
        <div class="map__body">
          <div class="map__header">Зюзино</div>
          <div class="map__address">Москва, улица Каховка, 27</div>
          <div class="map__contacts">
            <a href="tel: +79000000000">+79000000000</a>
          </div>
        </div>
      `,
		},
		{}
	)

	let placemark_seligerskaya = new ymaps.Placemark(
		[55.863668907556416, 37.546911805178645],
		{
			balloonContent: `
        <div class="map__body">
          <div class="map__header">Cелигерская</div>
          <div class="map__address">Москва, Дмитровское шоссе, 89</div>
          <div class="map__contacts">
            <a href="tel: +79000000000">+79000000000</a>
          </div>
        </div>
      `,
		},
		{}
	)

	map.controls.remove('geolocationControl') // удаляем геолокацию
	map.controls.remove('searchControl') // удаляем поиск
	map.controls.remove('trafficControl') // удаляем контроль трафика
	map.controls.remove('typeSelector') // удаляем тип
	map.controls.remove('fullscreenControl') // удаляем кнопку перехода в полноэкранный режим
	map.controls.remove('rulerControl') // удаляем контрол правил

	map.geoObjects.add(placemark_avtozavodskaya)
	map.geoObjects.add(placemark_zuzino)
	map.geoObjects.add(placemark_seligerskaya)
}

ymaps.ready(init)
