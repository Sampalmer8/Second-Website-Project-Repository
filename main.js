// JavaScript Code
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// QUIZ JAVASCRIPT
// QUIZ JAVASCRIPT
// QUIZ JAVASCRIPT
// QUIZ JAVASCRIPT
document.getElementById("btn").addEventListener("click", btnClicked);

let score = 0;

function btnClicked() {
  score = 0;
  let question1 = document.getElementById("answer1").value.toLowerCase();
  let question2 = document.getElementById("answer2").value.toLowerCase();
  let question3 = document.getElementById("answer3").value.toLowerCase();
  let question4 = document.getElementById("answer4").value.toLowerCase();
  let question5 = document.getElementById("answer5").value.toLowerCase();
  // If statements
  if (
    question1 === "cpu" ||
    question1 === "processor" ||
    question1 === "central processing unit"
  ) {
    score++;
  }
  if (question2 === "nvidia") {
    score++;
  }
  if (question3 === "random access memory") {
    score++;
  }
  if (question4 === "motherboard") {
    score++;
  }
  if (question5 === "ghz" || question5 === "gigahertz") {
    score++;
  }

  // Output
  document.getElementById("score").innerHTML = score;
  document.getElementById("percentage").innerHTML = (score / 5) * 100;
}
