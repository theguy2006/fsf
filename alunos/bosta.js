const overlay = document.getElementById("overlay");
const imagemGrande = document.getElementById("imagem-grande");

document.querySelectorAll(".zoomavel").forEach((img) => {
  img.addEventListener("click", () => {
    imagemGrande.src = img.src;
    imagemGrande.alt = img.alt;
    overlay.classList.add("ativo");
  });
});

overlay.addEventListener("click", () => overlay.classList.remove("ativo"));

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") overlay.classList.remove("ativo");
});
