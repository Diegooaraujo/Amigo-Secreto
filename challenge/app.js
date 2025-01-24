//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo(){
    let amigo = document.querySelector('.input-name');
    if (amigo.value == ''){
        alert ('Por favor, insira um nome.');
    }else {
        amigos.push(amigo.value);
        console.log(amigos);
        amigo.value ='';
    }
}