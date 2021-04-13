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
        app.iUno()
    }else{
        //estándar
        window.print()
    }
}

function construirInformePrimTrimestre(){

    let contenido = '<p><small> PROTOCOLO ECOGRÁFICO<br/> UNIDAD DE ATENCION<br/> GINECO / OBSTETRICA </small></p><h1 class="text-center border-bottom h5 pb-3" id="impresionTitulo">Evaluación ecográfica obstétrica precoz (edades menores a 11 semanas)</h1><div class="row"> <div class="col-6"> <p class="mb-0"> <small>Nombre: <span id="impresionNombrePaciente"></span></small> </p></div><div class="col-6"> <p class="mb-0"> <small>Fecha exámen: <span id="impresionFechaExamen"></span></small> </p></div><div class="col-6"> <p> <small>FUR: <span id="impresionFUR"></span></small> </p></div><div class="col-6"> <p> <small>Edad Gestacional: <span id="impresionEdadGestacional"></span></small> </p></div></div><p class="mb-2"><small>Descripción</small></p><div class="row"> <div class="col-6"> <p class="mb-0"> <small>Cuerpo Uterino: <span id="impresionCuerpo"></span></small> </p></div><div class="col-6"> <p class="mb-0"> <small>Saco Gestacional: <span id="impresionSacog"></span></small> </p></div><div class="col-6"> <p class="mb-0"> <small>Saco Vitelino: <span id="impresionSacov"></span></small> </p></div><div class="col-6"> <p class="mb-0"> <small>Embrión: <span id="impresionEmbrión"></span></small> </p></div><div class="col-6"> <p class="mb-0"> <small>Exploración anexial derecha: <span id="impresionAnexialDer"></span></small> </p></div><div class="col-6"> <p class="mb-0"> <small>Exploración anexial izquierda: <span id="impresionAnexialIzq"></span></small> </p></div><div class="col-6"> <p class="mb-0"> <small>Exploración de Douglas: <span id="impresionDouglas"></span></small> </p></div></div><p class="mb-2"><small>Biometrías</small></p><div class="row border-bottom pb-3"> <div class="col-12"> <p class="mb-0"><small>Medida</small></p></div><div class="col-12"> <p class="mb-0"> <small>LCN: <span id="impresionLCN"></span></small> </p><div class="col-12"> <p class="mb-0"> <small>Estimación: FUR <span id="impresionFUREst"></span>, FPP <span id="impresionFPPEst"></span></small> </p></div></div><div class="row mt-2"> <div class="col-12"> <p class="mb-0"><small>Observaciones:</small></p></div><div class="col-12"><p class="mb-0" id="impObs"></p></div></div><hr/><div class="row"> <div class="col-6"></div><div class="col-6"> <p class="mb-0"> <small>Profesional ecografista: <span id="impEco"></span></small> </p></div></div><hr class="mt-0"/><p> <small> <small>Referencia Edad menstrual por LCN Hadlock FP, Shan YP, Kanon JD y cols.: Radiology 182:501, 1992. <br/> Referencia Diámetro biparital según gráfica de Hadlock y col. 1984 <br/> <strong> La aplicación tiene por objetivo favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento. </strong> </small> </small></p>'

    var date = new Date()
    var dd = date.getDate()
    var mm = date.getMonth() + 1
    var yyyy = date.getFullYear()

    the("impresion").innerHTML = contenido

    if( dd < 10 ) { dd = '0' + dd }
    if( mm < 10 ) { mm = '0' + mm }

    let fexamen = dd + '-' + mm + '-' + yyyy;

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

    the("impresionFUREst").innerHTML =  the("furlcn").innerHTML
    the("impresionFPPEst").innerHTML =  the("fpplcn").innerHTML

    the("impresionLCN").innerHTML =  (the("lcn").value == undefined) ? "" : the("lcn").value
    the("impEco").innerHTML = (the("profEcoPrimero").value == undefined) ? "" : the("profEcoPrimero").value

    if (the("obsPrimero").value == ""){
        the("impObs").innerHTML == ""
    }else{
        let tmp = the("obsPrimero").value
        tmp = tmp.replace(/\r?\n/g, "<br>")

        the("impObs").innerHTML = tmp
    }
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
        app.iCre()
    }else{
        window.print()
    }
}

