import { the } from "./wetrust.js";
import {uterinas, umbilical, cerebral, ccp, ductus} from "./biometrias.js"

the("informePrimTrim").onclick = function(){
    construirInformePrimTrimestre()

    if (window.webkit != undefined){
        //ios
        if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.toggleMessageHandler) {
            window.webkit.messageHandlers.toggleMessageHandler.postMessage({
                "message": "print"
            });
        }
    } else if (typeof app != 'undefined'){
        //android
        app.imprimir()
    }else{
        //estándar
        window.print()
    }
}

function construirInformePrimTrimestre(){

    let contenido = '<p><small>PROTOCOLO ECOGRÁFICO<br>UNIDAD DE ATENCION<br>GINECO / OBSTETRICA</small></p><h1 class="text-center border-bottom h5 pb-3" id="impresionTitulo">Evaluación ecográfica obstétrica precoz (edades menores a 11 semanas)</h1><div class="row"><div class="col-6"><p class="mb-0"><small>Nombre: <span id="impresionNombrePaciente"></span></small></p></div><div class="col-6"><p class="mb-0"><small>Fecha exámen: <span id="impresionFechaExamen"></span></small></p></div><div class="col-6"><p><small>FUR: <span id="impresionFUR"></span></small></p></div><div class="col-6"><p><small>Edad Gestacional: <span id="impresionEdadGestacional"></span></small></p></div></div><p class="mb-2"><small>Descripción</small></p><div class="row"><div class="col-6"><p class="mb-0"><small>Cuerpo Uterino: <span id="impresionCuerpo"></span></small></p></div><div class="col-6"><p class="mb-0"><small>Saco Gestacional: <span id="impresionSacog"></span></small></p></div><div class="col-6"><p class="mb-0"><small>Saco Vitelino: <span id="impresionSacov"></span></small></p></div><div class="col-6"><p class="mb-0"><small>Embrión: <span id="impresionEmbrión"></span></small></p></div><div class="col-6"><p class="mb-0"><small>Exploración anexial derecha: <span id="impresionAnexialDer"></span></small></p></div><div class="col-6"><p class="mb-0"><small>Exploración anexial izquierda: <span id="impresionAnexialIzq"></span></small></p></div><div class="col-6"><p class="mb-0"><small>Exploración de Douglas: <span id="impresionDouglas"></span></small></p></div></div><p class="mb-2"><small>Biometrías</small></p><div class="row border-bottom pb-3"><div class="col-12"><p class="mb-0"><small>Medida</small></p></div><div class="col-12"><p class="mb-0"><small>LCN: <span id="impresionLCN"></span></small></p></div></div><div class="row mt-2 border-bottom pb-3"><div class="col-6"></div><div class="col-6"><p class="mb-0"><small>Profesional ecografista: <span id="impresionEcografista"></span></small></p></div></div><p><small>Referencia saco gestacional Hellman LM, Kobayashi M., Fillisti L. Am J Onstet Gynecol 1968; 103(6):789-800 <br/> Referencia Edad menstrual por LCN Hadlock FP, Shan YP, Kanon JD y cols.: Radiology 182:501, 1992. <br/> Referencia Diámetro biparital según gráfica de Hadlock y col. 1984 <br/> <strong> El software tiene por objetivo favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento.</strong></small></p>'

    var date = new Date()
    var dd = date.getDate()
    var mm = date.getMonth() + 1
    var yyyy = date.getFullYear()

    the("impresion").innerHTML = contenido

    if( dd < 10 ) { dd = '0'+dd } 
    if( mm < 10 ) { mm = '0'+mm } 
  
    let fexamen =  dd+ '-' + mm + '-' + yyyy;

    the("impresionNombrePaciente").innerHTML = (the("nombreInformeCrecimiento").value == undefined) ? "" : the("nombreInformeCrecimiento").value
    the("impresionFechaExamen").innerHTML =  fexamen
    the("impresionFUR").innerHTML =  (the("txtFUM").innerHTML == undefined) ? "" : the("txtFUM").innerHTML
    the("impresionEdadGestacional").innerHTML =  (the("txtEG").innerHTML == undefined) ? "" : the("txtEG").innerHTML

    the("impresionCuerpo").innerHTML =  (the("primeroCuerpo").value == undefined) ? "" : the("primeroCuerpo").value
    the("impresionSacog").innerHTML =  (the("primeroSacoG").value == undefined) ? "" : the("primeroSacoG").value
    the("impresionSacov").innerHTML =  (the("primeroSacoV").value == undefined) ? "" : the("primeroSacoV").value
    the("impresionEmbrión").innerHTML =  (the("primeroEmbrion").value == undefined) ? "" : the("primeroEmbrion").value
    the("impresionAnexialDer").innerHTML =  (the("primeroAnexDer").value == undefined) ? "" : the("primeroAnexDer").value
    the("impresionAnexialIzq").innerHTML =  (the("primeroAnexIzq").value == undefined) ? "" : the("primeroAnexIzq").value
    the("impresionDouglas").innerHTML =  (the("primeroDouglas").value == undefined) ? "" : the("primeroDouglas").value

    the("impresionLCN").innerHTML =  (the("lcn").value == undefined) ? "" : the("lcn").value
    the("impresionEcografista").innerHTML = (the("profEcografistaDos").value == undefined) ? "" : the("profEcografistaDos").value
}

