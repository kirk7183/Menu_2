const hamburger = document.querySelector(".hamburger");
const ul = document.querySelector("ul");

hamburger.addEventListener("click", hamburger_click);

function hamburger_click() {
  hamburger.classList.toggle("active");
  ul.classList.toggle("active");
}

var li_Clicked = document.querySelectorAll("li");

[].forEach.call(li_Clicked, function (el) {
  el.addEventListener("click", function () {
    [].forEach.call(li_Clicked, function (click) {
      click.classList.remove("active");
    });
    el.classList.add("active");
  });
});
