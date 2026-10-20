
window.addEventListener("DOMContentLoaded", () => {
  const topicButton = document.getElementById("btn");
  const output = document.getElementById("output");
  const timeLeftDisplay = document.getElementById("time-left");
  const secondsDisplay = document.getElementById("seconds");
  const tensDisplay = document.getElementById("tens");

  const startButton = document.getElementById("button-start");
  const stopButton = document.getElementById("button-stop");
  const resetButton = document.getElementById("button-reset");

  const topics = window.topics || [];

  let elapsed = 0;
  let countdown = 0;
  let stopwatchInterval = null;
  let countdownInterval = null;
  let lastTopicIndex = -1;

  function updateStopwatch() {
    secondsDisplay.textContent =
      String(Math.floor(elapsed / 100)).padStart(2, "0");

    tensDisplay.textContent =
      String(elapsed % 100).padStart(2, "0");
  }

  function stopCountdown() {
    clearInterval(countdownInterval);
    countdownInterval = null;
  }

  function startCountdown() {
    stopCountdown();

    countdown = 30;
    timeLeftDisplay.textContent = "30";

    countdownInterval = setInterval(() => {
      countdown--;

      timeLeftDisplay.textContent =
        String(countdown).padStart(2, "0");

      if (countdown <= 0) {
        stopCountdown();
      }
    }, 1000);
  }

  topicButton.addEventListener("click", () => {
    if (topics.length === 0) {
      output.textContent = "No topics available. Check topics.js.";
      return;
    }

    let index;

    do {
      index = Math.floor(Math.random() * topics.length);
    } while (topics.length > 1 && index === lastTopicIndex);

    lastTopicIndex = index;
    output.textContent = topics[index];

    startCountdown();
  });

  startButton.addEventListener("click", () => {
    if (stopwatchInterval !== null) return;

    stopwatchInterval = setInterval(() => {
      elapsed++;
      updateStopwatch();
    }, 10);
  });

  stopButton.addEventListener("click", () => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    stopCountdown();
  });

  resetButton.addEventListener("click", () => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;

    stopCountdown();

    elapsed = 0;
    countdown = 0;

    updateStopwatch();
    timeLeftDisplay.textContent = "00";
  });
});
