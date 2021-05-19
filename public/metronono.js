  document.querySelector('#turnAudioOnBtn').addEventListener('click',turnAudioOn);
  document.querySelector('#startBtn').addEventListener('click',play);
  document.querySelector('#stopBtn').addEventListener('click',stop);

const myBpm = 120;
const player = new Tone.Player("cowbell.wav").toDestination();
const loopA = new Tone.Loop(time => {player.start(time)}, '4n');
// var slider = document.getElementById("bpmSlider");
var output = document.getElementById("demo");
output.innerHTML = "slider.value";

// slider.oninput = function() {
//   output.innerHTML = this.value;
// }

async function turnAudioOn () {
  await Tone.start();
  console.clear();
  console.log('AudioOn!');

}
function play () {
  console.clear();
  Tone.Transport.stop();
  Tone.Transport.clear();
  loopA.stop();
  Tone.Transport.bpm.value = myBpm;
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
  console.log(val);
  output.innerHTML = val;
}