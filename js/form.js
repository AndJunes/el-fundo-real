document.getElementById("lead-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const phone = document.getElementById("telefono").value.trim();
  const phoneRegex = /^[0-9]{9}$/;

  if (!phoneRegex.test(phone)) {
    alert("Por favor, ingresa un número de celular válido de 9 dígitos.");
    return;
  }

  fetch(this.action, {
    method: "POST",
    body: new FormData(this),
  })
    .then(() => {
      window.location.href = "gracias.html";
    })
    .catch(() => {
      alert("Hubo un error al enviar la solicitud. Intenta nuevamente.");
    });
});