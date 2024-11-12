const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");

toggle.addEventListener("click", () => {
  nav.ariaHidden = (nav.ariaHidden === "true") ? "false" : "true"; 
  toggle.ariaExpanded = (toggle.ariaExpanded === "false") ? "true" : "false"; 
  
  if (toggle.ariaExpanded === "true") {
    toggle.style.transform = "rotate(90deg)";
  } else {
    toggle.style.transform = "rotate(0deg)";
  }

  document.body.classList.toggle("noscroll", toggle.ariaExpanded === "true");
});