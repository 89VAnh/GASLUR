const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Line UI Navbar
const navItems = $$(".nav-items:not(.active)");
const navLine = $(".nav-line");
const navActive = $(".nav-items.active");

const navLineReturn = () => {
  navLine.style.left = navActive.offsetLeft + "px";
  navLine.style.width = navActive.offsetWidth + "px";
};

navLineReturn();

navItems.forEach((item) => {
  item.onmouseover = function () {
    navLine.style.left = this.offsetLeft + "px";
    navLine.style.width = this.offsetWidth + "px";
  };
  item.onmouseleave = function () {
    navLineReturn();
  };
});
