export function connectOpenWeatherApi() {
    const openWeatherApiKey = '84f0dd3a7854374ac1a26c6ac08ca872';
    const location = {
        lat: 52.7893039,
        lon: 27.5318168
    };

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${openWeatherApiKey}`)
        .then((response) => {
            if(response.ok) {
                return response.json();
            }
        })
        .then((data) => {
            console.log(data);
        });
}