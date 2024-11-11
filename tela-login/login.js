document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Validação simples
    if (username === '' || password === '') {
        errorMessage.textContent = 'Por favor, preencha todos os campos.';
        return;
    }

    // Aqui você pode adicionar lógica de autenticação real, por exemplo, via API
    if (username === 'admin' && password === '1234') {
        alert('Login bem-sucedido!');
        errorMessage.textContent = ''; // Limpa a mensagem de erro
        // Redireciona para outra página, se necessário
        window.location.href = 'dashboard.html';  // Exemplo de redirecionamento
    } else {
        errorMessage.textContent = 'Usuário ou senha inválidos.';
    }
});
