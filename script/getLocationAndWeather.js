import {searchInput, searchBtn, location} from './elements.js';
import {connectOpenCageApi} from './connectOpenCageApi.js';
import {connectOpenWeatherApi} from './connectOpenWeatherApi.js';

export function getLocationAndWeather() {
    searchInput.addEventListener('input', (event) => searchBtn.disabled = event.currentTarget.value === '');

    searchBtn.addEventListener('click', async () => {
        const locationInfo = await connectOpenCageApi(searchInput.value);

        searchInput.value = '';

        const {formatted: locationName, geometry: coordinates} = locationInfo.results[0];

        location.textContent = locationName;

        const weatherInfo = await connectOpenWeatherApi(coordinates.lat, coordinates.lng)
        console.log(weatherInfo);
    });
}