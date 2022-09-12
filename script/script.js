import {addTimeAndDate} from './addTimeAndDate.js';
import {addEventListeners} from './addEventListeners.js';
import {addCreatorData} from './addCreatorData.js';
import {addBodyGradient} from './addBodyGradient.js';
import {connectionLocalStorage} from './connectionLocalstorage.js';

setInterval(addTimeAndDate, 1000);
addCreatorData();
addBodyGradient();
addEventListeners();
connectionLocalStorage();
