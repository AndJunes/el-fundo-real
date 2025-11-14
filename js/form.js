document.getElementById("lead-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const phone = document.getElementById("telefono").value.trim();
    const phoneRegex = /^[0-9]{9}$/;

    if (!phoneRegex.test(phone)) {
        alert("Por favor, ingresa un número de celular válido de 9 dígitos.");
        return;
    }

    // Mostrar mensaje de envío
    const statusElement = document.getElementById("form-status");
    statusElement.textContent = "Enviando...";
    statusElement.className = "text-sm text-blue-500 mt-2 text-center";

    // Envío del formulario a Getform
    fetch(this.action, {
        method: "POST",
        body: new FormData(this),
    })
        .then(() => {
        window.location.href = "gracias.html";
        })
        .catch(() => {
        statusElement.textContent = "Hubo un error al enviar la solicitud. Intenta nuevamente.";
        statusElement.className = "text-sm text-red-500 mt-2 text-center";
        });
    });