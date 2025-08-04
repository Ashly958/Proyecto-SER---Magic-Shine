function validarNombre() {
    const input = document.getElementById('nombre');
    if (input.value.trim() === '') {
        alert('¡Debes ingresar tu nombre, Ashlycita! 🌺');
        input.focus();
    } else {
        // Si el nombre está lleno, redirige a la otra página
        window.location.href = 'principal.html';
    }
}