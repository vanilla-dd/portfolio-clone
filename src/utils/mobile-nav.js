const mobileNav = () => {
  const bars = document.querySelector(".header__hamburger");
  const mobNav = document.querySelector(".mobile-nav");
  const mobLinks = document.querySelectorAll(".mobile-nav__link");
  // state
  let isOpen = false;
  bars.addEventListener("click", () => {
    isOpen = !isOpen;
    if (isOpen) {
      mobNav.style.display = "flex";
      document.body.style.overflowY = "hidden";
    } else {
      mobNav.style.display = "none";
      document.body.style.overflowY = "auto";
    }
  });
  mobLinks.forEach((link) => {
    link.addEventListener("click", () => {
      isOpen = false;
      mobNav.style.display = "none";
      document.body.style.overflowY = "auto";
    });
  });
};
export default mobileNav;
