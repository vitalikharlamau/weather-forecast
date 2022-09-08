import {searchInput, searchBtn, location, todayTemperature, todayDiscription, todayWindSpeed, todayHumidity, todayPressure} from './elements.js';
import {connectOpenCageApi} from './connectOpenCageApi.js';
import {getCurrentWeather, getNextdaysWeather} from './connectOpenWeatherApi.js';

export function getLocationAndWeather() {
    searchInput.addEventListener('input', (event) => searchBtn.disabled = event.currentTarget.value === '');

    searchBtn.addEventListener('click', async () => {
        const locationInfo = await connectOpenCageApi(searchInput.value);

        searchInput.value = '';

        const {formatted: locationName, geometry: coordinates} = locationInfo.results[0];

        location.textContent = locationName;

        const currentWeather = await getCurrentWeather(coordinates.lat, coordinates.lng);

        console.log(currentWeather);

        const {temp: temperature, humidity: humidity, pressure: pressure} = currentWeather.main;
        const {description: description} = currentWeather.weather[0];
        const {speed: windSpeed} = currentWeather.wind;

        todayTemperature.textContent = `${Math.round(temperature)}°`;
        todayDiscription.textContent = description;
        todayWindSpeed.textContent = `${windSpeed}m/s`;
        todayHumidity.textContent = `${humidity}%`;
        todayPressure.textContent = `${pressure}mb`;

        const nextdaysWeather = await getNextdaysWeather(coordinates.lat, coordinates.lng);
    });
}