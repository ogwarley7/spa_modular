// js/modules/validation.js

/**
 * Módulo de Validação de Dados.
 */

/**
 * Verifica se um valor está presente (não vazio).
 * @param {string} value O valor do campo de input.
 * @returns {boolean} True se o valor não estiver vazio, False caso contrário.
 */
export function validateRequired(value) {
    return value && value.trim() !== '';
}

/**
 * Verifica se o campo de email contém o caractere '@'.
 * @param {string} email O valor do campo de email.
 * @returns {boolean} True se contiver '@', False caso contrário.
 */
export function validateEmail(email) {
    if (!validateRequired(email)) {
        return false;
    }
    // Verifica a regra específica do seu projeto: presença do '@'
    return email.includes('@');
}
