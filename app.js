let amigos = [];
let amigo;

function adicionarAmigo() {
    amigo = document.getElementById("amigo").value;

    if (amigo.length == 0) {
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(amigo);
        limparNome();
        console.log(amigos.join(","));
        atualizarLista();
    }
}

function sortearAmigo() {
    if (amigos.length != 0) {
        let indiceSorteado = Math.floor(Math.random() * amigos.length);
        let sorteado = amigos[indiceSorteado];
        let resultado = document.getElementById("resultado");

        resultado.innerHTML = `O amigo secreto sorteado é: ${sorteado}`;
        limparLista();
    } else {
        alert("Adicione um amigo.");
    }
}

function limparNome() {
    document.getElementById("amigo").value = "";
}

function limparLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos = [];
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(function (amigo) {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}