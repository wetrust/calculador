import {make, the, inputDate} from './wetrust.js'
import {fechas} from './functiones.js'

let _fecha = new Date()
let _fur = fechas.fur(20, _fecha)

the("fexamen").value = inputDate(_fecha)
the("fur").value = inputDate(_fur)
the("fpp").value = inputDate(fechas.fpp(_fur))

the("fur").onchange = function(){
    let _fecha = new Date()
    _fecha.setTime(Date.parse(this.value))

    the("fpp").value = inputDate(fechas.fpp(_fecha))
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