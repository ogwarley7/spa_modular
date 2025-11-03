// js/templates/formTemplate.js

/**
 * Template JavaScript para a página de Formulário.
 * @returns {string} O HTML do formulário.
 */
export const formTemplate = () => `
    <section class="p-4 border-start border-danger border-5 bg-light mb-4">
        <h2 class="display-6 text-danger">Formulário de Contato e Pesquisa</h2>
        <p class="lead">Preencha as informações. O campo Email exige o '@' para validação.</p>
    </section>

    <form id="feedback-form" class="row g-3 needs-validation" novalidate>

        <div id="form-message" class="col-12" style="display: none;">
            </div>

        <div class="col-md-6">
            <label for="inputEmail" class="form-label">Seu Email *</label>
            <input type="email" class="form-control" id="inputEmail" required>
            <div class="invalid-feedback">
                Por favor, insira um endereço de email válido, contendo o '@'.
            </div>
        </div>

        <div class="col-md-6">
            <label for="inputName" class="form-label">Seu Nome Completo *</label>
            <input type="text" class="form-control" id="inputName" required>
            <div class="invalid-feedback">
                Este campo é obrigatório.
            </div>
        </div>

        <div class="col-md-12">
            <label class="form-label">3. Você prefere café ou chá?</label>
            <div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="pergunta3" id="cafe" value="cafe" required>
                    <label class="form-check-label" for="cafe">Café</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="pergunta3" id="cha" value="cha">
                    <label class="form-check-label" for="cha">Chá</label>
                </div>
            </div>
            <div class="invalid-feedback">
                Selecione uma opção.
            </div>
        </div>

        <div class="col-md-6">
            <label for="inputCidade" class="form-label">4. Em qual cidade você mora?</label>
            <select class="form-select" id="inputCidade" required>
                <option value="">Selecione...</option>
                <option>São Paulo</option>
                <option>Rio de Janeiro</option>
                <option>Outra</option>
            </select>
            <div class="invalid-feedback">
                Selecione sua cidade.
            </div>
        </div>

        <div class="col-md-12">
            <label for="inputFeedback" class="form-label">5. Deixe seu feedback sobre a aplicação:</label>
            <textarea class="form-control" id="inputFeedback" rows="3"></textarea>
        </div>

        <div class="col-12 mt-4">
            <button class="btn btn-danger btn-lg" type="submit">Enviar Formulário</button>
        </div>
    </form>
`;
