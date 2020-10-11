const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");

let questions = [
  {
    id: 1,
    question: "I enjoy participating in classroom discussions and debates.",
    answer: "auditory",
    options: ["A lot like me", "Somewhat like me", "Not like me"],
  },
  {
    id: 2,
    question: "I try to remember information by picturing it in my mind.",
    answer: "visual",
    options: ["A lot like me", "Somewhat like me", "Not like me"],
  },
  {
    id: 3,
    question: "My best school subjects are English and foreign languages",
    answer: "audi",
    options: ["A lot like me", "Somewhat like me", "Not like me"],
  },
  {
    id: 4,
    question: "I sound words out when I am trying to learn to spell them.",
    answer: "audi",
    options: ["A lot like me", "Somewhat like me", "Not like me"],
  },
  {
    id: 5,
    question:
      "I draw the letters of a word with my fingers when trying to learn its spelling.",
    answer: "Central Processing Unit",
    options: ["A lot like me", "Somewhat like me", "Not like me"],
  },
  {
    id: 6,
    question: "It helps me to read out loud when studying from my textbooks.",
    answer: "audi",
    options: ["A lot like me", "Somewhat like me", "Not like me"],
  },
  {
    id: 7,
    question: "I create songs and jingles to remember information.",
    answer: "audi",
    options: ["A lot like me", "Somewhat like me", "Not like me"],
  },
  {
    id: 8,
    question: "I do best in subjects such as math and science.",
    answer: "Central Processing Unit",
    options: ["A lot like me", "Somewhat like me", "Not like me"],
  },
  {
    id: 9,
    question: "I follow oral directions better than written directions.",
    answer: "audi",
    options: ["A lot like me", "Somewhat like me", "Not like me"],
  },
  {
    id: 10,
    question:
      "I learn how objects work by taking them apart and putting them back together.",
    answer: "Central Processing Unit",
    options: ["A lot like me", "Somewhat like me", "Not like me"],
  },
  {
    id: 11,
    question: "I tap my foot or a pencil while thinking",
    answer: "Central Processing Unit",
    options: ["A lot like me", "Somewhat like me", "Not like me"],
  },
  {
    id: 12,

    question: "I do well in lab classes.",
    answer: "Central Processing Unit",
    options: ["A lot like me", "Somewhat like me", "Not like me"],
  },
  {
    id: 13,
    question:
      "I learn a lot about a person by observing their facial expressions and body language.",
    answer: "visual",
    options: ["A lot like me", "Somewhat like me", "Not like me"],
  },
  {
    id: 14,
    question: "I am good at drawing things.",
    answer: "visual",
    options: ["A lot like me", "Somewhat like me", "Not like me"],
  },
  {
    id: 15,
    question:
      "I need to participate in an activity in order to learn how to do it.",
    answer: "Central Processing Unit",
    options: ["A lot like me", "Somewhat like me", "Not like me"],
  },
  {
    id: 16,
    question: "I learn a lot from diagrams and illustrations in textbooks.",
    answer: "visual",
    options: ["A lot like me", "Somewhat like me", "Not like me"],
  },
  {
    id: 17,
    question: "I am good at using my hands to fix things.",
    answer: "Central Processing Unit",
    options: ["A lot like me", "Somewhat like me", "Not like me"],
  },
  {
    id: 18,
    question:
      "I need explanations of diagrams, graphs, and maps in order to understand them",
    answer: "audi",
    options: ["A lot like me", "Somewhat like me", "Not like me"],
  },
  {
    id: 19,
    question: "I am good at acting out stories.",
    answer: "Central Processing Unit",
    options: ["A lot like me", "Somewhat like me", "Not like me"],
  },
  {
    id: 20,
    question: "I can tell if a word is spelled correctly by looking at it",
    answer: "visual",
    options: ["A lot like me", "Somewhat like me", "Not like me"],
  },
  {
    id: 21,
    question: "I use my hands when explaining something to another person.",
    answer: "Central Processing Unit",
    options: ["A lot like me", "Somewhat like me", "Not like me"],
  },
  {
    id: 22,
    question: "I am good at doing word search puzzles",
    answer: "Central Processing Unit",
    options: ["A lot like me", "Somewhat like me", "Not like me"],
  },
  {
    id: 23,
    question: "I prefer teachers who write information on the chalkboard.",
    answer: "visual",
    options: ["A lot like me", "Somewhat like me", "Not like me"],
  },
  {
    id: 24,
    question: " I prefer teachers who spend a lot of time explaining things.",
    answer: "audi",
    options: ["A lot like me", "Somewhat like me", "Not like me"],
  },
  {
    id: 25,
    question:
      "When I take a test, I can see the answer in my head the way it appeared in my notes or textbook",
    answer: "visual",
    options: ["A lot like me", "Somewhat like me", "Not like me"],
  },
  {
    id: 26,
    question: "I use pictures, arrows, and other symbols when I take notes.",
    answer: "visual",
    options: ["A lot like me", "Somewhat like me", "Not like me"],
  },
  {
    id: 27,
    question:
      "When learning to spell a word, I trace the letters with my finger",
    answer: "Central Processing Unit",
    options: ["A lot like me", "Somewhat like me", "Not like me"],
  },
  {
    id: 28,
    question:
      "I learn better by listening to a lecture than by reading a textbook.",
    answer: "audi",
    options: ["A lot like me", "Somewhat like me", "Not like me"],
  },
  {
    id: 29,
    question: "I remember things I hear better than things I see.",
    answer: "audi",
    options: ["A lot like me", "Somewhat like me", "Not like me"],
  },
  {
    id: 30,
    question: "I am good at designing graphs, charts, and diagrams.",
    answer: "Central Processing Unit",
    options: ["A lot like me", "Somewhat like me", "Not like me"],
  },
  {
    id: 31,
    question: "What kind of book would you like to read for fun?",
    answer: "Central Processing Unit",
    options: [
      "A book with lots of pictures in it",
      "A book with lots of words in it",
      "A book with word searches or crossword puzzles",
    ],
  },
  {
    id: 32,
    question:
      "When you are not sure how to spell a word, what are you most likely to do? ",
    answer: "Central Processing Unit",
    options: [
      "Write it down to see if it looks right",
      "Spell it out loud to see if it sounds right",
      "Trace the letters in the air (finger spelling)",
    ],
  },
  {
    id: 33,
    question:
      "You're out shopping for clothes, and you're waiting in line to pay. What are you most likely to do while you are waiting?",
    answer: "Central Processing Unit",
    options: [
      "Look around at other clothes on the racks",
      "Talk to the person next to you in line",
      "Fidget or move back and forth",
    ],
  },
  {
    id: 34,
    question: 'When you see the word "cat," what do you do first? ',
    answer: "Central Processing Unit",
    options: [
      "Picture a cat in your mind",
      'Say the word "cat" to yourself',
      "Think about being with a cat (petting it or hearing it purr)",
    ],
  },
  {
    id: 35,
    question: "What's the best way for you to study for a test?",
    answer: "Central Processing Unit",
    options: [
      "Read the book or your notes and review pictures or charts",
      "Have someone ask you questions that you can answer out loud",
      "Make up index cards that you can review",
    ],
  },
  {
    id: 36,
    question:
      "What's the best way for you to learn about how something works (like a computer or a video game)?",
    answer: "Central Processing Unit",
    options: [
      "Get someone to show you",
      "Read about it or listen to someone explain it",
      "Figure it out on your own",
    ],
  },
  {
    id: 37,
    question:
      "If you went to a school dance, what would you be most likely to remember the next day?",
    answer: "Central Processing Unit",
    options: [
      "The faces of the people who were there",
      "The music that was played",
      "The dance moves you did and the food you ate",
    ],
  },
  {
    id: 38,
    question: "What do you find most distracting when you are trying to study?",
    answer: "Central Processing Unit",
    options: [
      "People walking past you",
      "Loud noises",
      "An uncomfortable chair",
    ],
  },
  {
    id: 39,
    question: "When you are angry, what are you most likely to do?",
    answer: "Central Processing Unit",
    options: ['Put on your "mad" face', "Yell and scream", "Slam doors"],
  },
  {
    id: 40,
    question: "When you are happy, what are you most likely to do?",
    answer: "Central Processing Unit",
    options: ["Smile from ear to ear", "Talk up a storm", "Act really hyper"],
  },
  {
    id: 41,
    question: "When in a new place, how do you find your way around?",
    answer: "Central Processing Unit",
    options: [
      "Look for a map or directory that shows you where everything is",
      "Ask someone for directions",
      "Just start walking around until you find what you're looking for",
    ],
  },
  {
    id: 42,
    question: "Of these three classes, which is your favorite?",
    answer: "Central Processing Unit",
    options: ["Art class", "Music class", "Gym class"],
  },
  {
    id: 43,
    question:
      "When you hear a song on the radio, what are you most likely to do?",
    answer: "Central Processing Unit",
    options: [
      "Picture the video that goes along with it",
      "Sing or hum along with the music",
      "Start dancing or tapping your foot",
    ],
  },
  {
    id: 44,
    question: "What do you find most distracting when in class?",
    answer: "Central Processing Unit",
    options: [
      "Lights that are too bright or too dim",
      "Noises from the hallway or outside the building (like traffic or someone cutting the grass)",
      "The temperature being too hot or too cold",
    ],
  },
  {
    id: 45,
    question: "What do you like to do to relax?",
    answer: "Central Processing Unit",
    options: [
      "Read",
      "Listen to music",
      "Exercise (walk, run, play sports, etc.)",
    ],
  },
  {
    id: 46,
    question:
      "What is the best way for you to remember a friend's phone number?",
    answer: "Central Processing Unit",

    options: [
      "Picture the numbers on the phone as you would dial them",
      "Say it out loud over and over and over",
      "Write it down or store it in your phone contact list",
    ],
  },
  {
    id: 47,
    question:
      "If you won a game, which of these three prizes would you choose?",
    answer: "Central Processing Unit",
    options: [
      "A poster for the wall",
      "A music CD or mp3 download",
      "A game of some kind (or a football or soccer ball, etc.)",
    ],
  },
  {
    id: 48,
    question: "Which would you rather go to with a group of friends?",
    answer: "Central Processing Unit",
    options: ["A movie", "A concert", "An amusement park"],
  },
  {
    id: 49,
    question: "What are you most likely to remember about new people you meet?",
    answer: "Central Processing Unit",
    options: [
      "Their face but not their name",
      "Their name but not their face",
      "What you talked about with them",
    ],
  },
  {
    id: 50,
    question:
      "When you give someone directions to your house, what are you most likely to tell them?",
    answer: "Central Processing Unit",
    options: [
      "A description of building and landmarks they will pass on the way",
      "The names of the roads or streets they will be on",
      "Follow me—it will be easier if I just show you how to get there.",
    ],
  },
];

