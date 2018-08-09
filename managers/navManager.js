/**
* @name NavManager
* @extends
* @file navManager.js
* @author Laura Castillo <contact@laubits.com>
* @version 1.0.0
*/
class NavManager {

	constructor(dataManager) {
    this.dataManager = dataManager;
    this.citiesComponent = document.getElementById('citiesComponent');
    this.weatherComponent = document.getElementById('weatherComponent');
    //this.postsComponent = document.getElementById('postsComponent');

	}

  showCities() {
    this.dataManager.citiesWeather.forEach(citiesWeather => {
      var citiesComponent = new CityWeatherComponent(citiesWeather, this.citiesComponent, this.dataManager);
  });
    this.showCitiesWeather();
  }

  showCitiesWeather() {
    this.weatherComponent.hidden = false;
		this.weatherComponent.innerHTML = '';
		//this.postsComponent.innerHTML = 'WEATHER';

  }
}
