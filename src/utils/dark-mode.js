const darkLight = () => {
  const themeToggle = document.querySelectorAll(".toggle__mode");
  //   state
  const theme = localStorage.getItem("theme");
  //   on mount
  theme && document.body.classList.add(theme);
  //   Handler
  const eventHandler = () => {
    document.body.classList.toggle("light-mode");
    document.body.classList.contains("light-mode")
      ? localStorage.setItem("theme", "light-mode")
      : (localStorage.removeItem("theme"),
        document.body.removeAttribute("class"));
  };
  themeToggle.forEach((btn) => btn.addEventListener("click", eventHandler));
};
export default darkLight;
