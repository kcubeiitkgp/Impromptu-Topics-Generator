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
    'Are you a people-pleaser?',
    'A recent video or an article which you watched or read which you think is worth sharing?',
    'What can you do now that you were not capable of a year ago ?',
    'What job would you never do no matter how much it paid ?',
    'What do you want most ?',
    'If you wanted to live one day of your life over again, what day would you choose ?',
    'What are the three moral rules you will never break ?',
    'Which cewlebrity do you admire and why?',
    'What is your high school memory that you cherish even today ?',
    'What is the one thing that you would like to advise your younger self?',
    'If you had 1 hour extra per day, what would you do ?',
    'If you had a chance to go back to past and change one thing, what would that be ?',
    'Who depends on you ?',
    'What is the one thing that very few people know about you?',
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
    'What is something you would like to see in your lifetime and why?',
     'Has there ever been a time where you needed to make a decision without knowing all of the details of a situation?',

'Have you ever foreseen a problem before it happened? What did you do to prevent this from happening?',

' Describe a color of your choice to someone who is blind .' ,

'What steps do you take when addressing a problem?',
'If I were a super hero my superpower would be…',
 'A job I’d love to have',
  '2 or 3 things I will never eat… because…',
   'If I could only eat three foods forever',
  'The best movie ever (2 or 3 reasons why)',
'An important lesson I’ve learned',
'If you were the leader of your country, what changes would you make to the current state of your nation and why?',

'In your opinion, what is the most fundamentally urgent issue in our world, and why do you feel this way?',

'What single thing in your opinion causes the most harm to us as a society, and how is it avoidable?',

'Can human nature ever be changed? If so, how should it be changed and why?',

'If you could create only three laws for people to live by, what would they be and why?',

'Do you believe the world could exist without the concept of material wealth? How would it be different than it is now?',

'If you could choose a superpower for you , which one should it be ?',

'Do we have a moral obligation to help those less fortunate than we are? Why or why not?',

'What harsh truths about life do you prefer to consciously ignore, and why?',

'If you had to either lie or speak truth everytime , which one would you prefer ?',

'Is humanity inherently “good” or inherently “evil?” Why do you feel this way?',

'Do you consider the effects of our words and actions on other people?',

'How do you explain your favourite subject to a kid ?',
' What is development according to you?',

'Explain 3 lessons you’ve learned so far while attending college',
 'The personal achievement I’m most proud of is… (because…)',
 'The greatest gifts we can give others are…',
 'According to you ,what is underrated?',
 'According to you ,who is underrated?',

'Your vision or your hearing ; which one of the two would you choose if you had to choose any one of them?',

'What is a good job according to you?',

'If you are offered a holiday package to your preferred location, where would you like to go?',

'Is peer pressure beneficial for the development of a student ?',

'If you had a chance to build a startup , what category would it belong to?',

'If you become the education minister of your country , what changes would you suggest in the school system?',

'Does our technology connect us more, or isolate us more? Why do you feel this way?',

'How is our perception of good and evil shaped by our films, books, and video games?',

'Are you in the rat race and why ?',
    'Are you worried about what people think about you?',
    'A thing that you use in your daily life ',
    'Explain 3 things you wish you knew before entering college',
    'When I was a kid I was afraid of',
    'My favorite season is… because…',
    'My favorite summer holidays memory from childhood',
    'What is your favorite animal and why?',
    'According to you,what is overrated?',
    'According to you,who is overrated?',
    'What seems easy to do but is actually hard?',
    'Would you prefer to be deaf or blind right from your birth?',
    'Which sport would you like to learn?',
    'Which is the one thing that you have spent ridiculous amount of money on?',
    'What are you known for among your friends or family?',
    'What kind of weather do you like?',
    'A thing in your life which you did in the past which makes no sense to you now',
    'How would you explain ?',
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
