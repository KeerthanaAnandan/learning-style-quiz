const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");

let questions = [
  {
    id: 1,
    question: "I enjoy participating in classroom discussions and debates.",
    answer: "Random Access Memory",
    options: ["A lot like me", "Somewhat like me", "Not like me"],
  },
  {
    id: 2,
    question: "I try to remember information by picturing it in my mind.",
    answer: "Central Processing Unit",
    options: ["A lot like me", "Somewhat like me", "Not like me"],
  },
  {
    id: 3,
    question: "My best school subjects are English and foreign languages",
    answer: "Central Processing Unit",
    options: ["A lot like me", "Somewhat like me", "Not like me"],
  },
  {
    id: 4,
    question: "I sound words out when I am trying to learn to spell them.",
    answer: "Central Processing Unit",
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
    answer: "Central Processing Unit",
    options: ["A lot like me", "Somewhat like me", "Not like me"],
  },
  {
    id: 7,
    question: "I create songs and jingles to remember information.",
    answer: "Central Processing Unit",
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
    answer: "Central Processing Unit",
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
    answer: "Central Processing Unit",
    options: ["A lot like me", "Somewhat like me", "Not like me"],
  },
  {
    id: 14,
    question: "I am good at drawing things.",
    answer: "Central Processing Unit",
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
    answer: "Central Processing Unit",
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
    answer: "Central Processing Unit",
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
    answer: "Central Processing Unit",
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
    answer: "Central Processing Unit",
    options: ["A lot like me", "Somewhat like me", "Not like me"],
  },
  {
    id: 24,
    question: " I prefer teachers who spend a lot of time explaining things.",
    answer: "Central Processing Unit",
    options: ["A lot like me", "Somewhat like me", "Not like me"],
  },
  {
    id: 25,
    question:
      "When I take a test, I can see the answer in my head the way it appeared in my notes or textbook",
    answer: "Central Processing Unit",
    options: ["A lot like me", "Somewhat like me", "Not like me"],
  },
  {
    id: 26,
    question: "I use pictures, arrows, and other symbols when I take notes.",
    answer: "Central Processing Unit",
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
    answer: "Central Processing Unit",
    options: ["A lot like me", "Somewhat like me", "Not like me"],
  },
  {
    id: 29,
    question: "I remember things I hear better than things I see.",
    answer: "Central Processing Unit",
    options: ["A lot like me", "Somewhat like me", "Not like me"],
  },
  {
    id: 30,
    question: "I am good at designing graphs, charts, and diagrams.",
    answer: "Central Processing Unit",
    options: ["A lot like me", "Somewhat like me", "Not like me"],
  },
];

let question_count = 0;
let points = 0;
let apoints = 0;
let vpoints = 0;
let tpoints = 0;
let Max_Questions = 30;

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
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  } else if (user_answer == "A lot like me") {
    console.log("Audi");
    apoints += 1;
    sessionStorage.setItem("apoints", apoints);
  } else if (user_answer == "Somewhat like me") {
    vpoints += 1;
    sessionStorage.setItem("vpoints", vpoints);
  } else if (user_answer == "Not like me") {
    tpoints += 1;

    sessionStorage.setItem("tpoints", tpoints);
  }
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
