let jogador = [];

window.addEventListener("load", () => {
    jogador = JSON.parse(localStorage.getItem("jogador")) || [];
    renderTabela();
});

function renderTabela() {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";

    jogador.forEach(player => {
        const tr = document.createElement("tr");
        tr.setAttribute("id", "player-" + player.id);

        const tdNome = document.createElement("td");
        const tdIdade = document.createElement("td");
        const tdNumero = document.createElement("td");
        const tdAltura = document.createElement("td");
        const tdPosicao = document.createElement("td");
        
        tdNome.textContent = player.nome;
        tdIdade.textContent = player.idade;
        tdNumero.textContent = player.numero;
        tdAltura.textContent = player.altura + " cm";
        tdPosicao.textContent = player.posicao;

        const tdPais = document.createElement("td");
        let bandeira = document.createElement("img");
        bandeira.src = 'https://api.flagdb.com/flag/'+ player.pais;
        bandeira.setAttribute('title', player.pais);
        
        const tdBotoes = document.createElement("td");
        tdBotoes.classList.add("botoes")
        const btnEditar = document.createElement("button");
        btnEditar.classList.add("btn");
        btnEditar.classList.add("btn-secondary");
        btnEditar.setAttribute("data-id", player.id);
        btnEditar.innerHTML = '<i class="fa-solid fa-pencil" style="color: #ffffff;"></i>'
        btnEditar.setAttribute("title", "Editar");
        
        const btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Excluir";
        btnExcluir.classList.add("btn");
        btnExcluir.classList.add("btn-danger");
        btnExcluir.setAttribute("data-id", player.id);
        btnExcluir.setAttribute("title", "Excluir");
        btnExcluir.innerHTML = '<i class="fa-solid fa-trash" style="color: #ffffff;"></i>'

        
        tdBotoes.appendChild(btnEditar);
        tdBotoes.appendChild(btnExcluir);
        tdPais.appendChild(bandeira);
        tr.appendChild(tdNome);
        tr.appendChild(tdIdade);
        tr.appendChild(tdPosicao);
        tr.appendChild(tdNumero);
        tr.appendChild(tdAltura);
        tr.appendChild(tdPais);
        tr.appendChild(tdBotoes);

        tbody.appendChild(tr);
    });
}