function construirInformeCrecimiento(){

    let contenido = '<p><small>PROTOCOLO ECOGRÁFICO<br/>UNIDAD DE ATENCION<br/>GINECO / OBSTETRICA</small></p><h1 class="text-center border-bottom h5 pb-3" id="impresionTitulo">Evaluación ecográfica del crecimiento fetal</h1><div class="row"> <div class="col-6"> <p class="mb-0"> <small>Nombre: <span id="impresionNombrePaciente"></span></small> </p></div><div class="col-6"> <p class="mb-0"> <small>Fecha exámen: <span id="impresionFechaExamen"></span></small> </p></div><div class="col-6"> <p> <small>FUR: <span id="impresionFUR"></span></small> </p></div><div class="col-6"> <p> <small>Edad Gestacional: <span id="impresionEdadGestacional"></span></small> </p></div></div><p class="mb-2">DESCRIPCIÓN</p><div class="row"> <div class="col-6"> <p class="mb-0"> <small>Placenta normo insertada: <span id="impresionPlacenta"></span></small> </p></div><div class="col-6"> <p class="mb-0"> <small>Líquido amniótico: <span id="impresionLiquido"></span></small> </p></div><div class="col-6"> <p> <small>Feto: <span id="impresionFeto"></span></small> </p></div><div class="col-6"> <p> <small>FCF: <span id="impresionFCF"></span> x min.</small> </p></div></div><p class="mb-2">BIOMETRÍAS</p><div class="row border-bottom pb-3"> <div class="col-4"> <p class="mb-0"><small>Medida</small></p></div><div class="col-4"><p class="mb-0">Gráfica</p></div><div class="col-4"> <p class="mb-0"><small>Percentil</small></p></div><div class="col-4"> <p class="mb-0"> <small>DBP: <span id="impresionDBP"></span></small> </p></div><div class="col-4"><p class="mb-0" id=""></p></div><div class="col-4"> <p class="mb-0"> <small>Pct: <span id="impresionDBPPCT"></span></small> </p></div><div class="col-4"> <p class="mb-0"> <small>CC: <span id="impresionCC"></span></small> </p></div><div class="col-4"><p class="mb-0" id=""></p></div><div class="col-4"> <p class="mb-0"> <small>Pct: <span id="impresionCCPCT"></span></small> </p></div><div class="col-4"> <p class="mb-0"> <small>CA: <span id="impresionCA"></span></small> </p></div><div class="col-4"><p class="mb-0" id=""></p></div><div class="col-4"> <p class="mb-0"> <small>Pct: <span id="impresionCAPCT"></span></small> </p></div><div class="col-4"> <p class="mb-0"> <small>LF: <span id="impresionLF"></span></small> </p></div><div class="col-4"><p class="mb-0" id=""></p></div><div class="col-4"> <p class="mb-0"> <small>Pct: <span id="impresionLFPCT"></span></small> </p></div><div class="col-4"> <p class="mb-0"> <small>Peso Fetal Estimado: <span id="impresionPFE"></span></small> </p></div><div class="col-4"><p class="mb-0" id=""></p></div><div class="col-4"> <p class="mb-0"> <small>Pct: <span id="impresionPFEPCT"></span></small> </p></div><div class="col-4"> <p class="mb-0"> <small>Relación CC-CA: <span id="impresionCCCA"></span></small> </p></div><div class="col-4"><p class="mb-0" id=""></p></div><div class="col-4"> <p class="mb-0"> <small>Pct: <span id="impresionCCCAPCT"></span></small> </p></div></div><div class="row mt-2"> <div class="col-12"> <p class="mb-0"><small>Observaciones:</small></p></div><div class="col-12"><p class="mb-0" id="impObs"></p></div></div><hr/><div class="row"> <div class="col-6"></div><div class="col-6"> <p class="mb-0"> <small>Profesional ecografista: <span id="impEco"></span></small> </p></div></div><hr class="mt-0"/>'

    var date = new Date();
    var dd = date.getDate();
    var mm = date.getMonth()+1; //January is 0!
    var yyyy = date.getFullYear();
  
    the("impresion").innerHTML = contenido
    //

    if( dd < 10 ) { dd = '0' + dd }
    if( mm < 10 ) { mm = '0' + mm }

    let fexamen = dd + '-' + mm + '-' + yyyy;

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
    the("impEco").innerHTML = (the("profEcografistaDos").value == undefined) ? "" : the("profEcografistaDos").value

    if (the("obsSegundo").value == ""){
        the("impObs").innerHTML == ""

    }else{
        let tmp = the("obsSegundo").value
        tmp = tmp.replace(/\r?\n/g, "<br>")

        the("impObs").innerHTML = tmp
    }

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
        app.iDoppler()
    } else {
        window.print()
    }
}

