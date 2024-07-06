document.getElementById('show-register').addEventListener('click', function() {
    document.querySelector('.login-form').style.display = 'none';
    document.getElementById('register').style.display = 'block';
});

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'login.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            var messageBox = document.getElementById('login-message');
            
            if (response.success) {
                messageBox.textContent = 'Login bem-sucedido! Redirecionando...';
                messageBox.className = 'message success';
                messageBox.style.display = 'block';
                setTimeout(function() {
                    window.location.href = 'home.html'; // Redireciona para a página de sucesso
                }, 2000);
            } else {
                messageBox.textContent = 'Login falhou! Por favor, tente novamente.';
                messageBox.className = 'message error';
                messageBox.style.display = 'block';
            }
        }
    };
    
    xhr.send('email=' + encodeURIComponent(email) + '&password=' + encodeURIComponent(password));
});

document.getElementById('show-register').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.login-form').style.display = 'none';
    document.getElementById('register').style.display = 'block';
});
