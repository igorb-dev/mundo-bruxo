# Mundo Bruxo - Busca de Personagens

Este projeto é uma aplicação de pesquisa que permite buscar informações de personagens, exibindo detalhes como nome, família, idade e casa. A interface exibe os resultados dinamicamente conforme a pesquisa é realizada, e caso nenhum resultado seja encontrado, uma mensagem informando a ausência de correspondências é exibida.

## Funcionalidades

- Busca dinâmica de personagens por nome, casa ou família.
- Exibição dos resultados com nome, imagem, descrição, família, idade e casa.
- Mensagem de erro amigável quando nenhum resultado é encontrado.

## Tecnologias Utilizadas

- **HTML**: Estrutura da página.
- **JavaScript**: Manipulação do DOM e lógica de pesquisa.
- **CSS**: Estilização da página (não fornecido no exemplo, mas presumido).

## Estrutura do Código

### HTML

O HTML define a estrutura da página, incluindo um campo de pesquisa e uma seção para exibir os resultados. O cabeçalho muda dinamicamente dependendo da existência ou não de uma pesquisa.

### JavaScript

O JavaScript manipula o DOM para controlar a exibição dos resultados da pesquisa. A função `pesquisar()` faz o seguinte:

1. Obtém o valor do campo de pesquisa e transforma o texto em letras minúsculas.
2. Compara o valor inserido com os dados disponíveis, verificando se o nome, a casa ou a família do personagem coincidem com a pesquisa.
3. Exibe os resultados correspondentes ou uma mensagem de erro se nenhum resultado for encontrado.

### Exemplo de Uso

1. Insira o termo de pesquisa no campo de busca.
2. A página exibirá os personagens que correspondem ao termo inserido, mostrando informações como nome, idade, casa e família.
3. Caso nada seja encontrado, uma mensagem "Nada foi encontrado" será exibida.

## Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-projeto.git
