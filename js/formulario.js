const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const endereco = document.querySelector("#endereco");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener ("click", () => {
    const cidade = o.querySelector("label").innerHTML;
    selected.innerHTML = cidade;
    optionsContainer.classList.remove("active");

    if(cidade.toUpperCase().startsWith("BELO HORIZONTE")) {
      endereco.textContent = "Rua Macaré, nº 158, Centro"
    }
    if(cidade.toUpperCase().startsWith("FLORIANÓPOLIS")) {
      endereco.textContent = "Rua Macaré, nº 158, Centro"
    }
    if(cidade.toUpperCase().startsWith("RIO DE JANEIRO")) {
      endereco.textContent = "Rua Macaré, nº 158, Centro"
    }
    if(cidade.toUpperCase().startsWith("SÃO PAULO")) {
      endereco.textContent = "Rua Macaré, nº 158, Centro"
    }
    if(cidade.toUpperCase().startsWith("SALVADOR")) {
      endereco.textContent = "Rua Macaré, nº 158, Centro"
    }
    if(cidade.toUpperCase().startsWith("NATAL")) {
      endereco.textContent = "Rua Macaré, nº 158, Centro"
    }
    if(cidade.toUpperCase().startsWith("VITÓRIA")) {
      endereco.textContent = "Rua Macaré, nº 158, Centro"
    }
    if(cidade.toUpperCase().startsWith("CURITIBA")) {
      endereco.textContent = "Rua Macaré, nº 158, Centro"
    }
    if(cidade.toUpperCase().startsWith("GOIÂNIA")) {
      endereco.textContent = "Rua Macaré, nº 158, Centro"
    }
  });
});