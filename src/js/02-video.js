import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';


const player = new VimeoPlayer(document.getElementById('vimeo-player'));

const storedTime = localStorage.getItem('videoplayer-current-time');

if (storedTime) {
    const currentTime = parseFloat(storedTime);
    
    if (!isNaN(currentTime) && currentTime >= 0) {
        player.getDuration().then(duration => {
            if (currentTime <= duration) {
                player.setCurrentTime(currentTime);
            }
        });
        player.setCurrentTime(currentTime);
    }
}
const updateTime = throttle(() => {
    const currentTime = player.getCurrentTime();
    localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000);


player.on('timeupdate', updateTime);