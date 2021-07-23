document.querySelector('#startBtn').addEventListener('click',play);
document.querySelector('#stopBtn').addEventListener('click',stop);
document.querySelector('#turnAudioOnBtn2').addEventListener('click', turnAudioOn);
var turnAudioOnBtn2 = document.querySelector('#turnAudioOnBtn2');



const initialBmp = 120;
const initialMtnVol = -70;
const player = new Tone.Player("cowbell.wav").toDestination();
const loopA = new Tone.Loop(time => {player.start(time)}, '4n');


var bpmText = document.getElementById("bpmText");
var mtnVolumeText = document.getElementById("mtnVolumeText");
mtnVolumeText.innerHTML = initialMtnVol;
bpmText.innerHTML = initialBmp;
Tone.Transport.bpm.value = initialBmp;
player.volume.value = initialMtnVol;

async function turnAudioOn () {
  await Tone.start();
  console.log("audio button pressed!");
  if(player.volume.value<-69){
    mtnVolume(-10);
    document.getElementById("mtnValue").value = -10;
  }
  else if(player.volume.value>-70){
    mtnVolume(-70);
    document.getElementById("mtnValue").value = -70;
  };
}

function play () {
  console.clear();
  Tone.Transport.stop();
  loopA.stop();
  loopA.start();
  Tone.Transport.start();
  console.log('Start!');
}

function stop () {
  console.clear();
  Tone.Transport.stop();
  Tone.Transport.clear();
  console.log('stop!');
}
function myRamp (val) {
  Tone.Transport.bpm.rampTo(val, 1);
  bpmText.innerHTML = val;
}

function mtnVolume (val2) {
  player.volume.value = val2;
  mtnVolumeText.innerHTML = val2;
  console.log("Volume= " + val2);
  if (val2 > -69) {
    turnAudioOnBtn2.innerHTML = '<i class="material-icons mdc-icon-button__icon">volume_up</i>';
  }
  else {
    turnAudioOnBtn2.innerHTML = '<i class="material-icons mdc-icon-button__icon">volume_off</i>';
  }
}