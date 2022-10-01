import {addTimeAndDate} from './addTimeAndDate.js';
import {addEventListeners} from './addEventListeners.js';
import {addCreatorData} from './addCreatorData.js';
import {addBodyGradient} from './addBodyGradient.js';
import {connectLocalStorage} from './connectionLocalstorage.js';

addTimeAndDate();
setInterval(addTimeAndDate, 1000);
addCreatorData();
addBodyGradient();
addEventListeners();
connectLocalStorage();