let timerInterval;
let hours = 0;
let minutes = 0;
let seconds = 0;

var counting = false;
var button_stop = document.getElementById("stop");
var button_reset = document.getElementById("reset");



function startTimer() {

    if(counting) return;
    counting = true;
    timerInterval = setInterval(incrementTimer, 1000);
    button_stop.disabled 

}


function stopTimer() {
    if(counting) clearInterval(timerInterval);

}


function resetTimer() {
    clearInterval(timerInterval);

    hours = 0;
    minutes = 0;
    seconds = 0;

    document.getElementById("timer").textContent = "00:00:00";

}


function incrementTimer() {

  seconds++;

  if (seconds >= 60) {
    seconds = 0;
    minutes++;

    if (minutes >= 60) {
      minutes = 0;
      hours++;

    }

  }


  const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

  document.getElementById("timer").textContent = formattedTime;

}


function pad(value) {

  return value < 10 ? `0${value}` : value;

}



