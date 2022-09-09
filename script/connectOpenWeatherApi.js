const openWeatherApiKey = '84f0dd3a7854374ac1a26c6ac08ca872';

export function getTodayWeather(lat, lng) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${openWeatherApiKey}&units=metric`)
        .then((response) => {
            if(response.ok) {
                return response.json();
            }
        })
        .then((data) => {
            return data;
        });
}

export function getNextDaysWeather(lat, lng) {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${openWeatherApiKey}&units=metric`)
        .then((response) => {
            if(response.ok) {
                return response.json();
            }
        })
        .then((data) => {
            return data;
        });
}