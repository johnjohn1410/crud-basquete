/* eslint-disable no-undef */
let contadorId = 0;
document.querySelector("#botao-carregar").addEventListener("click", () => {
    const nome = document.querySelector("#nome");
    const idade = document.querySelector("#idade");
    const numero = document.querySelector("#numero");
    const altura = document.querySelector("#altura");
    const posicao = document.querySelector("#posicao");
    const pais = document.querySelector("#pais");

    const player = {
        id: contadorId,
        nome: nome.value,
        idade: idade.value,
        numero: numero.value,
        altura: altura.value,
        posicao: posicao.value,
        pais: pais.value
    };
    if (!nome.value || !idade.value || !numero.value || !altura.value || !posicao.value || !pais.value || idade.value <= 15 || altura.value > 250 || altura.value < 150) {
        return;
    }
    salvar(player);
});


function salvar(player) {
    jogador.push(player);
    localStorage.setItem("jogador", JSON.stringify(jogador));
    contadorId++;
    renderTabela();
    window.location.href = "index.html";
}