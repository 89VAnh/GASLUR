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

//UI Menu Header
const headerMenu = $(".header-menu");
const moreMenu = $(".more-menu");
const overlay = $(".overlay");
const moreClose = $(".more-close svg");

headerMenu.onclick = function () {
  overlay.classList.add("active");
  moreMenu.style.right = "0px";
};

const closeMoreMenu = () => {
  overlay.classList.remove("active");
  moreMenu.style.right = "-100%";
};

moreClose.onclick = closeMoreMenu;
overlay.onclick = closeMoreMenu;
