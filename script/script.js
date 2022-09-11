import {addTimeAndDate} from './addTimeAndDate.js';
import {addEventListeners} from './addEventListeners.js';
import {getCreatorData} from './getCreatorData.js';
import {getBodyGradient} from './getBodyGradient.js';

setInterval(addTimeAndDate, 1000);
addEventListeners();
getCreatorData();
getBodyGradient();