var myAudio = document.getElementById("myAudio");
var musicmute = document.getElementById("icon");

function muteUnmute() {
  if (myAudio.muted === true) {
    myAudio.muted = false;
    musicmute.classList.add("fa-music");
    musicmute.classList.remove("fa-volume-xmark");
    myAudio.play();
  } else {
    myAudio.muted = true;
    musicmute.classList.add("fa-volume-xmark");
    musicmute.classList.remove("fa-music");
  }

}
