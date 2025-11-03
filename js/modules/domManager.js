


const appContainer = document.getElementById('app-container');


export function renderView(htmlContent) {
    if (appContainer) {
        appContainer.innerHTML = htmlContent;
    } else {
        console.error("Erro: Container #app-container não encontrado.");
    }
}
