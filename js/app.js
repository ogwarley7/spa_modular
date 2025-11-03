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
// ... (imports) ...

function router() {
    // 1. Obtém a hash da URL
    const path = window.location.hash.slice(1).toLowerCase() || 'home';

    // 2. Encontra a função de template (aqui ele procura por 'formulario')
    const templateFunction = routes[path] || routes.default;

    // 3. Gera o HTML e o renderiza
    const htmlContent = templateFunction();
    renderView(htmlContent);

    // 4. Se for a rota do formulário, deve anexar o manipulador de eventos
    if (path === 'formulario') {
        setupFormHandler();
    }
}

// ... (Inicialização) ...

// **CRUCIAL: Este listener garante que a função router() é chamada toda vez que o hash muda**
window.addEventListener('hashchange', router);
}


// --- Inicialização da Aplicação ---

router();
window.addEventListener('hashchange', router);
