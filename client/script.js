const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#nav__menu");

hamburger.addEventListener("click", () => {
	menu.classList.toggle("open-menu");
});

// Footer year update
const footerYear = document.querySelector("#year");
const year = new Date().getFullYear();
footerYear.textContent = `© ${year}`;
