
window.onload = function () {
  const btn = document.getElementById('btn');
  const output = document.getElementById('output');
  const topics = require('./topics.js');

  const timeLeftDisplay = document.getElementById('time-left');
  const appendTens = document.getElementById('tens');
  const appendSeconds = document.getElementById('seconds');

  const buttonStart = document.getElementById('button-start');
  const buttonStop = document.getElementById('button-stop');
  const buttonReset = document.getElementById('button-reset');

  let seconds = 0;
  let tens = 0;
  let stopwatchInterval = null;
  let countdownInterval = null;

  // Stopwatch
  buttonStart.onclick = function () {
    if (stopwatchInterval !== null) return;

    stopwatchInterval = setInterval(function () {
      tens++;

      if (tens >= 60) {
        seconds++;
        tens = 0;
      }

      appendTens.textContent = String(tens).padStart(2, '0');
      appendSeconds.textContent = String(seconds).padStart(2, '0');
    }, 1000);
  };

  buttonStop.onclick = function () {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
  };

  buttonReset.onclick = function () {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    seconds = 0;
    tens = 0;
    appendTens.textContent = '00';
    appendSeconds.textContent = '00';
  };

  // Countdown and random topic
  btn.onclick = function () {
    const randomTopic =
      topics[Math.floor(Math.random() * topics.length)];

    output.innerHTML = '';
    const heading = document.createElement('h1');
    heading.textContent = randomTopic;
    output.appendChild(heading);

    clearInterval(countdownInterval);

    let timeLeft = 30;
    timeLeftDisplay.textContent = timeLeft;

    countdownInterval = setInterval(function () {
      timeLeft--;

      timeLeftDisplay.textContent = timeLeft;

      if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        countdownInterval = null;
      }
    }, 1000);
  };
};
