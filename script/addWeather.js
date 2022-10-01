import {todayTemperature, todayDiscription, todayImg, todayWindSpeed, todayHumidity, todayPressure, nextDaysTemperature, nextDaysImg} from './elements.js';
import {connectTodayWeather, connectNextDaysWeather} from './connectionAPIs.js';

export async function addWeather(coordinates) {
    const todayWeather = await connectTodayWeather(coordinates.lat, coordinates.lng);

    const { weather, temp: temperature, rh: humidity, pres: pressure, wind_spd: windSpeed } = todayWeather.data[0];
    const { description: description, icon: imgName } = weather;

    todayTemperature.textContent = `${Math.round(temperature)}°`;
    todayDiscription.textContent = description;
    todayImg.data = `media/weather-icons/${imgName}.svg`;
    todayWindSpeed.textContent = `${windSpeed.toFixed(2)}m/s`;
    todayHumidity.textContent = `${humidity.toFixed(1)}%`;
    todayPressure.textContent = `${Math.round(pressure)}mb`;

    const nextDaysWeather = await connectNextDaysWeather(coordinates.lat, coordinates.lng);

    const { data: arrNextDaysWeather } = nextDaysWeather;

    nextDaysTemperature.forEach((element, index) => {
        const { temp: dayTemperature } = arrNextDaysWeather[index + 1];

        element.textContent = `${Math.round(dayTemperature)}°`;
    });

    nextDaysImg.forEach((element, index) => {
        const { icon: dayImgName } = arrNextDaysWeather[index + 1].weather;

        element.data = `media/weather-icons/${dayImgName}.svg`;
    });
}