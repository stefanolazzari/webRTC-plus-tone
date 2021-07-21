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
  if(mtnVolumeText > -49){
  await Tone.start();
  console.clear();
  player.volume.value = mtnVolumeText;
  console.log('AudioOn!, Vol = ' + mtnVolumeText);
}
  else {
    console.clear();
    //player.volume.value = vol;
    console.log('AudioOff!, Vol = ' + mtnVolumeText);
  };
}

function play () {
  console.clear();
  Tone.Transport.stop();
  loopA.stop();
  loopA.start();
  Tone.Transport.start();
  console.log('Start!')
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
  if (val2 > -49) {
    turnAudioOnBtn2.innerHTML = '<i class="material-icons mdc-icon-button__icon">volume_up</i>';
  }
  else {
    turnAudioOnBtn2.innerHTML = '<i class="material-icons mdc-icon-button__icon">volume_off</i>';
  }
}