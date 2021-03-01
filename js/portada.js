import { make, the, inputDate, humanDate } from './wetrust.js'

the("continuarDos").onclick = function(){
    the("portada").classList.add("d-none");
    the("dos").classList.remove("d-none");
}

the("continuarTres").onclick = function(){
    the("dos").classList.add("d-none");
    the("tres").classList.remove("d-none");
}

the("continuarCuatro").onclick = function(){
    window.location.href = 'app.html';
}

the("saltar").onclick = function(){
    window.location.href = 'app.html';
}