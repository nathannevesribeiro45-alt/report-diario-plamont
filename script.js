// ======================================
// PLAMONT REPORT CENTER
// script.js
// ======================================

// Guarda todas as páginas
const paginas = document.querySelectorAll(".pagina");

// Função para trocar de página
function abrirPagina(idPagina) {

    paginas.forEach(pagina => {
        pagina.classList.remove("ativa");
    });

    const paginaSelecionada = document.getElementById(idPagina);

    if (paginaSelecionada) {
        paginaSelecionada.classList.add("ativa");
    }

    // Volta para o topo da página
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

// Página inicial
document.addEventListener("DOMContentLoaded", () => {
    abrirPagina("dashboard");
});