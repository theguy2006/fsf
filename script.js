
document.addEventListener("DOMContentLoaded", () => {

    const elementos = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("ativo");
                observer.unobserve(entry.target);
            }

        });
    });

    elementos.forEach(elemento => {
        observer.observe(elemento);
    });

});
