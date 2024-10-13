document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const confirmarEmail = document.getElementById("confirmar-email").value;

    if (email !== confirmarEmail) {
      alert("Os emails não correspondem.");
      return;
    }

    alert("Formulário enviado com sucesso!");
    this.submit();
  });