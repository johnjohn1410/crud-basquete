/* eslint-disable no-undef */
document.body.addEventListener("click", function (event) {
    if (event.target?.classList.contains("btn-secondary")) {
        const id = event.target.getAttribute("data-id");
        editar(id);
    }

    if (event.target?.classList.contains("btn-danger")) {
        const id = event.target.getAttribute("data-id");
        excluir(id);
    }
});

function editar(id) {
    const editarJogador = JSON.parse(localStorage.getItem("jogador")) || [];
    const index = editarJogador.findIndex(jogador => jogador.id == id);
    const jogador = editarJogador[index];

    document.getElementById("nome").value = jogador.nome;
    document.getElementById("posicao").value = jogador.posicao;
    document.getElementById("numero").value = jogador.numero;
    document.getElementById("idade").value = jogador.idade;
    document.getElementById("altura").value = jogador.altura;
    document.getElementById("pais").value = jogador.pais;

    document.querySelector("#botao-carregar").textContent = "Salvar Alterações";

    document.querySelector("#botao-carregar").onclick = function () {
        const updatedJogador = {
            id: jogador.id,
            nome: document.getElementById("nome").value,
            posicao: document.getElementById("posicao").value,
            numero: document.getElementById("numero").value,
            idade: document.getElementById("idade").value,
            altura: document.getElementById("altura").value,
            pais: document.getElementById("pais").value
        };

    editarJogador[index] = updatedJogador;
    localStorage.setItem("jogador", JSON.stringify(editarJogador));
    renderTabela();
    }
}

function excluir(id) {
    const editarJogador = JSON.parse(localStorage.getItem("jogador")) || [];
    const index = editarJogador.findIndex(jogador => jogador.id == id); 

    if (index !== -1) {
        editarJogador.splice(index, 1);
        localStorage.setItem("jogador", JSON.stringify(editarJogador));
        renderTabela();
        location.reload()
    }
}