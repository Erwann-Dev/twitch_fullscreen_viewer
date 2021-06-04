/*
 ! Zone event keyboard
 */

 function vhToPixels (vh) {
  return Math.round(window.innerHeight / (100 / vh)) + 'px';
}

function quelle_touche(evenement) {
	console.log('ccccc okk',window.innerHeight);
  console.log(window.innerWidth);
  console.log(vhToPixels (100))
	var touche = evenement.keyCode;
	console.log(touche);
	if (touche == 32 && isplay == 0) {
		pause();
	} else if (touche == 32 && isplay == 1) {
		play();
	} else if (touche == 113) {
		back();
	} else if (touche == 100) {
		next();
	} else if (touche == 38) {
		n = 1;
		temps_decompte = temps_passer / 1000;
		changeImage(n);
		clearInterval(change);
		change = setInterval(next, temps_passer);
		temps_decompte = temps_passer / 1000;
	} else if (touche == 233) {
		n = 2;
		temps_decompte = temps_passer / 1000;
		changeImage(n);
		clearInterval(change);
		change = setInterval(next, temps_passer);
		temps_decompte = temps_passer / 1000;
	} else if (touche == 34) {
		n = 3;
		temps_decompte = temps_passer / 1000;
		changeImage(n);
		clearInterval(change);
		change = setInterval(next, temps_passer);
		temps_decompte = temps_passer / 1000;
	} else if (touche == 39) {
		n = 4;
		temps_decompte = temps_passer / 1000;
		changeImage(n);
		clearInterval(change);
		change = setInterval(next, temps_passer);
		temps_decompte = temps_passer / 1000;
	}
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