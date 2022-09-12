import {body, backgroundBtn, searchInput, searchBtn, location} from './elements.js';
import {connectFlickrApi, connectOpenCageApi} from './connectionAPIs.js';
import {tags} from './getTags.js';
import {addWeather} from './addWeather.js';

export function addEventListeners() {
    let i = 0;

    backgroundBtn.addEventListener('click', async () => {
        const backgroundImg = await connectFlickrApi(tags);
        const {photo: images} = backgroundImg.photos;

        const img = new Image();

        img.src = images[i].url_h;

        img.addEventListener('load', () => {
            body.style.backgroundImage = `url(${images[i].url_h})`;
            i++;
        });

        img.addEventListener('error', () => {
            body.style.backgroundImage = 'url(media/image-background.jpg)';
            i++;
        });
    });

    searchInput.addEventListener('input', (event) => searchBtn.disabled = event.currentTarget.value === '');

    searchBtn.addEventListener('click', async () => {
        const locationInfo = await connectOpenCageApi(searchInput.value);
        const { formatted: locationName, geometry: coordinates } = locationInfo.results[0];

        localStorage.setItem('locationinfo', JSON.stringify(locationInfo));

        searchInput.value = '';

        location.textContent = locationName;

        addWeather(coordinates);
    });
}