import {make, the, inputDate, humanDate} from './wetrust.js'
import {fechas} from './functiones.js'

var activo = "inicio"
var paginas = ["inicio", "examenes", "primero"]


let _fecha = new Date()

the("fexamen").value = inputDate(_fecha)

let _fur = fechas.fur(20, _fecha)
the("fur").value = inputDate(_fur)
the("txtFUM").innerText = humanDate(_fur)

let _fpp = fechas.fpp(_fur)
the("fpp").value = inputDate(_fpp)
the("txtFPP").innerText = humanDate(_fpp)

//cambiar la fur
the("fur").onchange = function(){
    //convertir a fecha
    let _fecha = fechas.toDate(this.value)
    //clonar a prelude
    the("txtFUM").innerText = humanDate(_fecha)

    //calcular fpp
    let _fpp = fechas.fpp(_fecha)

    //set en input y prelude
    the("fpp").value = inputDate(_fpp)
    the("txtFPP").innerText = humanDate(_fpp)
}

the("eg").onchange = function(){
    let _fecha = new Date()
    _fecha.setTime(Date.parse(the("fexamen").value))

    the("fur").value = inputDate(fechas.fur(+this.value, _fecha));
    the("fur").onchange()
}

the("fexamen").onchange = function(){
    let _fexamen = new Date()
    _fexamen.setTime(Date.parse(this.value))
    _fexamen = _fexamen.getTime();

    let _fur = new Date()
    _fur.setTime(Date.parse(the("fur").value))
    _fur = _fur.getTime();

    let diff = _fexamen - _fur;

    if (diff > 0){
        let dias = diff/(1000*60*60*24);
        let semanas = Math.trunc(dias / 7);
        the("eg").value = semanas;
    }
    else{
        the("eg").value = 0;
    }
}

the("goPrelude").onclick = function(){
    the("inicio").classList.add("d-none");
    the("prelude").classList.remove("d-none");
    the("examenes").classList.remove("d-none");
    activo = "examenes"
}

the("goPrimero").onclick = function(){
    the("examenes").classList.add("d-none");
    the("primero").classList.remove("d-none");
    activo = "primero"
}



the("back").onclick = function(){
    the(activo).classList.add("d-none");
    
    let id = paginas.indexOf(activo)
    activo = paginas[id-1]

    the(activo).classList.remove("d-none");
    
    if(activo == "inicio"){
        the("prelude").classList.add("d-none");
    }
}