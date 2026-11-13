const WHATSAPP_NUMBER = "5533999185095";

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");

function closeMenu({ returnFocus = false } = {}) {
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Abrir menu");
  navigation.classList.remove("is-open");
  if (returnFocus) menuButton.focus();
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  navigation.classList.toggle("is-open", isOpen);
});

navigation.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => closeMenu());
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
    closeMenu({ returnFocus: true });
  }
});

document.querySelector("#quoteForm").addEventListener("submit", event => {
  event.preventDefault();

  const data = new FormData(event.currentTarget);
  const message = [
    "Olá! Gostaria de solicitar um orçamento.",
    "",
    `Nome: ${data.get("nome")}`,
    `Telefone: ${data.get("telefone")}`,
    `Origem: ${data.get("origem")}`,
    `Destino: ${data.get("destino")}`,
    `Tipo de serviço: ${data.get("servico")}`,
    `Data prevista: ${data.get("data") || "Não informada"}`
  ].join("\n");

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});
