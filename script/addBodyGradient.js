import {body} from "./elements.js";
import {tags} from "./getTags.js";

export function addBodyGradient() {
    if (tags === 'evening' || tags === 'night') {
        body.classList.toggle('body__night');
    }
}