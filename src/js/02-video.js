import _ from 'lodash-es';
import Player from '@Vimeo/player';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const onPlay = function (data) {
  console.log(data, 'i am data');
  const seconds = JSON.parse(localStorage.getItem('videoplayer-current-time'));
  player.setCurrentTime(+seconds);
};

player.on('play', onPlay);
player.on(
  'timeupdate',
  _.throttle(data => {
    const { seconds } = data;
    localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
  }, 1000)
);