the("informeCrecimiento").onclick = function(){
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

    let contenido = '<p><small>PROTOCOLO ECOGRÁFICO<br>UNIDAD DE ATENCION<br>GINECO / OBSTETRICA</small></p><h1 class="text-center border-bottom h5 pb-3" id="impresionTitulo">Evaluación ecográfica del crecimiento fetal</h1><div class="row"><div class="col-6"><p class="mb-0"><small>Nombre: <span id="impresionNombrePaciente"></span></small></p></div><div class="col-6"><p class="mb-0"><small>Fecha exámen: <span id="impresionFechaExamen"></span></small></p></div><div class="col-6"><p><small>FUR: <span id="impresionFUR"></span></small></p></div><div class="col-6"><p><small>Edad Gestacional: <span id="impresionEdadGestacional"></span></small></p></div></div><p class="mb-2">DESCRIPCIÓN</p><div class="row"><div class="col-6"><p class="mb-0"><small>Placenta normo insertada: <span id="impresionPlacenta"></span></small></p></div><div class="col-6"><p class="mb-0"><small>Líquido amniótico: <span id="impresionLiquido"></span></small></p></div><div class="col-6"><p><small>Feto: <span id="impresionFeto"></span></small></p></div><div class="col-6"><p><small>FCF: <span id="impresionFCF"></span> x min.</small></p></div></div><p class="mb-2">BIOMETRÍAS</p><div class="row border-bottom pb-3"><div class="col-4"><p class="mb-0"><small>Medida</small></p></div><div class="col-4"><p class="mb-0">Gráfica</p></div><div class="col-4"><p class="mb-0"><small>Percentil</small></p></div><div class="col-4"><p class="mb-0"><small>DBP: <span id="impresionDBP"></span></small></p></div><div class="col-4"><p class="mb-0" id=""></p></div><div class="col-4"><p class="mb-0"><small>Pct: <span id="impresionDBPPCT"></span></small></p></div><div class="col-4"><p class="mb-0"><small>CC: <span id="impresionCC"></span></small></p></div><div class="col-4"><p class="mb-0" id=""></p></div><div class="col-4"><p class="mb-0"><small>Pct: <span id="impresionCCPCT"></span></small></p></div><div class="col-4"><p class="mb-0"><small>CA: <span id="impresionCA"></span></small></p></div><div class="col-4"><p class="mb-0" id=""></p></div><div class="col-4"><p class="mb-0"><small>Pct: <span id="impresionCAPCT"></span></small></p></div><div class="col-4"><p class="mb-0"><small>LF: <span id="impresionLF"></span></small></p></div><div class="col-4"><p class="mb-0" id=""></p></div><div class="col-4"><p class="mb-0"><small>Pct: <span id="impresionLFPCT"></span></small></p></div><div class="col-4"><p class="mb-0"><small>Peso Fetal Estimado: <span id="impresionPFE"></span></small></p></div><div class="col-4"><p class="mb-0" id=""></p></div><div class="col-4"><p class="mb-0"><small>Pct: <span id="impresionPFEPCT"></span></small></p></div><div class="col-4"><p class="mb-0"><small>Relación CC-CA: <span id="impresionCCCA"></span></small></p></div><div class="col-4"><p class="mb-0" id=""></p></div><div class="col-4"><p class="mb-0"><small>Pct: <span id="impresionCCCAPCT"></span></small></p></div></div><div class="row mt-2"><div class="col-6"></div><div class="col-6"><p class="mb-0"><small>Profesional ecografista: <span id="impresionEcografista"></span></small></p></div></div>'

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
  
    let fexamen =  dd+ '-' + mm + '-' + yyyy;

    the("impresionNombrePaciente").innerHTML = (the("nombreInformeCrecimiento").value == undefined) ? "" : the("nombreInformeCrecimiento").value
    the("impresionFechaExamen").innerHTML =  fexamen
    the("impresionFUR").innerHTML =  (the("txtFUM").innerHTML == undefined) ? "" : the("txtFUM").innerHTML
    the("impresionEdadGestacional").innerHTML =  (the("txtEG").innerHTML == undefined) ? "" : the("txtEG").innerHTML
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

the("informeDopplerVer").onclick = function(){
    construirInformeDoppler()

    if (window.webkit != undefined){
        if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.toggleMessageHandler) {
            window.webkit.messageHandlers.toggleMessageHandler.postMessage({
                "message": "print"
            });
        }
    } else if (typeof app != 'undefined'){ 
        app.imprimir()
    } else {
        window.print()
    }
}

