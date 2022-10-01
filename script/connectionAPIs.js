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
            } else {
                return {
                    photos: {
                        photo: [
                            {url_h: './media/background-1.jpg'},
                            {url_h: './media/background-2.jpg'},
                            {url_h: './media/background-3.jpg'}
                        ]
                    }
                }
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
            } else {
                alert('Request failed');
                return {
                    results: [{
                            formatted: 'Salihorsk, Salihorsk District, Belarus',
                            geometry: {
                                lat: 52.7893039,
                                lng: 27.5318168
                            }
                        }]
                }
            }
        })
        .then((data) => {
            return data;
        });
}

const weatherBitApiKey = 'a1f7d3da80444dd6af4dd01392b16c1c';

export function connectTodayWeather(lat, lng) {
    return fetch(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&key=${weatherBitApiKey}`)
        .then((response) => {
            if(response.ok) {
                return response.json();
            } else {
                alert('Request failed');
                return;
            }
        })
        .then((data) => {
            return data;
        });
}

export function connectNextDaysWeather(lat, lng) {
    return fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&key=${weatherBitApiKey}&days=4`)
        .then((response) => {
            if(response.ok) {
                return response.json();
            } else {
                alert('Request failed');
                return;
            }
        })
        .then((data) => {
            return data;
        });
}