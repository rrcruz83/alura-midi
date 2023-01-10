const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}

listaDeTeclas[0].onclick = tocaSomPom;