function construirInformeDoppler(){

    let contenido = '<p> <small> PROTOCOLO ECOGRÁFICO<br/> UNIDAD DE ATENCION<br/> GINECO / OBSTETRICA </small></p><h1 class="text-center border-bottom h5 pb-3" id="impTitulo">Evaluación de flujometria doppler materno fetal</h1><div class="row"> <div class="col-6"> <p class="mb-0"> <small>NOMBRE: <span id="impNombrePaciente"></span></small> </p></div><div class="col-6"> <p class="mb-0"> <small>Fecha exámen: <span id="impFechaExamen"></span></small> </p></div><div class="col-6"> <p> <small>FUR: <span id="impFUR"></span></small> </p></div><div class="col-6"> <p> <small>Edad Gestacional: <span id="impEdadGestacional"></span></small> </p></div></div><p class="mb-2">DESCRIPCIÓN</p><div class="row"> <div class="col-6"> <p class="mb-0"> <small>Presentación: <span id="impPresentacion"></span></small> </p></div><div class="col-6"> <p class="mb-0"> <small>Placenta ubicación: <span id="impUbicacion"></span></small> </p></div><div class="col-6"> <p class="mb-0"> <small>Líquido amniótico: <span id="impLiquido"></span></small> </p></div><div class="col-6"> <p class="mb-0"> <small>Motivo: <span id="impMotivo"></span></small> </p></div></div><p class="mb-2">BIOMETRÍAS</p><div class="row border-bottom pb-3"> <div class="col-4"> <p class="mb-0"> <small><strong>Flujometría Doppler</strong></small> </p></div><div class="col-4"> <p class="mb-0"><strong>IP observado</strong></p></div><div class="col-4"> <p class="mb-0"> <small><strong>Rango percentilar</strong></small> </p></div><div class="col-4"> <p class="mb-0"><small>Uterina Derecha:</small></p></div><div class="col-4"> <p class="mb-0"> <small><span id="impUtD" class="text-center"></span></small> </p></div><div class="col-4"> <p class="mb-0"> <small><span id="impUtDPCT"></span></small> </p></div><div class="col-4"> <p class="mb-0"><small>Uterina Izquierda:</small></p></div><div class="col-4"> <p class="mb-0"> <small><span id="impUtI" class="text-center"></span></small> </p></div><div class="col-4"> <p class="mb-0"> <small><span id="impUtIPCT"></span></small> </p></div><div class="col-4"> <p class="mb-0"><small>Uterina Promedio:</small></p></div><div class="col-4"> <p class="mb-0"> <small><span id="impUtP" class="text-center"></span></small> </p></div><div class="col-4"> <p class="mb-0"> <small><span id="impUtPPCT"></span></small> </p></div><div class="col-4"> <p class="mb-0"><small>Arteria Umbilical:</small></p></div><div class="col-4"> <p class="mb-0"> <small><span id="impAU" class="text-center"></span></small> </p></div><div class="col-4"> <p class="mb-0"> <small><span id="impAUPCT"></span></small> </p></div><div class="col-4"> <p class="mb-0"><small>Arteria C. Media:</small></p></div><div class="col-4"> <p class="mb-0"> <small><span id="impCM" class="text-center"></span></small> </p></div><div class="col-4"> <p class="mb-0"> <small><span id="impCMPCT"></span></small> </p></div><div class="col-4"> <p class="mb-0"><small>IP cuociente CP:</small></p></div><div class="col-4"> <p class="mb-0"> <small><span id="impCCP" class="text-center"></span></small> </p></div><div class="col-4"> <p class="mb-0"> <small><span id="impCCPPCT"></span></small> </p></div><div class="col-4"> <p class="mb-0"><small>Ductus venoso:</small></p></div><div class="col-4"> <p class="mb-0"> <small><span id="impDV" class="text-center"></span></small> </p></div><div class="col-4"> <p class="mb-0"> <small><span id="impDVPCT"></span></small> </p></div></div><div class="row mt-2"> <div class="col-12"> <p class="mb-0"><small>Observaciones:</small></p></div><div class="col-12"><p class="mb-0" id="impObs"></p></div></div><hr/><div class="row"> <div class="col-6"></div><div class="col-6"> <p class="mb-0"> <small>Profesional ecografista: <span id="impEco"></span></small> </p></div></div><hr class="mt-0"/><p> <small> <small> * Referencia para Doppler promedio de arterias uterinas: Gómes O., Figueras F., Fernandez S., Bennasar M, Martínez JM., Puerto B., Gratacos E., UOG 2008; 32: 128-32<br/> ** Referencia para Doppler de arteria umbilical, C Media y CCP; Baschat et al Ultrasound Obstet. Gynecol 2003; 21 124 - 127<br/> *** Referencia para Liq. Amniotico BVM, Magann EF. Sanderson M. Martin JN y col. Am J Obstet Gynecol 1982: 1581, 2000<br/> <strong> La aplicación tiene por objetivo favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento. </strong> </small> </small></p>'
    let elementos = ["impNombrePaciente", "impFechaExamen", "impFUR", "impEdadGestacional", "impLiquido", "impMotivo", "impPresentacion", "impUbicacion", "impUtD", "impUtDPCT", "impUtI", "impUtIPCT", "impUtP", "impUtPPCT", "impAU", "impAUPCT", "impCM", "impCMPCT", "impCCP", "impCCPPCT", "impDV", "impDVPCT", "impObs", "impEco"]

    var date = new Date();
    var dd = date.getDate();
    var mm = date.getMonth() + 1; //January is 0!
    var yyyy = date.getFullYear();

    the("impresion").innerHTML = contenido

    if( dd < 10 ) { dd = '0' + dd }
    if( mm < 10 ) { mm = '0' + mm }

    let fexamen = dd + '-' + mm + '-' + yyyy;

    the("impNombrePaciente").innerHTML = (the("nombreInformeDoppler").value == undefined) ? "" : the("nombreInformeDoppler").value
    the("impFechaExamen").innerHTML =  fexamen
    the("impFUR").innerHTML =  (the("txtFUM").innerHTML == undefined) ? "" : the("txtFUM").innerHTML
    the("impEdadGestacional").innerHTML =  (the("txtEG").innerHTML == undefined) ? "" : the("txtEG").innerHTML
    the("impLiquido").innerHTML =  (the("liquidoDoppler").value == undefined) ? "" : the("liquidoDoppler").value
    the("impMotivo").innerHTML =  (the("motivoDoppler").value == undefined) ? "" : the("motivoDoppler").value
    the("impPresentacion").innerHTML =  (the("presentacionDoppler").value == undefined) ? "" : the("presentacionDoppler").value
    the("impUbicacion").innerHTML =  (the("ubicacionDoppler").value == undefined) ? "" : the("ubicacionDoppler").value

    the("impUtD").innerHTML =  (the("aud").value == undefined) ? "" : the("aud").value
    the("impUtDPCT").innerHTML =  (the("aud").value == "") ? "" : oldProgress(uterinas.calcular(the("eg").value, +the("aud").value).raw)
    the("impUtI").innerHTML =  (the("aui").value == undefined) ? "" : the("aui").value
    the("impUtIPCT").innerHTML =  (the("aui").value == "") ? "" : oldProgress(uterinas.calcular(the("eg").value, +the("aui").value).raw)
    the("impUtP").innerHTML =  (the("aup").value == undefined) ? "" : the("aup").value
    the("impUtPPCT").innerHTML =  (the("aup").value == "") ? "" : oldProgress(uterinas.calcular(the("eg").value, +the("aup").value).raw)
    the("impAU").innerHTML =  (the("au").value == undefined) ? "" : the("au").value
    the("impAUPCT").innerHTML =  (the("au").value == undefined) ? "" : oldProgress(umbilical.calcular(the("eg").value, +the("au").value))
    the("impCM").innerHTML =  (the("acm").value == undefined) ? "" : the("acm").value
    the("impCMPCT").innerHTML =  (the("acm").value == undefined) ? "" : oldProgress(cerebral.calcular(the("eg").value, +the("acm").value))
    the("impCCP").innerHTML =  (the("ccp").value == undefined) ? "" : the("ccp").value
    the("impCCPPCT").innerHTML =  (the("ccp").value == undefined) ? "" : oldProgress(ccp.calcular(the("acm").value, the("au").value))
    the("impDV").innerHTML =  (the("dv").value == undefined) ? "" : the("dv").value
    the("impDVPCT").innerHTML = (the("dv").value == undefined) ? "" : oldProgress(ductus.calcular(the("eg").value, +the("dv").value))

    if (the("obsDoppler").value == ""){
        the("impObs").innerHTML == ""
    }else{
        let tmp = the("obsDoppler").value
        tmp = tmp.replace(/\r?\n/g, "<br>")

        the("impObs").innerHTML = tmp
    }

    the("impEco").innerHTML = (the("profEcoDoppler").value == undefined) ? "" : the("profEcoDoppler").value

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

function construirInforme(estructura,datos){

}