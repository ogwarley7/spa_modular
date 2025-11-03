// js/templates/homeTemplate.js (Atualizado)

/**
 * Template JavaScript para a página Home.
 * @returns {string} O HTML da página Home.
 */
export const homeTemplate = () => `
    <section class="p-4 border-start border-primary border-5 bg-light mb-4">
        <h2 class="display-5 text-primary">Bem-vindo(a) ao Projeto SPA!</h2>
        <p class="lead">Esta aplicação demonstra a manipulação de DOM e o conceito de Single Page Application (SPA) usando JavaScript modular.</p>
    </section>

    <div class="text-center mt-5">
        <a href="#formulario" class="btn btn-lg btn-success">Ir para o Formulário</a> 
    </div>
`;
// Note: O link original que você me passou estava como 'form', 
// mas o roteador espera 'formulario'. O código acima já usa '#formulario'.