function construirInformeDoppler(){

    let contenido = '<p> <small> PROTOCOLO ECOGRÁFICO<br/> UNIDAD DE ATENCION<br/> GINECO / OBSTETRICA </small></p><h1 class="text-center border-bottom h5 pb-3" id="impresionTitulo">Evaluación de flujometria doppler materno fetal</h1><div class="row"> <div class="col-6"> <p class="mb-0"> <small>NOMBRE: <span id="impresionNombrePaciente"></span></small> </p></div><div class="col-6"> <p class="mb-0"> <small>Fecha exámen: <span id="impresionFechaExamen"></span></small> </p></div><div class="col-6"> <p> <small>FUR: <span id="impresionFUR"></span></small> </p></div><div class="col-6"> <p> <small>Edad Gestacional: <span id="impresionEdadGestacional"></span></small> </p></div></div><p class="mb-2">DESCRIPCIÓN</p><div class="row"> <div class="col-6"> <p> <small>Presentación: <span id="impresionPresentacion"></span></small> </p></div><div class="col-6"> <p> <small>Placenta ubicación: <span id="impresionUbicacion"></span></small> </p></div><div class="col-6"> <p> <small>Líquido amniótico: <span id="impresionLiquido"></span></small> </p></div><div class="col-6"> <p> <small>Motivo: <span id="impresionMotivo"></span></small> </p></div></div><p class="mb-2">BIOMETRÍAS</p><div class="row border-bottom pb-3"> <div class="col-4"> <p class="mb-0"> <small><strong>Flujometría Doppler</strong></small> </p></div><div class="col-4"> <p class="mb-0"><strong>IP observado</strong></p></div><div class="col-4"> <p class="mb-0"> <small><strong>Rango percentilar</strong></small> </p></div><div class="col-4"> <p class="mb-0"><small>Uterina Derecha:</small></p></div><div class="col-4"> <p class="mb-0"> <small><span id="impresionUtD"></span></small> </p></div><div class="col-4"> <p class="mb-0"> <small><span id="impresionUtDPCT"></span></small> </p></div><div class="col-4"> <p class="mb-0"><small>Uterina Izquierda:</small></p></div><div class="col-4"> <p class="mb-0"> <small><span id="impresionUtI"></span></small> </p></div><div class="col-4"> <p class="mb-0"> <small><span id="impresionUtIPCT"></span></small> </p></div><div class="col-4"> <p class="mb-0"><small>Uterina Promedio:</small></p></div><div class="col-4"> <p class="mb-0"> <small><span id="impresionUtP"></span></small> </p></div><div class="col-4"> <p class="mb-0"> <small><span id="impresionUtPPCT"></span></small> </p></div><div class="col-4"> <p class="mb-0"><small>Arteria Umbilical:</small></p></div><div class="col-4"> <p class="mb-0"> <small><span id="impresionAU"></span></small> </p></div><div class="col-4"> <p class="mb-0"> <small><span id="impresionAUPCT"></span></small> </p></div><div class="col-4"> <p class="mb-0"><small>Arteria C. Media:</small></p></div><div class="col-4"> <p class="mb-0"> <small><span id="impresionCM"></span></small> </p></div><div class="col-4"> <p class="mb-0"> <small><span id="impresionCMPCT"></span></small> </p></div><div class="col-4"> <p class="mb-0"><small>IP cuociente CP:</small></p></div><div class="col-4"> <p class="mb-0"> <small><span id="impresionCCP"></span></small> </p></div><div class="col-4"> <p class="mb-0"> <small><span id="impresionCCPPCT"></span></small> </p></div><div class="col-4"> <p class="mb-0"><small>Ductus venoso:</small></p></div><div class="col-4"> <p class="mb-0"> <small><span id="impresionDV"></span></small> </p></div><div class="col-4"> <p class="mb-0"> <small><span id="impresionDVPCT"></span></small> </p></div></div><div class="row mt-2"> <div class="col-12"> <p class="mb-0"><small>Observaciones:</small></p></div><div class="col-12"><p class="mb-0" id="impresionObservaciones"></p></div></div><hr/><div class="row mt-2"> <div class="col-6"></div><div class="col-6"> <p class="mb-0"> <small>Profesional ecografista: <span id="impresionEcografista"></span></small> </p></div></div><hr class="mt-0"/><p> <small> * Referencia para Doppler promedio de arterias uterinas: Gómes O., Figueras F., Fernandez S., Bennasar M, Martínez JM., Puerto B., Gratacos E., UOG 2008; 32: 128-32 <br/> ** Referencia para Doppler de arteria umbilical, C Media y CCP; Baschat et al Ultrasound Obstet. Gynecol 2003; 21 124 - 127 <br/> *** Referencia para Liq. Amniotico BVM, Magann EF. Sanderson M. Martin JN y col. Am J Obstet Gynecol 1982: 1581, 2000 </small> <br/> <strong> <small> La aplicación tiene por objetivo favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento. </small> </strong></p>'

    var date = new Date();
    var dd = date.getDate();
    var mm = date.getMonth() + 1; //January is 0!
    var yyyy = date.getFullYear();

    the("impresion").innerHTML = contenido

    if( dd < 10 ) { dd = '0' + dd }
    if( mm < 10 ) { mm = '0' + mm }

    let fexamen = dd + '-' + mm + '-' + yyyy;

    the("impresionNombrePaciente").innerHTML = (the("nombreInformeDoppler").value == undefined) ? "" : the("nombreInformeDoppler").value
    the("impresionFechaExamen").innerHTML =  fexamen
    the("impresionFUR").innerHTML =  (the("txtFUM").innerHTML == undefined) ? "" : the("txtFUM").innerHTML
    the("impresionEdadGestacional").innerHTML =  (the("txtEG").innerHTML == undefined) ? "" : the("txtEG").innerHTML
    the("impresionLiquido").innerHTML =  (the("liquidoDoppler").value == undefined) ? "" : the("liquidoDoppler").value
    the("impresionMotivo").innerHTML =  (the("motivoDoppler").value == undefined) ? "" : the("motivoDoppler").value
    the("impresionPresentacion").innerHTML =  (the("presentacionDoppler").value == undefined) ? "" : the("presentacionDoppler").value
    the("impresionUbicacion").innerHTML =  (the("ubicacionDoppler").value == undefined) ? "" : the("ubicacionDoppler").value

    the("impresionUtD").innerHTML =  (the("aud").value == undefined) ? "" : the("aud").value
    the("impresionUtDPCT").innerHTML =  (the("aud").value == undefined) ? "" : oldProgress(uterinas.calcular(the("eg").value, +the("aud").value).raw)
    the("impresionUtI").innerHTML =  (the("aui").value == undefined) ? "" : the("aui").value
    the("impresionUtIPCT").innerHTML =  (the("aui").value == undefined) ? "" : oldProgress(uterinas.calcular(the("eg").value, +the("aui").value).raw)
    the("impresionUtP").innerHTML =  (the("aup").value == undefined) ? "" : the("aup").value
    the("impresionUtPPCT").innerHTML =  (the("aup").value == undefined) ? "" : oldProgress(uterinas.calcular(the("eg").value, +the("aup").value).raw)
    the("impresionAU").innerHTML =  (the("au").value == undefined) ? "" : the("au").value
    the("impresionAUPCT").innerHTML =  (the("au").value == undefined) ? "" : oldProgress(umbilical.calcular(the("eg").value, +the("au").value))
    the("impresionCM").innerHTML =  (the("acm").value == undefined) ? "" : the("acm").value
    the("impresionCMPCT").innerHTML =  (the("acm").value == undefined) ? "" : oldProgress(cerebral.calcular(the("eg").value, +the("acm").value))
    the("impresionCCP").innerHTML =  (the("ccp").value == undefined) ? "" : the("ccp").value
    the("impresionCCPPCT").innerHTML =  (the("ccp").value == undefined) ? "" : oldProgress(ccp.calcular(the("acm").value, the("au").value))
    the("impresionDV").innerHTML =  (the("dv").value == undefined) ? "" : the("dv").value
    the("impresionDVPCT").innerHTML = (the("dv").value == undefined) ? "" : oldProgress(ductus.calcular(the("eg").value, +the("dv").value))

    the("impresionObservaciones").innerHTML = (the("observacionesDoppler").value == undefined) ? "" : the("observacionesDoppler").value

    the("impresionEcografista").innerHTML = (the("profEcografistaDoppler").value == undefined) ? "" : (the("profEcografistaDoppler").value).replace(/\r?\n/g, "<br>")

}

function oldProgress(value){
    let step = [0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100]

    let result = "[";
    let footer = "]"

    step.forEach(element => {
        if (element < 50 || (element > 50 && element < 100)){
            if (value > element && value < (element +5) || (value == (element + 5) && value != 50 && value != 100)){
                result += "x";

            }else{
                result += "-";
            }

        }else if (element == 50){
            if (value >= element && value <= (element +5)){
                result += "x";
            }else{
                result += "|";
            }

        }else if (element == 100){
            result += footer;
        }
    })

    return result;
}