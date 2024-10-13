document
  .getElementById("register-link")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const apiKey =
      "fce5678c92c34d1de90fb82545cb934201700d1278c691b453397daeff7883ee";

    fetch("https://api.mailslurp.com/inboxes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.emailAddress) {
          const tempEmail = data.emailAddress;

          alert(`Email temporário criado: ${tempEmail}`);

          document.body.insertAdjacentHTML(
            "beforeend",
            `<p>Email temporário: ${tempEmail}</p>`
          );
        } else {
          alert("Erro ao criar email temporário.");
        }
      })
      .catch((error) => {
        console.error("Erro ao criar email temporário:", error);
      });
  });