let question_count = 0;
let points = 0;
let apoints = 0;
let vpoints = 0;
let tpoints = 0;
let Max_Questions = 50;

window.onload = function () {
  show(question_count);
  sessionStorage.clear();
};

function next() {
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (
    question_count == 0 ||
    question_count == 2 ||
    question_count == 3 ||
    question_count == 5 ||
    question_count == 6 ||
    question_count == 8 ||
    question_count == 17 ||
    question_count == 23 ||
    question_count == 27 ||
    question_count == 28
  ) {
    console.log("Audi 1");
    if (user_answer == "A lot like me") {
      apoints += 3;
    } else if (user_answer == "Somewhat like me") {
      apoints += 2;
    } else if (user_answer == "Not like me") {
      apoints += 0;
    }
  }
  //////visual///
  else if (
    question_count == 1 ||
    question_count == 12 ||
    question_count == 13 ||
    question_count == 15 ||
    question_count == 19 ||
    question_count == 22 ||
    question_count == 24 ||
    question_count == 25
  ) {
    console.log("visual 1");
    if (user_answer == "A lot like me") {
      vpoints += 3;
    } else if (user_answer == "Somewhat like me") {
      vpoints += 2;
    } else if (user_answer == "Not like me") {
      vpoints += 0;
    }
  } else {
    console.log("Taco 1");
    if (user_answer == "A lot like me") {
      tpoints += 3;
    } else if (user_answer == "Somewhat like me") {
      tpoints += 2;
    } else if (user_answer == "Not like me") {
      tpoints += 0;
    }
  }
  if (question_count >= 29) {
    console.log("heado");
    document.querySelector(".heado").style.display = "none";
  }

  if (
    user_answer === "A book with lots of pictures in it" ||
    user_answer === "Write it down to see if it looks right" ||
    user_answer === "Look around at other clothes on the racks" ||
    user_answer === "Picture a cat in your mind" ||
    user_answer ===
      "Read the book or your notes and review pictures or charts" ||
    user_answer === "Get someone to show you" ||
    user_answer === "The faces of the people who were there" ||
    user_answer === "People walking past you" ||
    user_answer === 'Put on your "mad" face' ||
    user_answer === "Smile from ear to ear" ||
    user_answer ===
      "Look for a map or directory that shows you where everything is" ||
    user_answer === "Art class" ||
    user_answer === "Picture the video that goes along with it" ||
    user_answer === "Lights that are too bright or too dim" ||
    user_answer === "Read" ||
    user_answer === "Picture the numbers on the phone as you would dial them" ||
    user_answer === "A poster for the wall" ||
    user_answer === "A movie" ||
    user_answer === "Their face but not their name" ||
    user_answer ===
      "A description of building and landmarks they will pass on the way"
  ) {
    vpoints += 1;
  }
  if (
    user_answer === "A book with lots of words in it" ||
    user_answer === "Spell it out loud to see if it sounds right" ||
    user_answer === "Talk to the person next to you in line" ||
    user_answer === 'Say the word "cat" to yourself' ||
    user_answer ===
      "Have someone ask you questions that you can answer out loud" ||
    user_answer === "Read about it or listen to someone explain it" ||
    user_answer === "The music that was played" ||
    user_answer === "Loud noises" ||
    user_answer === "Yell and scream" ||
    user_answer === "Talk up a storm" ||
    user_answer === "Ask someone for directions" ||
    user_answer === "Music class" ||
    user_answer === "Sing or hum along with the music" ||
    user_answer ===
      "Noises from the hallway or outside the building (like traffic or someone cutting the grass)" ||
    user_answer === "Listen to music" ||
    user_answer === "Say it out loud over and over and over" ||
    user_answer === "A music CD or mp3 download" ||
    user_answer === "A concert" ||
    user_answer === "Their name but not their face" ||
    user_answer === "The names of the roads or streets they will be on"
  ) {
    apoints += 1;
  }
  if (
    user_answer === "A book with word searches or crossword puzzles" ||
    user_answer === "Trace the letters in the air (finger spelling)" ||
    user_answer === "Fidget or move back and forth" ||
    user_answer ===
      "Think about being with a cat (petting it or hearing it purr)" ||
    user_answer === "Make up index cards that you can review" ||
    user_answer === "Figure it out on your own" ||
    user_answer === "The dance moves you did and the food you ate" ||
    user_answer === "An uncomfortable chair" ||
    user_answer === "Slam doors" ||
    user_answer === "Act really hyper" ||
    user_answer ===
      "Just start walking around until you find what you're looking for" ||
    user_answer === "Gym class" ||
    user_answer === "Start dancing or tapping your foot" ||
    user_answer === "The temperature being too hot or too cold" ||
    user_answer === "Exercise (walk, run, play sports, etc.)" ||
    user_answer === "Write it down or store it in your phone contact list" ||
    user_answer ===
      "A game of some kind (or a football or soccer ball, etc.)" ||
    user_answer === "An amusement park" ||
    user_answer === "What you talked about with them" ||
    user_answer ===
      "Follow me—it will be easier if I just show you how to get there."
  ) {
    tpoints += 1;
  }

  // if (user_answer == questions[question_count].answer) {
  // points += 10;
  // sessionStorage.setItem("points", points);
  //if (user_answer == "A lot like me") {
  //console.log("Audi");
  //apoints += 1;
  //sessionStorage.setItem("apoints", apoints);
  //} else if (user_answer == "Somewhat like me") {
  //vpoints += 1;
  //sessionStorage.setItem("vpoints", vpoints);
  //} else if (user_answer == "Not like me") {
  //tpoints += 1;}

  sessionStorage.setItem("apoints", apoints);
  sessionStorage.setItem("vpoints", vpoints);
  sessionStorage.setItem("tpoints", tpoints);

  //console.log(points);

  question_count++;
  show(question_count);
  toggleActive();

  //Update the progress Bar

  const progressBarFull = document.getElementById("progressBarFull");

  progressBarFull.style.width = ` ${(question_count / Max_Questions) * 100}%`;
}
function show(count) {
  //progress text
  const progressText = document.getElementById("progressText");

  progressText.innerText = `Question ${count + 1}/${Max_Questions}`;

  let question = document.getElementById("questions");
  let [first, second, third] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>

</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
let usertimehide = document.querySelector(".quiz_timer");
usertimehide.style.display = "none";
