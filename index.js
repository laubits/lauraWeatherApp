/**
* @name index.js
* @file Add a small description for this file.
* @author Laura Castillo <contact@laubits.com>
* @version 1.0.0
*/

window.addEventListener('load', init, false);

function init() {
  console.log('App running!');
	//1. Declare variables

  // var citiesWeather;

  var dataManager = new DataManager();
  var navManager = new NavManager(dataManager);
  dataManager.navManager = navManager;
	//2. Initialize variables



	//3. Program Logic
	loadWeather();

	function loadWeather() {
		var request = new XMLHttpRequest();
		request.open('GET', './data/weather.json', true);
		request.onreadystatechange = loadWeatherCallback;
		request.send();
	}

	function loadWeatherCallback(e) {
		var request = e.target;

		if (request.readyState == XMLHttpRequest.DONE) {
			if (request.status == 200) {
				var data = JSON.parse(request.responseText);
				// console.log(data);

        for (var key in data) {
          var cityWeatherData = data[key];
          var weatherData = data[key].weather;
          var cloudsData = data[key].clouds;
          var windData = data[key].wind;
          var mainData = data[key].main;
          var timeData = data[key].time;
          var weatherData = data[key].weather;
          var weather = null;
          var coordData = data[key].coord;
          var cityData = data[key].city;

          for (var weatherKey in weatherData) {
						if (weatherData.hasOwnProperty(weatherKey)) {
							var element = weatherData[weatherKey];

							weather = new Weather(element.id, element.main, element.description);

						}
					}


          var cityWeather = new CityWeather(new City(cityData.id, cityData.name, cityData.findname, cityData.country, new Coord(cityData.coord.lon, cityData.coord.lat)), cityWeatherData.time, new Main(mainData.temp, mainData.temp_min, mainData.temp_max, mainData.pressure, mainData.sea_level, mainData.grnd_level, mainData.humidity),
          new Wind(windData.speed, windData.deg, windData.var_beg, windData.var_end), new Clouds(cloudsData.all), weather);
          dataManager.citiesWeather.push(cityWeather);
          console.log(cityWeather);
        }
        navManager.showCities();
			}
      else {
        console.log('Server Error');
      }
		}
	}
}
