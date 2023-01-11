const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
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
}

