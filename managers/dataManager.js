/**
* @name DataManager
* @extends
* @file dataManager.js
* @author Laura Castillo <contact@laubits.com>
* @version 1.0.0
*/
class DataManager {

	constructor() {
    this.citiesWeather = [];
    this.currentCityWeather = null;


    // this.weathers = [];
    // this.setCurrentWeather = null;


	}

  setCurrentCityWeather(cityWeather){
    this.currentCityWeather = cityWeather;
    console.log(this.setCurrentCityWeather);
  }

  setCurrentWeather() {
    this.currentCityWeather = cityWeather;
    this.navManager.showCitiesWeather();

  }


}
