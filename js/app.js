// js/app.js - Módulo Principal do SPA

import { renderView } from './modules/domManager.js';
import { homeTemplate } from './templates/homeTemplate.js';
// Importaremos o formTemplate e o setupFormHandler mais tarde
// import { formTemplate } from './templates/formTemplate.js';
// import { setupFormHandler } from './modules/formHandler.js';


/**
 * Mapeia as rotas (hashs da URL) para as funções que renderizam o conteúdo.
 */
const routes = {
    '': homeTemplate,           // Se a hash estiver vazia, carrega Home
    'home': homeTemplate,
    // 'formulario': formTemplate, // Descomentar quando o template for criado
    'default': homeTemplate     // Rota padrão para qualquer hash inválida
};

/**
 * Função principal do roteador. Analisa a hash e renderiza a view correspondente.
 */
function router() {
    // 1. Obtém a hash da URL, removendo o '#' e convertendo para minúsculas
    const path = window.location.hash.slice(1).toLowerCase() || 'home';

    // 2. Encontra a função de template na lista de rotas
    const templateFunction = routes[path] || routes.default;

    // 3. Gera o HTML e o renderiza
    const htmlContent = templateFunction();
    renderView(htmlContent);

    // 4. Se for a rota do formulário, deve anexar o manipulador de eventos
    // if (path === 'formulario') {
    //     setupFormHandler(); // Descomentar quando o handler for criado
    // }
}


// --- Inicialização da Aplicação ---

// 1. Executa o roteador na primeira carga da página
router();

// 2. Adiciona um Listener para mudanças na hash (navegação do SPA)
window.addEventListener('hashchange', router);
