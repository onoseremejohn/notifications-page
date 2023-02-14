const sections = document.querySelectorAll(".section");
const markAll = document.querySelector(".head p");
const number = document.querySelector(".head span");
let sectionsList;
let counter;

window.addEventListener("DOMContentLoaded", function () {
  sections.forEach(function (section) {
    section.classList.add("unread");
  });
  sectionsList = [...sections];
  number.textContent = howManyUnread();
});

markAll.addEventListener("click", function (e) {
  sections.forEach(function (section) {
    section.classList.remove("unread");
  });
  zeroNotification();
});

function zeroNotification() {
  markAll.style.color = "black";
  markAll.style.fontWeight = "100";
  number.style.display = "none";
}

function howManyUnread() {
  counter = 0;
  sectionsList = [...sections];
  sectionsList.map(function (section) {
    if (section.classList.contains("unread")) {
      counter++;
    }
  });
  return counter;
}

sections.forEach(function (section) {
  section.addEventListener("click", function () {
    section.classList.remove("unread");
    number.textContent = howManyUnread();
    if (number.textContent == 0) {
      zeroNotification();
    }
  });
});
