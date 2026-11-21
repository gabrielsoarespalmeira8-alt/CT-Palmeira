
document.addEventListener("DOMContentLoaded", () => {

    // =====================================
    // ANIMAÇÃO DE ENTRADA DAS SEÇÕES
    // =====================================

    const elementos = document.querySelectorAll(
        ".hero-content, .aulas, .beneficios, .sobre, .contato, .card"
    );

    const observer = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("mostrar");
                observer.unobserve(entrada.target);
            }
        });
    }, {
        threshold: 0.15
    });

    elementos.forEach((elemento) => {
        elemento.classList.add("revelar");
        observer.observe(elemento);
    });


    // =====================================
    // MENU ATIVO
    // =====================================

    const links = document.querySelectorAll(".menu a");
    const secoes = document.querySelectorAll("main section[id]");

    const menuObserver = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                links.forEach((link) => {
                    link.classList.toggle(
                        "ativo",
                        link.getAttribute("href") ===
                        `#${entrada.target.id}`
                    );
                });
            }
        });
    }, {
        threshold: 0.3
    });

    secoes.forEach((secao) => {
        menuObserver.observe(secao);
    });


    // =====================================
    // BOTÃO VOLTAR AO TOPO
    // =====================================

    const voltarTopo = document.createElement("button");

    voltarTopo.innerHTML = "↑";
    voltarTopo.className = "voltar-topo";
    voltarTopo.setAttribute("aria-label", "Voltar ao topo");

    document.body.appendChild(voltarTopo);

    window.addEventListener("scroll", () => {
        voltarTopo.classList.toggle(
            "visivel",
            window.scrollY > 400
        );
    });

    voltarTopo.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });


    // =====================================
    // EFEITO NOS CARDS
    // =====================================

    document.querySelectorAll(".card").forEach((card) => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-8px)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
        });
    });


    // =====================================
    // ANO AUTOMÁTICO NO RODAPÉ
    // =====================================

    const rodape = document.querySelector(".footer p");

    if (rodape) {
        rodape.innerHTML = rodape.innerHTML.replace(
            /2026/,
            new Date().getFullYear()
        );
    }

});
