import {connectGithubApi} from './connectionAPIs.js';
import {creatorGithub, creatorAvatar, creatorName, creatorPosition, creatorTwitter} from './elements.js';

export async function getCreatorData() {
    const creatorInfo = await connectGithubApi();
    const {html_url: url, avatar_url: avatar, name: name, login: login, bio: biography, twitter_username: twitter} = creatorInfo;

    creatorGithub.href = url;
    creatorGithub.target = '_blank';

    creatorAvatar.src = avatar;

    creatorName.textContent = name ? name : login;

    creatorPosition.textContent = biography ? biography : 'Developer';

    if (twitter) {
        creatorTwitter.classList.toggle('footer__twitter_ok');
        creatorTwitter.href = `https://twitter.com/${twitter}`;
        creatorTwitter.target = '_blank';
    }
}