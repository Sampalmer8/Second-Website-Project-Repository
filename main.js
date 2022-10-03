// JavaScript Code
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}

// QUIZ JAVASCRIPT
// QUIZ JAVASCRIPT
// QUIZ JAVASCRIPT
// QUIZ JAVASCRIPT
document.getElementById("btn").addEventListener("click", btnClicked);



function btnClicked() {
  // Input
  let question1 = document.getElementById("answer1").toLowerCase();
  let question2 = document.getElementById("answer2").toLowerCase();
  let question3 = document.getElementById("answer3").toLowerCase();
  let question4 = document.getElementById("answer4").toLowerCase();
  let question5 = document.getElementById("answer5").toLowerCase();

  // If statements

  // Process


  // Output
}