let user_name = sessionStorage.getItem("name");
let user_points = sessionStorage.getItem("points");
let user_apoints = sessionStorage.getItem("apoints");
let user_vpoints = sessionStorage.getItem("vpoints");
let user_tpoints = sessionStorage.getItem("tpoints");
let user_time = sessionStorage.getItem("time");
let audi = document.querySelector(".audi");
let visco = document.querySelector(".vis");
let taco = document.querySelector(".tac");
let typeshere = document.querySelector("span.typehere");
let audiexp = document.querySelector(".audiexp");
let viscoexp = document.querySelector(".viscoexp");
let tacoexp = document.querySelector(".tacoexp");
///hide timer
document.querySelector(".usertime").style.display = "none";
//////coding logic
let apo = Math.round(user_apoints);
let vpo = Math.round(user_vpoints);
let tpo = Math.round(user_tpoints);

document.querySelector("span.points").innerHTML = user_points;
document.querySelector("span.apoints").innerHTML = apo + "%";
document.querySelector("span.vpoints").innerHTML = vpo + "%";
document.querySelector("span.tpoints").innerHTML = tpo + "%";
console.log("end page");
console.log(user_points);
console.log(user_apoints);
console.log(user_vpoints);
console.log(user_tpoints);
audiexp.style.display = "none";
viscoexp.style.display = "none";
tacoexp.style.display = "none";

if (apo > vpo && apo > tpo) {
  typeshere.innerHTML = "Auditory";
  //console.group("audi");
  audiexp.style.display = "block";
  //document.querySelector(".wordshere").innerHTML = "bitch you are audi";
} else if (vpo > apo && vpo > tpo) {
  typeshere.innerHTML = "Visual";
  //console.group("visu");
  viscoexp.style.display = "block";
  // document.querySelector(".wordshere").innerHTML = "bitch you are v";
} else if (tpo > apo && tpo > vpo) {
  typeshere.innerHTML = "Tactile/Kinesthetic";
  //console.group("tac");
  tacoexp.style.display = "block";
  // document.querySelector(".wordshere").innerHTML = "bitch you are tacos";
} else if (apo === vpo && apo > tpo) {
  typeshere.innerHTML = "Auditory or Visual";
  //audiexp.style.display = "block";
  viscoexp.style.display = "block";
} else if (tpo === vpo && apo < tpo) {
  typeshere.innerHTML = "Tactile or Visual";
  tacoexp.style.display = "block";
  //viscoexp.style.display = "block";
} else if (apo === tpo && tpo > vpo) {
  typeshere.innerHTML = "Auditory or Tactile";
  audiexp.style.display = "block";
  // tacoexp.style.display = "block";
}

sessionStorage.clear();
