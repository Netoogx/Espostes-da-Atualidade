function pesquisar() {
  // Obtém a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisas");
 
  let campoPesquisa = document.getElementById("campo-pesquisa").value

  // se campoPesquisa se for uma string sem nada
  if (!campoPesquisa) {
      section.innerHTML = "<p>Nada foi encontrado. Você presisa digitou o nome do esporte</p>"
      return
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada dado na lista de dados
  for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()

      // se titulo includes campoPesquisa
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

        // Cria uma novo elemento 
        resultados += `
        <div class="item-resultado h2">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>`;
      } 
  }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }


  // Atribui o HTML gerado à seção de resultados
  section.innerHTML = resultados;
  
}