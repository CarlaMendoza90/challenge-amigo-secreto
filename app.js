// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const nombres = []

function agregarAmigo(){
    amigo = document.getElementById("amigo")
    nombres.push(amigo.value);

    mostrarAmigoEnLista(amigo.value);

    amigo.value = "";
}

function mostrarAmigoEnLista(amigo){
    var ul = document.getElementById("listaAmigos");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(amigo));
    ul.appendChild(li);
}

function sortearAmigo(){
    const nombreRandom = nombres[Math.floor(Math.random() * nombres.length)];
    mostrarGanador(nombreRandom);
}

function mostrarGanador(ganador){
    var ul = document.getElementById("resultado");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(ganador));
    ul.appendChild(li);
}
