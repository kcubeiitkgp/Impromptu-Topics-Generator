window.onload = function () {
  let btn = document.getElementById('btn')
  let output = document.getElementById('output')
  let timer = document.getElementById('timer')

  var seconds = 00
  var tens = 00
  var appendTens = document.getElementById('tens')
  var appendSeconds = document.getElementById('seconds')
  var buttonStart = document.getElementById('button-start')
  var buttonStop = document.getElementById('button-stop')
  var buttonReset = document.getElementById('button-reset')
  var Interval

  let topics = [
    'What has been the most terrifying moment of your life so far ?',
    'What is your happiest memory ?',
    'What are you most excited about in your life right now-today ?',
    'The most successful person you know',
    'Wisdom vs Knowledge',
    'Should you compare yourself with others?',
    'What is the biggest obstacle that stands in our way right now ?',
    'What music do you listen to lift your spirits when you are feeling down ?',
    'Do you want to be rich ? ',
    'What is something you know you do differently than most people ?',
    'What do you have that you can not live without ?',
    'As a child , what did you want to be when you grew up ?',
    'Are you happy with yourself ?',
    'What do you sometimes pretend to understand that you really do not ? ',
    'How would you spend your ideal day ? ',
    'Share something unusual about yourself',
    'What word best describes the way you have spent the last month of your life ?',
    'What have you worked hard on and loved every minute of it ?',
    ' What have you worked hard on even when you did not like it ?',
    'What is the nicest thing someone has ever done for you ?',
    'What bad habits do you want to break ?',
    'What do you think that you are better at than most of the people ?',
    'Should you do what you love or love what you do ?',
    'What is the strongest person you know ?',
    'What was the last time you felt lucky ?',
    'What is the most defining moment of your life so far ?',
    'When you have a random hour of free time, what do you usually do ?',
    'Personal finanace advice',
    'What makes life easier ?',
    'What questions do you often ask yourself ?',
    'What one thing do you want to change in this world ?',
    'What is the most recent dream you remember having while sleeping ?',
    'Why do you matter ?',
    'What have you read online recently that inspired you ?',
    'What are you sure of in your life ?',
    'What is the number one quality that makes a person successful ?',
    'What was your last major accomplishment ?',
    'What is your most prized possesion ?',
    'What is worse failing or never trying ?',
    'What are you acertain about ?',
    'What life lesson did you learn the hard way ?',
    'What do you love to practice ?',
    'What do you imagine yourself doing ten years from now ?',
    'How do you spend majority of your free time ?',
    'What do you miss the most from your childhood ?',
    'What are your top three priorities ?',
    'What is your favorite incident from your life that you enjoy sharing with others ?',
    'What is a belief that you hold that many people disagree with ?',
    'Who or what is the greatest enemy of mankind ?',
    'Who is your role model ?',
    'What can you do now that you were not capable of a year ago ?',
    'What job would you never do no matter how much it paid ?',
    'What do you want most ?',
    'If you wanted to live one day of your life over again, what day would you choose ?',
    'What are the three moral rules you will never break ?',
    'What is your high school memory that you cherish even today ?',
    'If you had 1 hour extra per day, what would you do ?',
    'If you had a chance to go back to past and change one thing, what would that be ?',
    'Who depends on you ?',
    'What do you see when you look into the future ?',
    'Is there such a thing as perfect ?',
    'What is the one thing that will change the most in the next ten years ?',
    'What is your biggest fear ?',
    'What has fear of failure stopped you from doing ?',
    'What confuses you ?',
    'If you could message all the people around the world for once, what message would it be ?',
    'What makes you proud ?',
    'What is the biggest change that you have made in your life in the last year ?',
    'If you could ask a person, alive or dead, only one question , who would you ask and what ?',
    'Have you regretted something you did not say or do ? ',
    'What do you love most about yourself ?',
    'What is the one thing that you have not done that you really want to do ?',
    'What looks so easy to do but is actually hard ?',
    'If you move abroad, wat is the one thing that you will miss about India ?',
    'Are professional athletes and actors paid too much ?',
    'What do you know well enough to teach to others ?',
    'If you had a chance to become a teacher, what would you teach ?',
    'What is the least that you expect from others ?',
    'What is your most favorite hobby ?',
    'Do looks matter ?',
    'What was the last thing that made you laugh loud ?',
    'What can you over and over without getting bored ?',
    'Is there ever a time when giving up makes sense ?',
    'A person you would like to meet once in your lifetime',
    'Three things you believe that everyone should do ',
    'What is the best time for a kid to get a personal phone',
    'Beliefs you had 5 years ago which have been proven wrong ?',
    'Do you think academics and formal education are overhyped ?',
    'Describe a show that you would watch on TV a kid',
    'What do you think of money ?',
    'How to make your favorite meal ?',
    'What is success ? ',
    'Describe a turning point of your life ? ',
    'What is the best advice your parents ever gave you ? ',
    'If you had a single use time machine , would you go to past or future ? ',
    'Describe your hometown or birthplace. ',
    'If you had to be famous , what would you want it to be for ? ',
    'What is the best book you have ever read ? ',
    'If you get 1 cr rupees now , how would you spend it ? ',
    'Are you a early riser or late sleeper? Would you rather be opposite? ',
    'What has the COVID-19 pandemic taught us?',
    'What goals have you set for you this year ?',
    'What do you miss the most from your college life?',
    'What is happiness? ',
    'What can someone do to grab your attention?',
    'What do you wish you spent more time doing five years ago?',
    'What worries you about the future?',
    'Who is a hero according to you ? ',
    'Where or who do ytou turn to when you need good advice?',
    'Should parents decide what should their child become in future?',
    'What was a quick decision you once made that changed your life?',
    'How are you pursuing your dreams right now ?',
    'What thing have youu done lately that is worth remembering ? ',
    'Are you more like yor mom or dad and in what way ? ',
    'What do you wish you should have done differently? ',
    'Any movie or web-series that you recently watched which was worth the time ?',
    'What motivates to keep working hard ? ',
    'What human quality do we need more of?',
    'In one year from today, how do you think your life will be different?',
    'What is the most important lesson that you learnt last year?',
    'How are you different from most of the people ? ',
    'What is the most enjoyable thing that you have done with your family members recently?',
    'Which activities make you lose track of time?',
    'What opportunities have you missed deliberately that you wished you have opted for ?',
    'Are you happy with where you are in your life?',
    'What is the last time you have helped someone selflessly?',
    'Tell a story.',
    'A moment in your life when you felt like giving up but did not do so',
    'Is success limited?',
    'A recent positive change that you brought in your life',
    'Expectations vs reality after entering college',
    'Describe your ideal day',
    'Describe your favorite vacation',
    '3 things that you learned in the past twelve months',
    '3 things you wish to learn in the next three months',
    'Describe a film or a web series which you have watched recently',
    'What is fitness?',
    'What is the one human quality that you hate the most?',
    'What is the one human quality that you like the most?',
    'What differentiates a successful and an unsuccessful person?',
    'What is financial independence?',
    'What are your strengths and weaknesses?',
    'What makes your angry?',
    'What makes you happy?',
    'Which superpower would you like to have ? ' ,
  ]

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

  btn.onclick = function () {
    const timeLeftDisplay = document.getElementById('time-left')

    let timeLeft = 30
    setInterval(function () {
      if (timeLeft <= 0) {
        clearInterval((timeLeft = 0))
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
