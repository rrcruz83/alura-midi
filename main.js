const listaDeTeclas = document.querySelectorAll('.tecla');
const listaDeAudios = document.querySelectorAll('audio');

function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

//for ([inicialização]; [condição]; [expressão final]) { declaração }
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    //console.log(tecla);
    const instrumento = tecla.classList[1];
    //console.log(instrumento);

    //Template string `string text ${expression} string text`
    const idAudio = `#som_${instrumento}`;
    
    //console.log(idAudio);

    listaDeTeclas[contador].onclick = function () {
        tocaSom(idAudio);
        console.log('Esse é o som do ' + instrumento.slice(6));//.slice(startIndex[, endIndex])  
    };
}
