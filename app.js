function verificarNumero() {
  let numero = document.getElementById("numero").value;
  let resultado = document.getElementById("resultado");

  // Verifica se o valor inserido é um número
  if (isNaN(numero) || numero === "") {
    resultado.textContent = "Por favor, digite um número válido.";
    resultado.style.color = "red";
  } else if (numero % 2 === 0) {
    resultado.textContent = "O número " + numero + " é par.";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "O número " + numero + " é ímpar.";
    resultado.style.color = "red";
  }
}
