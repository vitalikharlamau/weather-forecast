import {searchInput, searchBtn, location, todayTemperature, todayDiscription, todayImg, todayWindSpeed, todayHumidity, todayPressure, nextDaysTemperature, nextDaysImg} from './elements.js';
import {connectOpenCageApi} from './connectOpenCageApi.js';
import {getNextDaysWeather, getTodayWeather} from './connectOpenWeatherApi.js';

export function getLocationAndWeather() {
    searchInput.addEventListener('input', (event) => searchBtn.disabled = event.currentTarget.value === '');

    searchBtn.addEventListener('click', async () => {
        //Location
        const locationInfo = await connectOpenCageApi(searchInput.value);
        console.log(locationInfo);

        localStorage.setItem('locationinfo', JSON.stringify(locationInfo));

        searchInput.value = '';

        const {formatted: locationName, geometry: coordinates} = locationInfo.results[0];

        location.textContent = locationName;

        //Today weather
        const todayWeather = await getTodayWeather(coordinates.lat, coordinates.lng);
        console.log(todayWeather);

        const {temp: temperature, humidity: humidity, pressure: pressure} = todayWeather.main;
        const {description: description, icon: imgName} = todayWeather.weather[0];
        const {speed: windSpeed} = todayWeather.wind;

        todayTemperature.textContent = `${Math.round(temperature)}°`;
        todayDiscription.textContent = description;
        todayImg.data = `media/${imgName}.svg`;
        todayWindSpeed.textContent = `${windSpeed}m/s`;
        todayHumidity.textContent = `${humidity}%`;
        todayPressure.textContent = `${pressure}mb`;

        //Next days weather
        const nextDaysWeather = await getNextDaysWeather(coordinates.lat, coordinates.lng);
        console.log(nextDaysWeather);

        const {list: arrNextDaysWeather} = nextDaysWeather;

        const filtredNextDaysWeather = arrNextDaysWeather.filter((element) => {
            if ((element.dt_txt).includes('15:00:00')) {
                return element;
            };
        });

        const currentHour = new Date().toLocaleString('en-US', {hour: 'numeric', hour12: false});

        if (currentHour < 18) {
            filtredNextDaysWeather.shift();
        }

        console.log(filtredNextDaysWeather);

        nextDaysTemperature.forEach((element, index) => {
            const {temp: dayTemperature} = filtredNextDaysWeather[index].main;

            element.textContent = `${Math.round(dayTemperature)}°`;
        });

        nextDaysImg.forEach((element, index) => {
            const {icon: dayImgName} = filtredNextDaysWeather[index].weather[0];

            element.data = `media/${dayImgName}.svg`;
        });
    });
}