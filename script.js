/*
 ! Zone event keyboard
 */

 function vhToPixels (vh) {
  return Math.round(window.innerHeight / (100 / vh)) + 'px';
}

function change(streamer) {
  document.getElementById('viewer').src = "https://player.twitch.tv/?channel="+streamer+"&parent="+$(location).attr('host');
}

function play(){
  document.getElementById('viewer').src = "https://player.twitch.tv/?channel=monstercat&parent="+$(location).attr('host');
}
if (document.readyState === 'complete') {
  play();
} else {
  document.addEventListener('DOMContentLoaded', function() {
    play();
  });
}

function other(){
  streamer = prompt("Entre le nom du streamer : ");
  change(streamer.toLowerCase())
}