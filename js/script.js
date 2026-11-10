
// Seleciona os elementos
const links = document.querySelectorAll("nav a");
const paginas = document.querySelectorAll(".page");

const titulo = document.getElementById("titulo");
const breadcrumb = document.getElementById("breadcrumb");

// Função de navegação
function navegar(pagina) {

    // Verifica se a página existe
    const destino = document.getElementById(pagina);

    if (!destino) return;

    // Esconde todas as páginas
    paginas.forEach(item => {
        item.classList.remove("active");
    });

    // Remove seleção do menu
    links.forEach(link => {
        link.classList.remove("active");
    });

    // Exibe a página selecionada
    destino.classList.add("active");

    // Atualiza o menu
    const linkAtivo = document.querySelector(
        `nav a[data-page="${pagina}"]`
    );

    if (linkAtivo) {
        linkAtivo.classList.add("active");

        // Atualiza título
        titulo.textContent = linkAtivo.textContent.trim();

        // Atualiza breadcrumb
        breadcrumb.innerHTML =
            `Início / <span>${linkAtivo.textContent.trim()}</span>`;
    }
}

// Eventos dos links
links.forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

        const pagina = link.dataset.page;

        navegar(pagina);

        // Atualiza URL
        history.pushState(null, "", `#${pagina}`);
    });

});

// Navegação pelo botão voltar do navegador
window.addEventListener("popstate", () => {

    const pagina = location.hash.replace("#", "") || "inicio";

    navegar(pagina);

});

// Abre a página correspondente ao endereço
const paginaInicial = location.hash.replace("#", "") || "inicio";

navegar(paginaInicial);
