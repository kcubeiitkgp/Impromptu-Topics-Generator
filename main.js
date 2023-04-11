window.onload = function () {
  let btn = document.getElementById('btn')
  let output = document.getElementById('output')
  let timer = document.getElementById('timer')

  let topics = require('./topics.js')

  var seconds = 00
  var tens = 00
  var appendTens = document.getElementById('tens')
  var appendSeconds = document.getElementById('seconds')
  var buttonStart = document.getElementById('button-start')
  var buttonStop = document.getElementById('button-stop')
  var buttonReset = document.getElementById('button-reset')
  var Interval

  buttonStart.onclick = function () {
    clearInterval(Interval)
    Interval = setInterval(startTimer, 1000)
  }

  buttonStop.onclick = function () {
    clearInterval(Interval)
  }

  buttonReset.onclick = function () {
    clearInterval(Interval)
    tens = '00'
    seconds = '00'
    appendTens.innerHTML = tens
    appendSeconds.innerHTML = seconds
  }

  function startTimer() {
    tens++

    if (tens <= 9) {
      appendTens.innerHTML = '0' + tens
    }

    if (tens > 9) {
      appendTens.innerHTML = tens
    }

    if (tens > 59) {
      console.log('seconds')
      seconds++
      appendSeconds.innerHTML = '0' + seconds
      tens = 0
      appendTens.innerHTML = '0' + 0
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds
    }
  }

  let intervalId // Added this variable to hold the interval id

  btn.onclick = function () {
    const timeLeftDisplay = document.getElementById('time-left')

    let timeLeft = 30
    clearInterval(intervalId) // Clear any previous interval
    intervalId = setInterval(function () {
      if (timeLeft <= 0) {
        clearInterval(intervalId) // Clear the interval when the time runs out
      }
      timeLeftDisplay.innerHTML = timeLeft

      timeLeft -= 1
    }, 1000)
  }

  btn.addEventListener('click', function () {
    var randomTopic = topics[Math.floor(Math.random() * topics.length)]
    output.innerHTML = '<h1>' + randomTopic + ' </h1>'
  })
}
