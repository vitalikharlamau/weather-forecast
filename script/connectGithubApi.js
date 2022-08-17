import {creatorGithub, creatorAvatar, creatorName, creatorPosition, creatorTwitter} from './elements.js';

export function connectGithubApi() {
    fetch('https://api.github.com/users/vitaliykharlamov')
        .then((response) => {
            if(response.ok) {
                return response.json();
            }
        })
        .then((data) => {
            creatorGithub.href = data.html_url;
            creatorGithub.target = '_blank';
            
            creatorAvatar.src = data.avatar_url;

            creatorName.textContent = data.name ? data.name : data.login;

            creatorPosition.textContent = data.bio ? data.bio : 'Developer';
            
            if (data.twitter_username) {
                creatorTwitter.classList.toggle('footer__twitter_ok');
                creatorTwitter.href = `https://twitter.com/${data.twitter_username}`;
                creatorTwitter.target = '_blank';
            }
        });
}