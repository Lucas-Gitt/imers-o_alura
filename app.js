function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById('resultados-pesquisa');

    let campoPesquisa = document.getElementById('campo-pesquisa').value
    console.log(campoPesquisa)

    if (!campoPesquisa) {
        section.innerHTML = "<p>Título não digitado no campo de pesquisa</p>"
        return
    }

    campoPesquisa = campoPesquisa.toUpperCase()
    
    // Inicializa uma string vazia para armazenar os resultados HTML
    let resultados = '';
    let titulo = '';
    let descricao = '';
  
    // Itera sobre cada item de dados e constrói o HTML correspondente
    for (let dado of dados) {
         titulo = dado.titulo.toUpperCase()
         descricao = dado.descricao.toUpperCase()
        if (descricao.includes(campoPesquisa) || titulo.includes(campoPesquisa)){
            // cria um novo elemento
            resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_self">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Compre aqui</a>
        </div>
      `;
        }

      
    }

    if (!resultados) {
        resultados = '<p>Nada foi encontrado</p>'
    }

    // Atualiza o conteúdo HTML da seção com os resultados construídos
    section.innerHTML = resultados;
  }