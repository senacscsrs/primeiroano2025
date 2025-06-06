document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const respostas = {
    q1: "b",
    q2: "c",
    q3: "a",
    q4: "d",
    q5: "a",
    q6: "b",
    q7: "d",
    q8: "a",
    q9: "c",
    q10: "b"
  };

  let acertos = 0;

  // Limpa marcas anteriores
  document.querySelectorAll("label").forEach(l => {
    l.classList.remove("resposta-certa");
    const img = l.querySelector("img");
    if (img) img.remove();
  });

  for (const pergunta in respostas) {
    const correta = respostas[pergunta];
    const respostaSelecionada = document.querySelector(`input[name="${pergunta}"]:checked`);
    const labelCerta = document.querySelector(`input[name="${pergunta}"][value="${correta}"]`)?.parentElement;

    if (respostaSelecionada?.value === correta) {
      acertos++;
    }

    if (labelCerta && !labelCerta.classList.contains("resposta-certa")) {
      labelCerta.classList.add("resposta-certa");

      const check = document.createElement("img");
      check.src = "check.png";
      check.alt = "Certo";
      labelCerta.appendChild(check);
    }
  }

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `🎯 Você acertou <strong>${acertos}</strong> de 10!`;
  resultado.style.display = "block";
  resultado.style.opacity = 0;
  setTimeout(() => resultado.style.opacity = 1, 100);
});
document.getElementById("resetButton").addEventListener("click", function () {
  document.getElementById("quizForm").reset();
  document.getElementById("resultado").style.display = "none";
  document.querySelectorAll("label").forEach(l => {
    l.classList.remove("resposta-certa");
    const img = l.querySelector("img");
    if (img) img.remove();
  });
});