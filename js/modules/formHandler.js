// js/modules/formHandler.js

import { validateEmail, validateRequired } from './validation.js';

/**
 * Anexa o listener de submit ao formulário e gerencia a validação.
 */
export function setupFormHandler() {
    const form = document.getElementById('feedback-form');
    if (!form) {
        console.error("Formulário não encontrado.");
        return;
    }

    const formMessage = document.getElementById('form-message');

    // Remove qualquer listener anterior para evitar duplicação em SPAs
    form.removeEventListener('submit', handleSubmit);
    form.addEventListener('submit', handleSubmit);

    function handleSubmit(event) {
        event.preventDefault(); // Impede o envio tradicional
        event.stopPropagation();

        let isFormValid = true;

        // 1. Limpa estados de validação anteriores
        Array.from(form.elements).forEach(element => {
            element.classList.remove('is-invalid');
            element.classList.remove('is-valid');
        });
        formMessage.style.display = 'none';

        // 2. Validação Específica do Email
        const emailInput = document.getElementById('inputEmail');
        if (!validateEmail(emailInput.value)) {
            emailInput.classList.add('is-invalid');
            isFormValid = false;
        } else {
            emailInput.classList.add('is-valid');
        }

        // 3. Validação Geral (Campos Requeridos)
        const requiredInputs = form.querySelectorAll('[required]');
        requiredInputs.forEach(input => {
            let isValid = true;

            // Tratamento para inputs de rádio (precisa de pelo menos um marcado no grupo)
            if (input.type === 'radio' && input.name) {
                 // Verifica se pelo menos um rádio do grupo está marcado
                const radioGroup = form.querySelector(`input[name="${input.name}"]:checked`);
                if (!radioGroup) {
                    // Marca o primeiro rádio do grupo como inválido para feedback
                    form.querySelector(`input[name="${input.name}"]`).classList.add('is-invalid');
                    isFormValid = false;
                    isValid = false;
                } else {
                     form.querySelector(`input[name="${input.name}"]`).classList.add('is-valid');
                }
            } else if (!validateRequired(input.value)) {
                // Validação para outros campos (text, select)
                input.classList.add('is-invalid');
                isFormValid = false;
                isValid = false;
            }

            if (isValid && input.id !== 'inputEmail') {
                 // Adiciona 'is-valid' apenas se passar, e não for o email (já validado)
                input.classList.add('is-valid');
            }
        });

        // 4. Exibir Feedback Final
        if (isFormValid) {
            // Requisito 1: Aparecer a mensagem "formulário enviado"
            formMessage.innerHTML = `
                <div class="alert alert-success" role="alert">
                    <strong>Sucesso!</strong> Formulário enviado. Obrigado pela participação.
                </div>
            `;
            form.reset(); // Limpa o formulário
            // Opcional: remover 'is-valid' após o reset
            Array.from(form.elements).forEach(element => element.classList.remove('is-valid'));
        } else {
            formMessage.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    <strong>Atenção!</strong> Existem erros de preenchimento. Por favor, corrija os campos marcados em vermelho.
                </div>
            `;
        }

        formMessage.style.display = 'block';
    }
}
