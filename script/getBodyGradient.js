import {body} from "./elements.js";
import {tags} from "./getTags.js";

export function getBodyGradient() {
    if (tags === 'evening' || tags === 'night') {
        body.classList.add('body__night');
    } else {
        body.classList.remove('body__night');
    }
}