function pesquisar() {
  // Obtém os elementos HTML relevantes da página
  let section = document.getElementById("resultados-pesquisa"); // Seção onde os resultados serão exibidos
  let campoPesquisa = document.getElementById("campo-pesquisa").value; // Valor do campo de pesquisa
  let campoHeader = document.getElementById("header"); // Elemento de cabeçalho

  // Verifica se o usuário inseriu algum termo para pesquisa
  if (!campoPesquisa) {
    // Se não houver termo, remove a classe de estilo para resultados e adiciona a classe para resultados vazios
    campoHeader.classList.remove('header-style-two');
    campoHeader.classList.add('header-style-one');
    section.classList.add('empt');
  } else {
    // Se houver termo, remove a classe para resultados vazios e adiciona a classe de estilo para resultados
    campoHeader.classList.remove('header-style-one');
    section.classList.remove('empt');
    campoHeader.classList.add('header-style-two');

    // Inicializa a string para armazenar os resultados
    let resultados = "";

    // Itera sobre os dados e busca por correspondências
    for (let dado of dados) {
      // Normaliza os dados para comparação (converte para minúsculas)
      let nome = dado.nome.toLowerCase();
      let casa = dado.casa.toLowerCase();
      let familia = dado.familia.toLowerCase();

      // Verifica se o termo de pesquisa está presente em algum dos campos
      if (nome.includes(campoPesquisa) || casa.includes(campoPesquisa) || familia.includes(campoPesquisa)) {
        // Cria o HTML para um resultado e adiciona à string de resultados
        resultados += `
          <div class="item-resultado">
            </div>
        `;
      }
    }

    // Verifica se foram encontrados resultados
    if (!resultados) {
      // Se não houver resultados, cria uma mensagem de erro
      resultados = `<p class="busca-vazia">Nada foi encontrado</p>`;
    }

    // Atualiza o conteúdo da seção de resultados com os resultados encontrados ou a mensagem de erro
    section.innerHTML = resultados;
  }
}
