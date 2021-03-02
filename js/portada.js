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

function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
        }
}

function haveDatabase() {
    if (localStorage.mensaje != null) {
        return true;
    }
    return false;
}

function makeDatabase() {
    localStorage["mensaje"] = false
}

function checkDatabase() {
    if (haveDatabase() == false) {
        makeDatabase();
    }
}

var myModal = new bootstrap.Modal(the('myModal'), {keyboard: false})

if (storageAvailable('localStorage')) {
    checkDatabase();

    if (localStorage["mensaje"] == "false") {
        myModal.show()
    }
}

the("modalCerrar").onclick = function(){
    myModal.hide()
    localStorage["mensaje"] = true;
}

