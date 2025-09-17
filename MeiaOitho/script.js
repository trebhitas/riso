// Animação de entrada ao rolar a página
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  observer.observe(section);
});

// Menu hamburguer
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// Fechar menu ao clicar em um item
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("show");
  });
});