import { the } from "./wetrust.js";

document.getElementById("informeCrecimiento").onclick = function(){
    construirInformeCrecimiento()

    if (window.webkit != undefined){
        if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.toggleMessageHandler) {
            window.webkit.messageHandlers.toggleMessageHandler.postMessage({
                "message": "print"
            });
        }
    } else if (typeof app != 'undefined'){ 
        app.imprimir()
    }else{
        window.print()
    }
}

function construirInformeCrecimiento(){

    let contenido = '<p><small>PROTOCOLO ECOGRÁFICO<br>UNIDAD DE URGENCIA<br>GINECO / OBSTETRICA</small></p><h1 class="text-center border-bottom h5 pb-3" id="impresionTitulo">Evaluación ecográfica del crecimiento fetal</h1><div class="row"><div class="col-6"><p class="mb-0"><small>Nombre: <span id="impresionNombrePaciente"></span></small></p></div><div class="col-6"><p class="mb-0"><small>Fecha exámen: <span id="impresionFechaExamen"></span></small></p></div><div class="col-6"><p><small>FUR: <span id="impresionFUR"></span></small></p></div><div class="col-6"><p><small>Edad Gestacional: <span id="impresionEdadGestacional"></span></small></p></div></div><p class="mb-2">DESCRIPCIÓN</p><div class="row"><div class="col-6"><p class="mb-0"><small>Placenta normo insertada: <span id="impresionPlacenta"></span></small></p></div><div class="col-6"><p class="mb-0"><small>Líquido amniótico: <span id="impresionLiquido"></span></small></p></div><div class="col-6"><p><small>Feto: <span id="impresionFeto"></span></small></p></div><div class="col-6"><p><small>FCF: <span id="impresionFCF"></span> x min.</small></p></div></div><p class="mb-2">BIOMETRÍAS</p><div class="row border-bottom pb-3"><div class="col-4"><p class="mb-0"><small>Medida</small></p></div><div class="col-4"><p class="mb-0">Gráfica</p></div><div class="col-4"><p class="mb-0"><small>Percentil</small></p></div><div class="col-4"><p class="mb-0"><small>DBP: <span id="impresionDBP"></span></small></p></div><div class="col-4"><p class="mb-0" id=""></p></div><div class="col-4"><p class="mb-0"><small>Pct: <span id="impresionDBPPCT"></span></small></p></div><div class="col-4"><p class="mb-0"><small>CC: <span id="impresionCC"></span></small></p></div><div class="col-4"><p class="mb-0" id=""></p></div><div class="col-4"><p class="mb-0"><small>Pct: <span id="impresionCCPCT"></span></small></p></div><div class="col-4"><p class="mb-0"><small>CA: <span id="impresionCA"></span></small></p></div><div class="col-4"><p class="mb-0" id=""></p></div><div class="col-4"><p class="mb-0"><small>Pct: <span id="impresionCAPCT"></span></small></p></div><div class="col-4"><p class="mb-0"><small>LF: <span id="impresionLF"></span></small></p></div><div class="col-4"><p class="mb-0" id=""></p></div><div class="col-4"><p class="mb-0"><small>Pct: <span id="impresionLFPCT"></span></small></p></div><div class="col-4"><p class="mb-0"><small>Peso Fetal Estimado: <span id="impresionPFE"></span></small></p></div><div class="col-4"><p class="mb-0" id=""></p></div><div class="col-4"><p class="mb-0"><small>Pct: <span id="impresionPFEPCT"></span></small></p></div><div class="col-4"><p class="mb-0"><small>Relación CC-CA: <span id="impresionCCCA"></span></small></p></div><div class="col-4"><p class="mb-0" id=""></p></div><div class="col-4"><p class="mb-0"><small>Pct: <span id="impresionCCCAPCT"></span></small></p></div></div><div class="row mt-2"><div class="col-6"></div><div class="col-6"><p class="mb-0"><small>Profesional ecografista: <span id="impresionEcografista"></span></small></p></div></div>'

    var date = new Date();
    var dd = date.getDate();
    var mm = date.getMonth()+1; //January is 0!
    var yyyy = date.getFullYear();
  
    the("impresion").innerHTML = contenido
    //

    if(dd<10) {
        dd = '0'+dd
    } 
  
    if(mm<10) {
        mm = '0'+mm
    } 
  
    fexamen=  dd+ '-' + mm + '-' + yyyy;

    the("impresionNombrePaciente").innerHTML = (the("nombreInformeCrecimiento").value == undefined) ? "" : the("nombreInformeCrecimiento").value
    the("impresionFechaExamen").innerHTML =  fexamen
    the("impresionFUR").innerHTML =  (the("txtFUM").value == undefined) ? "" : the("txtFUM").value
    the("impresionEdadGestacional").innerHTML =  (the("impresionNombrePaciente").value == undefined) ? "" : the("impresionNombrePaciente").value
    the("impresionPlacenta").innerHTML =  (the("placenta").value == undefined) ? "" : the("placenta").value
    the("impresionLiquido").innerHTML =  (the("liquido").value == undefined) ? "" : the("liquido").value
    the("impresionFeto").innerHTML =  (the("fetoGemelar").value == undefined) ? "" : the("fetoGemelar").value + " " + the("fetoEstado").value
    the("impresionFCF").innerHTML =  (the("fcf").value == undefined) ? "" : the("fcf").value
    the("impresionDBP").innerHTML =  (the("dbp").value == undefined) ? "" : the("dbp").value
    the("impresionDBPPCT").innerHTML =  (the("dbpPct").value == undefined) ? "" : the("dbpPct").value
    the("impresionCC").innerHTML =  (the("cc").value == undefined) ? "" : the("cc").value
    the("impresionCCPCT").innerHTML =  (the("ccPct").value == undefined) ? "" : the("ccPct").value
    the("impresionCA").innerHTML =  (the("ca").value == undefined) ? "" : the("ca").value
    the("impresionCAPCT").innerHTML =  (the("caPct").value == undefined) ? "" : the("caPct").value
    the("impresionLF").innerHTML =  (the("lf").value == undefined) ? "" : the("lf").value
    the("impresionLFPCT").innerHTML =  (the("lfPct").value == undefined) ? "" : the("lfPct").value
    the("impresionPFE").innerHTML =  (the("pfe").value == undefined) ? "" : the("pfe").value
    the("impresionPFEPCT").innerHTML =  (the("pfePct").value == undefined) ? "" : the("pfePct").value
    the("impresionCCCA").innerHTML =  (the("ccca").value == undefined) ? "" : the("ccca").value
    the("impresionCCCAPCT").innerHTML = (the("cccaPct").value == undefined) ? "" : the("cccaPct").value
    the("impresionEcografista").innerHTML = (the("profEcografistaDos").value == undefined) ? "" : the("profEcografistaDos").value

}