const menuToggle = document.querySelector(".menu_toggle");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    nav.classList.toggle("active");

    const menuAberto = nav.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", menuAberto);
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
    });
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        nav.classList.remove("active");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
    }
});

const contatoForm = document.querySelector("#contato-form");
const formMensagem = document.querySelector(".form_mensagem");

contatoForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const dadosFormulario = new FormData(contatoForm);

    try {
        const resposta = await fetch(contatoForm.action, {
            method: "POST",
            body: dadosFormulario,
            headers: {
                Accept: "application/json"
            }
        });

        if (resposta.ok) {
            formMensagem.textContent = "Mensagem enviada com sucesso!";
            contatoForm.reset();
        } else {
            formMensagem.textContent = "Não foi possível enviar a mensagem. Tente novamente.";
        }
    } catch (erro) {
        formMensagem.textContent = "Ocorreu um erro ao enviar a mensagem. Tente novamente.";
    }
});
