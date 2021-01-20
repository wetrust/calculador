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
    let _fur = fechas.toDate(this.value)
    //clonar a prelude
    the("txtFUM").innerText = humanDate(_fur)

    //calcular la eg
    let _fexamen = fechas.toDate(the("fexamen").value)
    the("eg").value = fechas.eg(_fur, _fexamen)

    //calcular fpp
    let _fpp = fechas.fpp(_fur)

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
    //convertir a fecha
    let _fexamen = fechas.toDate(this.value)
    let _fur = fechas.toDate(the("fur").value)

    the("eg").value = fechas.eg(_fur, _fexamen)
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