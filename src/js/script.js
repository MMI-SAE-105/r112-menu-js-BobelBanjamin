const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");

toggle.addEventListener("click", () => {
  nav.ariaHidden = (nav.ariaHidden === "true") ? false : true;

  toggle.ariaExpanded = (toggle.ariaExpanded === "false") ? true : false;

  document.body.classList.toggle("noscroll", toggle.ariaExpanded);
});

