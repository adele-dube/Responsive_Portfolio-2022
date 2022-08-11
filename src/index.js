//Function only runs the first time a user visits the page.
//Inspect>application>storage>local storage>delete "visited" to clear cache and run function again

function openingGreeting() {
  let userName = prompt("Hi! What is your name?");

  let greeting = document.querySelector(".h2-heading");
  greeting.innerHTML = `Hi ${userName}! I'm`;

  if (userName == 0 || userName == null) {
    let greeting = document.querySelector(".h2-heading");
    greeting.innerHTML = `Hi!! I'm`;
  }
}

let firstVisit = localStorage.getItem("visited");

if (firstVisit == null) {
  openingGreeting();
  localStorage.setItem("visited", 1);
} else {
  let greeting = document.querySelector(".h2-heading");
  greeting.innerHTML = `Hi!! I'm`;
}

firstVisit();

//Function only runs the first time a user visits the page.
