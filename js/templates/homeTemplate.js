// js/templates/homeTemplate.js

/**
 * Template JavaScript para a página Home.
 * @returns {string} O HTML da página Home.
 */
export const homeTemplate = () => `
    <section class="p-4 border-start border-primary border-5 bg-light mb-4">
        <h2 class="display-5 text-primary">Bem-vindo(a) ao Projeto SPA!</h2>
        <p class="lead">Esta aplicação demonstra a manipulação de DOM e o conceito de Single Page Application (SPA) usando JavaScript modular.</p>
    </section>

    <div class="row g-4">
        <div class="col-md-6">
            <div class="card h-100 shadow-sm">
                <div class="card-body">
                    <h5 class="card-title text-success">Manipulação do DOM</h5>
                    <p class="card-text">O conteúdo da página é totalmente injetado e atualizado pelo JavaScript, sem recarregar a página.</p>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card h-100 shadow-sm">
                <div class="card-body">
                    <h5 class="card-title text-danger">Validação de Formulário</h5>
                    <p class="card-text">Confira o formulário para ver o sistema de validação de dados em ação com feedback ao usuário.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="text-center mt-5">
        <a href="#formulario" class="btn btn-lg btn-success">Ir para o Formulário</a>
    </div>
`;
