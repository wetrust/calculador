import { make, the, inputDate, humanDate } from './wetrust.js'
import { fechas } from './functiones.js'
import { lcn } from './lcn.js'
import { saco } from './saco.js'
import { dbp } from './dbp.js'
import { cc } from './cc.js'
import { ca } from './ca.js'
import { lf } from './lf.js'
import { lh } from './lh.js'
import { cb } from './cb.js'
import { bvm } from './bvm.js'
import { ila } from  './ila.js'
import { pfe } from  './pfe.js'

var activo = "inicio"
var paginas = ["inicio", "examenes"]
var examenes = ["primero", "segundo", "doppler"]

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
    let eg = fechas.eg(_fur, _fexamen)
    the("eg").value = eg
    the("txtEG").innerHTML = eg + "sem"

    //calcular fpp
    let _fpp = fechas.fpp(_fur)

    //set en input y prelude
    the("fpp").value = inputDate(_fpp)
    the("txtFPP").innerText = humanDate(_fpp)
}

the("eg").onchange = function(){
    let _fecha = fechas.toDate(the("fexamen").value)

    the("fur").value = inputDate(fechas.fur(+this.value, _fecha));
    the("fur").onchange()
}

//the("fexamen").onchange = function(){
    //convertir a fecha
//    let _fexamen = fechas.toDate(this.value)
//    let _fur = fechas.toDate(the("fur").value)

//    let eg = fechas.eg(_fur, _fexamen)
//    the("eg").value = eg
//    the("txtEG").innerHTML = eg + "sem"
//}

