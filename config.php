<?php
$host = "localhost"; // Host do banco de dados
$usuario = "seu_usuario"; // Usuário do banco de dados
$senha = "sua_senha"; // Senha do banco de dados
$banco = "MinerGeek"; // Nome do banco de dados

// Conectar ao banco de dados
$conn = new mysqli($host, $usuario, $senha, $banco);

// Verificar conexão
if ($conn->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conn->connect_error);
}
?>
