// js/app.js - Módulo Principal do SPA (Atualizado)

import { renderView } from './modules/domManager.js';
import { homeTemplate } from './templates/homeTemplate.js';
import { formTemplate } from './templates/formTemplate.js'; // NOVO
import { setupFormHandler } from './modules/formHandler.js'; // NOVO


/**
 * Mapeia as rotas (hashs da URL) para as funções que renderizam o conteúdo.
 */
const routes = {
    '': homeTemplate,
    'home': homeTemplate,
    'formulario': formTemplate, // NOVA ROTA
    'default': homeTemplate
};

/**
 * Função principal do roteador. Analisa a hash e renderiza a view correspondente.
 */
function router() {
    const path = window.location.hash.slice(1).toLowerCase() || 'home';

    const templateFunction = routes[path] || routes.default;

    const htmlContent = templateFunction();
    renderView(htmlContent);

    // CHAMA O HANDLER SÓ DEPOIS DE INJETAR O HTML DO FORMULÁRIO
    if (path === 'formulario') {
        setupFormHandler(); // ANEXA O LISTENER DE SUBMIT
    }
}


// --- Inicialização da Aplicação ---

router();
window.addEventListener('hashchange', router);
