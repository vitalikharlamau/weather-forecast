import {location} from "./elements.js";
import {addWeather} from "./addWeather.js";

export function connectionLocalStorage() {
    if (localStorage.getItem('locationinfo')) {
        const locationInfo = JSON.parse(localStorage.getItem('locationinfo'));
        const { formatted: locationName, geometry: coordinates } = locationInfo.results[0];
    
        location.textContent = locationName;
    
        addWeather(coordinates);
    }
}