the("fexamen").onchange =  function(){
    let fum = new Date(); 
    fum.setTime(Date.parse(the("fur").value));
    fum = fum.getTime();
    let fee = new Date();
    fee.setTime(Date.parse(this.value));
    fee = fee.getTime();

    //la fecha de exámen no puede ser anterior a la fecha de última regla
    let diff = fee - fum;

    if (diff > 0){
        let dias = diff/(1000*60*60*24);
        let semanas = Math.trunc(dias / 7);
        dias = Math.trunc(dias - (semanas * 7));
        the("eg").value = semanas;
        the("txtEG").innerHTML = semanas + "sem"
        the("dias").value = dias + " días";
    }
    else{
        the("eg").value = 0;
        the("txtEG").innerHTML = semanas + "sem"
        the("dias").value = 0  + " días";
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

the("goSegundo").onclick = function(){
    the("examenes").classList.add("d-none");
    the("segundo").classList.remove("d-none");
    activo = "segundo"
}

the("goDoppler").onclick = function(){
    the("examenes").classList.add("d-none");
    the("doppler").classList.remove("d-none");
    activo = "doppler"
}


the("back").onclick = function(){
    the(activo).classList.add("d-none");
    
    let examen = examenes.indexOf(activo)

    if (examen != -1){
        activo = "examenes"
    }else{
        let id = paginas.indexOf(activo)
        activo = paginas[id-1]
    }

    the(activo).classList.remove("d-none");
    
    if(activo == "inicio"){
        the("prelude").classList.add("d-none");
    }
}


//primer trimestre
the("lcn").onchange = function(){
    let _lcn = lcn.calcular(this.value)

    the("lcneg").value = _lcn + " semanas"

    if (_lcn > 0){
        //calcular Fur según LCN
        let _fecha = new Date()
        _fecha.setTime(Date.parse(the("fexamen").value))
        //let _fecha = fechas.toDate(the("fexamen").value)

        //calcular la fut con la parte entera del lcn, despues agregar los días
        let _ilcn = Math.trunc(_lcn)
        let _fur = fechas.fur(+_lcn, _fecha);
        _fur.setDate(_fur.getDate() - (_ilcn - _lcn));

        the("furlcn").innerText = humanDate(_fur)
        the("eglcn").innerText = _lcn + " sem"
        the("fpplcn").innerText = humanDate(fechas.fpp(_fur))
        the("lcnf").classList.remove("d-none")
    }else{
        the("lcnf").classList.add("d-none")
    }

    if (this.value > 52) {
        the("dbpPrimero").classList.remove("d-none");
    }
    else{
        the("dbpPrimero").classList.add("d-none");
    }
}

the("saco").onchange = function(){
    let _saco = saco.calcular(this.value)

    the("sacoeg").value = _saco + " semanas"

    if (_saco > 0){
        //calcular Fur según LCN
        let _fecha = new Date()
        _fecha.setTime(Date.parse(the("fexamen").value))
        //let _fecha = fechas.toDate(the("fexamen").value)

        //calcular la fut con la parte entera del lcn, despues agregar los días
        let _isaco = Math.trunc(_saco)
        let _fur = fechas.fur(+_saco, _fecha);
        _fur.setDate(_fur.getDate() - (_isaco - _saco));

        the("fursaco").innerText = humanDate(_fur)
        the("egsaco").innerText = _saco + " sem"
        the("fppsaco").innerText = humanDate(fechas.fpp(_fur))
        the("sacof").classList.remove("d-none")
    }else{
        the("sacof").classList.add("d-none")
    }
}



//Segundo Tercer trimestre
the("dbp").onchange = function(){
    let _dbp = dbp.calcular(the("eg").value, +this.value)

    ajustarProgreso(_dbp, "dbpG")

}

the("cc").onchange = function(){
    let _cc = cc.calcular(the("eg").value, +this.value)

    ajustarProgreso(_cc, "ccG")

    let _pfe = psohdlk(the("cc").value, the("ca").value, the("lf").value) 
    the("pfe").value = _pfe + " gramos"
    the("pfeP").value = pfe.calcular(the("eg").value, _pfe)

}

the("ca").onchange = function(){
    let _ca = ca.calcular(the("eg").value, +this.value)

    ajustarProgreso(_ca, "caG")

    let _pfe = psohdlk(the("cc").value, the("ca").value, the("lf").value) 
    the("pfe").value = _pfe + " gramos"
    the("pfeP").value = pfe.calcular(the("eg").value, _pfe)
}

the("lf").onchange = function(){
    let _lf = lf.calcular(the("eg").value, +this.value)

    ajustarProgreso(_lf, "lfG")

    let _pfe = psohdlk(the("cc").value, the("ca").value, the("lf").value) 
    the("pfe").value = _pfe + " gramos"
    the("pfeP").value = pfe.calcular(the("eg").value, _pfe)
}

the("lh").onchange = function(){
    let _lh = lh.calcular(the("eg").value, +this.value)

    ajustarProgreso(_lh, "lhG")

}

the("cb").onchange = function(){
    let _cb = cb.calcular(the("eg").value, +this.value)

    ajustarProgreso(_cb, "cbG")

}

the("bvm").onchange = function(){
    let _bvm = bvm.calcular(the("eg").value, +this.value)

    ajustarProgreso(_bvm, "bvmG")

}

the("ila").onchange = function(){
    let _ila = ila.calcular(the("eg").value, +this.value)

    ajustarProgreso(_ila, "ilaG")

}
function ajustarProgreso(valor, objeto){
    valor = (valor == "&gt; 99") ? 99 : valor; // si es mayor a 99
    valor = (isNaN(valor)== true) ? 0 : valor;
    valor = valor + "%";
    the(objeto).children[0].style.width = valor
}

function psohdlk(_cc, _ca, _lf) {

    if (isNaN(_cc) || isNaN(_ca) || isNaN(_lf)){
        return 0
    }

    _cc = _cc / 10;
    _ca = _ca / 10;
    _lf = _lf / 10;
    
    let psoP = Math.pow(10, (1.326 + 0.0107 * _cc + 0.0438 * _ca + 0.158 * _lf - 0.00326 * _ca * _lf));

    return (isNaN(psoP) == true) ? 0 : Math.trunc(psoP);

}