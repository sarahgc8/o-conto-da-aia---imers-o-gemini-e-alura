function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if(!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar uma palavra.</p>";
        return ;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa a string que irá armazenar o HTML dos resultados.
    let resultados = "";
  
    let titulo = "";
    
    let descricao = "";

    let tags = "";

    // Itera sobre cada resultado da pesquisa e constrói o HTML.
    for (let dado of dados) {
        titulo = dado.titulo ? dado.titulo.toLowerCase() : "";
        descricao = dado.descricao ? dado.descricao.toLowerCase() : "";
        tags = dado.tags ? dado.tags.toLowerCase() : "";

        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `<div class="item-resultado">
        <h2>${dado.titulo}</h2>
    <p class="descricao-meta">${dado.descricao}</p>
    <a href=${dado.link} target="_blank">Mais sobre</a>
    </div>`;
        }
    }

    if(!resultados) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar algo válido.</p>";
        return ;
    }
  
    // Atualiza o conteúdo da seção com os resultados da pesquisa.
    section.innerHTML = resultados;
  }
  