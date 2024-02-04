import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);  

player.on('play', function() {
    console.log('played the video!');
});

player.on('timeupdate', function(e) {
    console.log(e.seconds); 
});
player.on('timeupdate', function(e) {
    localStorage.setItem('videoplayer-current-time', e.seconds);
});

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime !== null) {
    player.setCurrentTime(savedTime).then(function(seconds) {
       
    }).catch(function(error) {
    
    });
}

player.on('timeupdate', throttle(function(event) {
    localStorage.setItem('videoplayer-current-time', event.seconds);
}, 1000)); 