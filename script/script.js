import {addTimeAndDate} from './addTimeAndDate.js';
import {connectGithubApi} from './connectGithubApi.js';
import {getLocationAndWeather} from './getLocationAndWeather.js';

setInterval(addTimeAndDate, 1000);
connectGithubApi();
getLocationAndWeather();