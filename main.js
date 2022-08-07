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
    "What is wealth?",
    
    'Smile, you are fine',
    'Focus only on what you can control',
    'Optimistic approach in life',
    'Your views on Addiction',
    'If every job had the same respect, power and money, what job would you do and why?',
    'Should you compare yourself with others?',
    "A subject that you have really liked during your college years?",
    'What is the biggest obstacle that stands in our way right now ?',
    'What music do you listen to lift your spirits when you are feeling down ?',
    'Do you want to be rich ? ',
    'Whenever you say yes to something, you are saying no to something else',
    'What is something you know you do differently than most people ?',
    'What do you have that you can not live without ?',
    'As a child , what did you want to be when you grew up ?',
    'Are you happy with yourself ?',
    'Does hardwork always lead to success?',
    'Is it ok to cheat?',
    'Is there such a thing as useless ?',
    'Is it ok to steal?',
    'Have you stolen something in your life?',
    'What is your perfect vacation?',
    'Do you judge people from their first impression?',
    'How much money will be enough for you to live your dream life.Explain',
    'Has there been a moment in your life where you instantly lost respect for a person?',
    'What is financial freedom, according to you?',
    'What are the things that you think are not worth the risk no matter how much is the potential gain ?',
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
    'What is the least that parents should expect from their child(ren)?',
    'Do you like to live by abiding rules?',
    'What makes life easier ?',
    'What is one of your recent purchases which, you believe, is helping you a lot in your life?',
    'Is earning money easy?',
    'What is wrong with our generation?',
    'One thing that you bought and then regretted later for buying it',
    'What is the one thing that you think most of the people do in the wrong way?',
    'Which social media platform do you use the most and why?',
    'How to earn money?',
    'Do you like flex culture ?',
    'What is the most common thing among our previous generation (our parents) which is not so common among us?',
    'What are some of the things that we, as human beings, are getting better at ?',
    'What are some of the things that we , as human beings, are getting worse at ?',
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
    'What seems too good to be true?',
    'As a kid , which subject did you hate the most?',
    'What do you imagine yourself doing ten years from now ?',
    'How do you spend majority of your free time ?',
    'What do you miss the most from your childhood ?',
    'What are your top three priorities ?',
    'What is the right age to start earning?',
    'What ,according to you, is projected as a reality but is actually fake?',
    'Who do you think was the most interesting person in history?',
    'Reality is often dissapointing',
    'What do you think is changing rapidly as we are progressing into the future?',
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
    'Describe a color of your choice to someone who is blind .' ,
    'What steps do you take when addressing a problem?',
    'If I were a super hero my superpower would be…',
    'A job I’d love to have',
    '2 or 3 things I will never eat… because…',
    'If I could only eat three foods forever',
    'The best movie ever (2 or 3 reasons why)',
    'An important lesson I’ve learned from my life',
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
    "What kind of songs do you generally listen to and why?",
    'Which is the one thing that you have spent ridiculous amount of money on?',
    'What are you known for among your friends or family?',
    'What kind of weather do you like?',
    'A thing in your life which you did in the past which makes no sense to you now',
    'If you can go back in time and talk to yourself, what you would advise your younger self ?',
    'What did you want to become as a child?',
    'What is your phobia?',
    'Who is a gentleman according to you?',
    'What is difficult for you?',
    'What is a thing that most of the people do not know about you but you would want yourself to be known as?',
    'A recent incident where you were got angry but could not/ did not do anything',
    'If you could be of any age for one week, what age and why?',
    'Imagine that you are a mirror. Describe your life.',
    'Imagine that you are a shoe. Describe your life.',
    'Imagine that you are a tree. Describe your life.',
    'Sell a flying car to the people present here.',
    'Sell a speaking parrot to the people present here.',
    'Talk about your favorite color',
    'Where would you choose to live if you had to leave this country?',
    'What is your favorite family tradition',
    'What excites you about the future?',
    'What movie made you laugh really hard?',
    'Is it good to give money to the children who beg?What would you do?',
    'What are you thankful for?',
    'Who is funniest person you know?',
    'What is the most difficult thing about getting older?',
    'Which is the most beautiful place you have seen?',
    'Who or what is sure to make you laugh?',
    'What is something new that you would like to try this year?',
    'What do you think of first when you wake up in the morning?',
    'What would be the hardest thing about climbing Mt. Everest?',
    'What gift would you like to receive on your birthday?',
    'Sell a feature phone/keypad phone to the people present here.',
    'Why do you think people behave the way they do ?',
    'Describe your college.',
    'What is the significance of life?',
    'What do you think about the government of your country?',
    'An unusual thing that you saw or read recently',
    'Interpret the quote:Time is money',
    'Who would you like to be your neighbour?',
    'What are the three most important inventions/discoveries which have changed the course of human life?',
    'What would you like to gift your parents?',
    'Do you believe in God?Why?',
    'Do you pray ? Why?',
    'What is something that you feel is wrong with our generation?',
    'What is something that you feel we are colectively doing wrong?',
    'Is lying ok?',
    'Do you have complete control of your life?',
    'Is giving pocket money to children a good practice?',
    'What habit would you like to break?',
    'Would you rather be self-employed or salaried?',
    'What is the most ironical thing you have come accross?',
    'What is something that you tried once and never want to try again?',
    'Whom do you hate the most?',
    'Would you rather be in high pain which last for a short time or low pain which last for long time?',
    'Three things everyone should do well',
    'An important lesson that I learned after doing a mistake',
    'Things you can not learn at school or college',
    'How to learn a thing that you recently learned?',
    'Three things that you are scared of',
    'Your favorite fictional character',
    'What is reality?',
    'Narrate a funny incident from your life',
    'How do you define an average person?',
    'How do you usually start a conversation?',
    'What is the biggest lie that most people tell themselves?',
    'What is the most creative ad you came accross?',
    'If you were not in the field you are in currently, where do you imagine yourself ?',
    'What is easy but people complicate it?',
    'What are some of the movies that you think are a must-watch?',
    'What is your renet purchase which you think provided you more value for the money?',
    'What is the most important invention/discovery , according to you?',
    'What are you outside of your current job/education?',
    'What things did you believe 5 years ago which have been proven wrong for you?',
    'What is the last thing that you have done selflessly for a stranger?',
    'Describe your country',
    'Describe your state',
    'Discuss one of your good habits',
    'Do you think you are led by circumstances or did you carve your own path?',
    'Whay is the last time you helped someone and how?',
    'What is something you know you are doing wrong?',
    'What is a thing that you can do without much effort while most of the people struggle to do it?',
    'Discuss one of the habits that makes you different from most of the people',
    'Discuss an amusing experience you had recently ',
    'What are you fed up of ? ', 
    'What thing did you believe to be true in your childhood which in fact was a lie ',
    'What do you wish to learn and why?',
    'What have you realised late in your life?',
    'What did you realise early in your life which helped you significantly ?',
    'Good things take time',
    'What seems easy to do but is actually hard?',
    'What is something uncommon that you enjoy doing while most the people do not?',
    'What makes life hard ?',
    'What makes life easy?',
    '3 advices that you would like to give your younger self.',
    'What is your understanding about mental depression?',
    'Why are friends important?',
    'What is something that you did today that you could do in a better way?',
    'A stitch in time saves nine',
    'What is something that most of the people around you do you believe is wrong?',
    'Do you consider yourself a lucky or an unlucky person? Why ?',
    'What is stopping you from achieving something that you want to achieve?',
    'Describe a place you have recently been to ',
    'Simple vs Easy',
    'How do you cool yourself down when you are angry ?',
    'An encounter with a stranger which made you feel happy/relaxed ',
    'Who is/was your favorite teacher and why?',
    'What is something that you learnt recently ?',
    'One productivity hack that you use?',
    'If you get a chance to operate on of the ministries of your country, what would you choose and why?',
    "To improve our world, what are the 3 actions, you believe, we should take?",
    "Should you talk to strangers?",
    "An encounter with a stranger that turned out quite a good experience?",
    "You can spoon-feed people, but you cannot chew and digest for them",
    "What is fear ?",
    "Do you follow a schedule or do things as they come?",
    "What is the most useless invention you have come across? ",
    "Share a supernatural experience that you have had in the past",
    "What do you look for in a person before choosing them as your friend ?"
    "What is the most delicious thing that you have eaten? Describe it .",
    "Do you try to conquer your fears? How ?",
    "What are you planning to do and what is stopping you from doing it?",
    "What is easy but people perceive it to be difficult ?",
    "Do you follow the news? What kind of news do you follow ?",
    "What is something that you do regularly which has made you a better person overall? ",
    "When is the last time you have helped someone? How?",
    "Do you like pets? Why/Why not?",
    "Do you believe in karma ( As you sow, so shall you reap) ?",
    "What movie can you watch over again and again?",
    "Do you exercise? Why/ Why not ?",
    "Do you have any skill/talent that most of the people do not have?",
    "Don't judge a book by its cover",
    "Whether you think you can or you can't , you are right- Henry Ford",
    "Do you play any sport? Why?",
    "Justify the purpose of any movie/web-series villain",
    "Who has been the most influential person in your life and why?",
    "What have you recently explored/ learned about and found it fascinating/interesting?",
    "What are some of the things that a student should do during their college life?",
    "If you were not a human, what living organism would you want to be?",
    "What comes to your mind when you hear the word discipline?",
    "The most difficult thing you have ever done",
    "Have you ever been a victim of fraud? Share your experience?",
    "What is the biggest fraud that you have came accross?",
    "What things must parents teach their kids?",
    "Why do most of the people fear public speaking?",
    "The most useful things in life are free. Discuss"
    
    
    
    
    
    
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
       
      btn.onclick = function ()
{
    clearInterval((timeLeft = 30))
}      
    }, 1000)
  }
  btn.addEventListener('click', function () {
    var randomTopic = topics[Math.floor(Math.random() * topics.length)]
    output.innerHTML = '<h1>' + randomTopic + ' </h1>'
  })
}
