import {addTimeAndDate} from './script/addTimeAndDate.js';
import {connectGithubApi} from './script/connectGithubApi.js';
import {connectFlickrApi} from './script/connectFlickrApi.js';
import {connectOpenCageApi} from './script/connectOpenCageApi.js';
import {connectOpenWeatherApi} from './script/connectOpenWeatherApi.js';

setInterval(addTimeAndDate, 1000);
connectGithubApi();
connectFlickrApi();
connectOpenCageApi();
connectOpenWeatherApi();