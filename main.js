const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom (idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log("Elemento não encontrado")
    }  
}

//for ([inicialização]; [condição]; [expressão final]) {declaração}
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
        console.log("Esse é o som do " + instrumento.slice(6))//slice(startIndex[, endIndex])
    }
    
    tecla.onkeydown = function (evento) {
        console.log(evento);
        if (evento.code === 'Enter' || 
            evento.code === 'Space' || 
            evento.code === 'NumpadEnter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}

