/**
* @name CityWeatherComponent
* @extends
* @file cityWeatherComponent.js
* @author Laura Castillo <contact@laubits.com>
* @version 1.0.0
*/
class CityWeatherComponent extends Component {
  constructor(model, parent, dataManager) {
    super(model, parent, dataManager);
    this.container.className = 'cityWeatherComponent';

  //Create Elements
    this.id = document.createElement('p');
    this.name = document.createElement('h1');
    this.findname = document.createElement('p');
    this.country = document.createElement('p');
    this.lon = document.createElement('p');
    this.lat = document.createElement('p');
    // this.weatherBtn = document.createElement('button');
    this.time = document.createElement('p');
    this.temp = document.createElement('p');
    this.temp_min = document.createElement('p');
    this.temp_max = document.createElement('p');
    this.pressure = document.createElement('p');
    this.sea_level = document.createElement('p');
    this.grnd_level = document.createElement('p');
    this.humidity = document.createElement('p');
    this.speed = document.createElement('p');
    this.deg = document.createElement('p');
    this.var_beg = document.createElement('p');
    this.var_end = document.createElement('p');
    this.all = document.createElement('p');
    this.id = document.createElement('p');
    this.main = document.createElement('p');
    this.description = document.createElement('p');
    this.rain = document.createElement('p');

    //Add Elements

    this.container.appendChild(this.id);
    this.container.appendChild(this.name);
    this.container.appendChild(this.findname);
    this.container.appendChild(this.country);
    this.container.appendChild(this.lon);
    this.container.appendChild(this.lat);
    // this.container.appendChild(this.weatherBtn);
    this.container.appendChild(this.time);
    this.container.appendChild(this.temp);
    this.container.appendChild(this.temp_min);
    this.container.appendChild(this.temp_max);
    this.container.appendChild(this.pressure);
    this.container.appendChild(this.sea_level);
    this.container.appendChild(this.grnd_level);
    this.container.appendChild(this.humidity);
    this.container.appendChild(this.speed);
    this.container.appendChild(this.deg);
    this.container.appendChild(this.var_beg);
    this.container.appendChild(this.var_end);
    this.container.appendChild(this.all);
    this.container.appendChild(this.id);
    this.container.appendChild(this.main);
    this.container.appendChild(this.description);
    this.container.appendChild(this.rain);

    //Fill Elements

    this.id.innerText ='City-Id: ' + this.model.city.id;
    this.name.innerText = this.model.city.name;
    this.findname.innerText = 'Find Name: ' + this.model.city.findname;
    this.country.innerText = 'Country: ' + this.model.city.country;
    this.lon.innerText = 'Long: ' + this.model.city.coord.lon;
    this.lat.innerText = 'Lat: ' + this.model.city.coord.lat;
    // this.weatherBtn.innerHTML = 'WEATHER';
    this.time.innerText = 'Time: ' + this.model.time;
    this.temp.innerText = 'Temp: ' + this.model.main.temp;
    this.temp_min.innerText = 'Temp-Min: ' + this.model.main.temp_min;
    this.temp_max.innerText = 'Temp-Max: ' + this.model.main.temp_max;
    this.pressure.innerText = 'Pressure: ' + this.model.main.pressure;
    this.sea_level.innerText = 'Sea-Level: ' + this.model.main.sea_level;
    this.grnd_level.innerText = 'Grnd-Level: ' + this.model.main.grnd_level;
    this.humidity.innerText = 'Humidity: ' + this.model.main.humidity;
    this.speed.innerText = 'Speed: ' + this.model.wind.speed;
    this.deg.innerText = 'Deg: ' + this.model.wind.deg;
    this.var_beg.innerText = 'Var-Beg: ' + this.model.wind.var_beg;
    this.var_end.innerText ='Var-End: ' +  this.model.wind.var_end;
    this.all.innerText = 'All: ' + this.model.clouds.all;
    this.id.innerText ='Weather-Id: ' +  this.model.weather.id;
    this.main.innerText = 'Main: ' + this.model.weather.main;
    this.description.innerText = 'Description: ' + this.model.weather.description;
    this.rain.innerText = 'Rain: ' + this.model.rain;

    //Add Events
    // this.weatherBtn.onclick = this.weatherBtnClick.bind(this);

    // this.container.cityWeather = this.model;
  }

  // weatherBtnClick(e) {
	// 	this.dataManager.showCitiesWeather(this.model);
	// }
}
