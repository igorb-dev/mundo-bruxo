function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    let campoHeader = document.getElementById("header")

    if (!campoPesquisa) {
        campoHeader.classList.remove('header-style-two');
        campoHeader.classList.add('header-style-one');
        section.classList.add('empt');
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let nome = ""; 
    let casa = "";
    let familia = "";

    if (campoPesquisa) {
        campoHeader.classList.remove('header-style-one');
        section.classList.remove('empt');
        campoHeader.classList.add('header-style-two');

        for (let dado of dados) {
            nome = dado.nome.toLowerCase()
            casa = dado.casa.toLowerCase()
            familia = dado.familia.toLowerCase()

            if (nome.includes(campoPesquisa) || casa.includes(campoPesquisa) || familia.includes(campoPesquisa)) {

                resultados += `
                <div class="item-resultado">
                    <div class="container-img">
                        <img src=${dado.imagem} alt=${dado.nome}>
                    </div>
                    <div class="container-dados">
                        <h2>${dado.nome}</h2>
                        <p>Família: ${dado.familia}</p>
                        <p class="descricao-meta">${dado.descricao}</p>
                        <p>Idade: ${dado.idade}</p>
                        <p>Casa: ${dado.casa}</p>
                    </div>
                </div>
            `;
            }
        }
    }

    if (!resultados) {
        resultados = `<p class="busca-vazia">Nada foi encontrado</p>`
    }

    section.innerHTML = resultados;
}