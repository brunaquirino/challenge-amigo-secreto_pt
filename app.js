//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigosSecretos = [];

function adicionarAmigoNaLista(){
    let mensagemSortado = document.getElementById('resultado');
    let amigoSecreto = document.querySelector('input').value;
    
    if(amigoSecreto.trim() == ''){
        alert('Por favor, insira um nome na lista');
    } else{
        listaAmigosSecretos.push(amigoSecreto);
        console.log(listaAmigosSecretos);
        atualizarLista();
        limparCampo();
    }
}

    function atualizarLista(){
        let listaElementos = document.getElementById('resultado');
        listaElementos.innerHTML = '';

        for (i = 0; i < listaAmigosSecretos.length; i++){
            let nomeInserido = document.createElement('li');
            nomeInserido.textContent = listaAmigosSecretos[i];
            listaElementos.appendChild(nomeInserido);
        }
    }


    function limparCampo(){
        amigoSecreto = document.querySelector('input');
        amigoSecreto.value = '';
    }

    function limparLista(){
        listaAmigosSecretos = [];
    }

    function sortearAmigoDaLista() {
        if (listaAmigosSecretos.length === 0) {
            alert('Por favor, insira pelo menos um nome.');
            return;
        }
        
        let numeroDeAmigos = listaAmigosSecretos.length;
        let amigoAleatorio = Math.floor(Math.random() * numeroDeAmigos);
        let amigoSorteado = listaAmigosSecretos[amigoAleatorio];
        let mensagemSorteado = document.getElementById('resultado'); // Alterei o ID aqui para um elemento específico para o sorteio
        mensagemSorteado.innerHTML = 'O amigo sorteado é: ' + amigoSorteado;
        limparLista();
    }
