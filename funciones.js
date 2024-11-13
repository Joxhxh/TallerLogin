function login() {
    // Credenciales predefinidas
    const validUsername = "admin";
    const validPassword = "1234";

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Elemento para mostrar mensajes
    const message = document.getElementById("message");

    // Verificar credenciales
    if (username === validUsername && password === validPassword) {
        alert("Inicio de sesion exitoso")
    } else {
        alert("Usuario o contraseña incorrectos")
    }
}
