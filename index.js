import {addTimeAndDate} from './script/addTimeAndDate.js';
import {connectGithubApi} from './script/connectGithubApi.js';

setInterval(addTimeAndDate, 1000);
connectGithubApi();