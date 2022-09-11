const githubUserName = 'vitaliykharlamov';

export function connectGithubApi() {
    return fetch(`https://api.github.com/users/${githubUserName}`)
        .then((response) => {
            if(response.ok) {
                return response.json();
            }
        })
        .then((data) => {
            return data;
        });
}

const flickrApiKey = '01a334ea1aad6d2f6f24c5870a31d211';

export function connectFlickrApi(tags) {
    return fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrApiKey}&tags=${tags}&extras=url_h&format=json&nojsoncallback=1`)
        .then((response) => {
            if(response.ok) {
                return response.json();
            }
        })
        .then((data) => {
            return data;
        });
}

const openCageApiKey = '718f25bccc3c43078fa407f23ca26cdb';

export function connectOpenCageApi(nameLocation) {
    return fetch(`https://api.opencagedata.com/geocode/v1/json?q=${nameLocation}&key=${openCageApiKey}&language=en&pretty=1&no_annotations=1`)
        .then((response) => {
            if(response.ok) {
                return response.json();
            }
        })
        .then((data) => {
            return data;
        });
}

const openWeatherApiKey = '84f0dd3a7854374ac1a26c6ac08ca872';

export function connectTodayWeather(lat, lng) {
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

export function connectNextDaysWeather(lat, lng) {
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
