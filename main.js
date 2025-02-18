// Encontra o elemento com o id "app" no HTML e o armazena na variável "app"
const app = document.getElementById("app")

// Função responsável por definir a ação do formulário
const formAction = () => {
    // Encontra o formulário com o id "form" e o armazena na variável "form"
    const form = document.getElementById("form")
    
    // Define o que acontece quando o formulário é enviado
    form.onsubmit = (event) => {
        event.preventDefault() // Impede o comportamento padrão de envio do formulário (não recarrega a página)
        alert('oi') // Exibe um alerta com a mensagem 'oi'
    }
}

// Função principal que inicializa o aplicativo
const startApp = () => {
    // Cria o conteúdo HTML do formulário como uma string
    const content = `
    <form id="form">
        <input type="email" name="email" placeholder="E-mail">
        <input type="text" name="phone" placeholder="Telefone">
        <button>
            Confirmar
        </button>
    </form>
    `
    
    // Insere o conteúdo HTML gerado dentro da div com o id "app"
    app.innerHTML = content 
    
    // Chama a função formAction para adicionar o comportamento de envio ao formulário
    formAction()
}

// Chama a função startApp para iniciar o aplicativo
startApp()
