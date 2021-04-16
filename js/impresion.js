import { the, humanDate, isNumber } from "./wetrust.js";
import {uterinas, umbilical, cerebral, ccp, ductus, dbp, cc, ca, lf, ccca, psohdlk, lh, cb} from "./biometrias.js"
import { pfe } from "./pfe.js"

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

    let contenido = '<p> <small> PROTOCOLO ECOGRÁFICO<br/> UNIDAD DE ATENCION<br/> GINECO / OBSTETRICA </small></p><h1 class="text-center border-bottom h5 pb-3" id="impresionTitulo">Evaluación ecográfica obstétrica precoz (edades menores a 11 semanas)</h1><div class="row"> <div class="col-6"> <p class="mb-0"> <small>NOMBRE: <span id="impresionNombrePaciente"></span></small> </p></div><div class="col-6"> <p class="mb-0"> <small>Fecha exámen: <span id="impresionFechaExamen"></span></small> </p></div><div class="col-6"> <p> <small>FUR Referida: <span id="impresionFUR"></span></small> </p></div><div class="col-6"> <p> <small>Edad Gestacional: <span id="impresionEdadGestacional"></span></small> </p></div></div><p class="mb-2"><small>Descripción general</small></p><div class="row"> <div class="col-6"> <p class="mb-0"> <small>Cuerpo Uterino: <span id="impresionCuerpo"></span></small> </p></div><div class="col-6"> <p class="mb-0"> <small>Saco Gestacional: <span id="impresionSacog"></span></small> </p></div><div class="col-6"> <p class="mb-0"> <small>Saco Vitelino: <span id="impresionSacov"></span></small> </p></div><div class="col-6"> <p class="mb-0"> <small>Embrión: <span id="impresionEmbrión"></span></small> </p></div><div class="col-6"> <p class="mb-0"> <small>Exploración anexial derecha: <span id="impresionAnexialDer"></span></small> </p></div><div class="col-6"> <p class="mb-0"> <small>Exploración anexial izquierda: <span id="impresionAnexialIzq"></span></small> </p></div><div class="col-6"> <p> <small>Exploración de Douglas: <span id="impresionDouglas"></span></small> </p></div></div><div class="row border-bottom pb-3"> <div class="col-12"> <p class="mb-0"> <small><strong>Longitud Céfalo Nalga</strong> ( LCN ): <span id="impresionLCN"></span> mm</small> </p></div><div class="col-12"> <p class="mb-0"> <small>- Edad gestacional estimada: <span id="impresionEGEst"></span></small> </p></div><div class="col-12"> <p class="mb-0"> <small>- FUR Operacional: <span id="impresionFUREst"></span></small> </p></div><div class="col-12"> <p class="mb-0"> <small>- Fecha Probable de Parto: <span id="impresionFPPEst"></span></small> </p></div><div class="row mt-2"> <div class="col-12"> <p class="mb-0"> <small><strong>Observaciones y comentarios:</strong></small> </p></div><div class="col-12"><p class="mb-0" id="impObs"></p></div></div><hr/> <div class="row"> <div class="col-6"></div><div class="col-6"> <p class="mb-0"> <small>Profesional ecografista: <span id="impEco"></span></small> </p></div></div><hr class="mt-0"/> <p> <small> <small> Referencia Edad menstrual por LCN Hadlock FP, Shan YP, Kanon JD y cols.: Radiology 182:501, 1992. <br/> Referencia Diámetro biparital según gráfica de Hadlock y col. 1984 <br/> <strong> La aplicación tiene por objetivo favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento. </strong> </small> </small> </p></div>'

    the("impresion").innerHTML = contenido

    the("impresionNombrePaciente").innerHTML = (the("nombreInformePrimero").value == undefined) ? "" : the("nombreInformePrimero").value

    the("impresionFechaExamen").innerHTML =  humanDate()

    the("impresionFUR").innerHTML =  (the("edadPrimeroAjustarNo").checked == true) ? the("txtFUM").innerHTML : the("furOld").innerHTML
    the("impresionEdadGestacional").innerHTML =  (the("edadPrimeroAjustarNo").checked == true) ? the("txtEG").innerHTML  + " sem" : the("egOld").innerHTML

    the("impresionCuerpo").innerHTML =  (the("primeroCuerpo").value == undefined) ? "" : the("primeroCuerpo").value
    the("impresionSacog").innerHTML =  (the("primeroSacoG").value == undefined) ? "" : the("primeroSacoG").value
    the("impresionSacov").innerHTML =  (the("primeroSacoV").value == undefined) ? "" : the("primeroSacoV").value
    the("impresionEmbrión").innerHTML =  (the("primeroEmbrion").value == undefined) ? "" : the("primeroEmbrion").value
    the("impresionAnexialDer").innerHTML =  (the("primeroAnexDer").value == undefined) ? "" : the("primeroAnexDer").value
    the("impresionAnexialIzq").innerHTML =  (the("primeroAnexIzq").value == undefined) ? "" : the("primeroAnexIzq").value
    the("impresionDouglas").innerHTML =  (the("primeroDouglas").value == undefined) ? "" : the("primeroDouglas").value

    the("impresionFUREst").innerHTML =  the("furlcn").innerHTML
    the("impresionEGEst").innerHTML =  the("eglcn").innerHTML
    the("impresionFPPEst").innerHTML =  the("fpplcn").innerHTML

    the("impresionLCN").innerHTML =  (the("lcn").value == undefined) ? "" : the("lcn").value
    the("impEco").innerHTML = (the("profEcoPrimero").value == undefined) ? "" : the("profEcoPrimero").value

    if (the("obsPrimero").value == ""){
        the("impObs").innerHTML == ""
    } else {
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

    let contenido = '<p> <small> PROTOCOLO ECOGRÁFICO<br/> UNIDAD DE ATENCION<br/> GINECO / OBSTETRICA </small></p><h1 class="text-center border-bottom h5 pb-3" id="impresionTitulo">Evaluación ecográfica del crecimiento fetal</h1><div class="row"> <div class="col-6"> <p class="mb-0"> <small>Nombre: <span id="impresionNombrePaciente"></span></small> </p></div><div class="col-6"> <p class="mb-0"> <small>Fecha exámen: <span id="impresionFechaExamen"></span></small> </p></div><div class="col-6"> <p> <small>FUR: <span id="impresionFUR"></span></small> </p></div><div class="col-6"> <p> <small>Edad Gestacional: <span id="impresionEdadGestacional"></span></small> </p></div></div><p class="mb-2">DESCRIPCIÓN</p><div class="row"> <div class="col-6"> <p class="mb-0"> <small>Placenta normo insertada: <span id="impresionPlacenta"></span></small> </p></div><div class="col-6"> <p class="mb-0"> <small>Líquido amniótico: <span id="impresionLiquido"></span></small> </p></div><div class="col-6"> <p> <small>Feto: <span id="impresionFeto"></span></small> </p></div><div class="col-6"> <p> <small>FCF: <span id="impresionFCF"></span> x min.</small> </p></div></div><p class="mb-2">BIOMETRÍAS</p><div class="row border-bottom pb-3"> <div class="col-4"> <p class="mb-0"><small>Medida</small></p></div><div class="col-4"><p class="mb-0 text-center">Valor</p></div><div class="col-4"> <p class="mb-0"><small>Rango Percentilar</small></p></div><div class="col-4"> <p class="mb-0"><small>DBP:</small></p></div><div class="col-4"> <p class="mb-0 text-center"> <small><span id="impDBP"></span> mm</small> </p></div><div class="col-4"> <p class="mb-0 text-center"> <small><span id="impDBPG"></span></small> </p></div><div class="col-4"> <p class="mb-0"><small>C. Cráneo:</small></p></div><div class="col-4"> <p class="mb-0 text-center"> <small><span id="impCC"></span> mm</small> </p></div><div class="col-4"> <p class="mb-0 text-center"> <small><span id="impCCG"></span></small> </p></div><div class="col-4"> <p class="mb-0"><small>C. Abdomen:</small></p></div><div class="col-4"> <p class="mb-0 text-center"> <small><span id="impCA"></span> mm</small> </p></div><div class="col-4"> <p class="mb-0 text-center"> <small><span id="impCAG"></span></small> </p></div><div class="col-4"> <p class="mb-0"><small>L. Fémur:</small></p></div><div class="col-4"> <p class="mb-0 text-center"> <small><span id="impLF"></span> mm</small> </p></div><div class="col-4"> <p class="mb-0 text-center"> <small><span id="impLFG"></span></small> </p></div><div class="col-4"> <p class="mb-0"><small>Peso Fetal Estimado:</small></p></div><div class="col-4"> <p class="mb-0 text-center"> <small><span id="impPFE"></span></small> </p></div><div class="col-4"> <p class="mb-0 text-center"> <small><span id="impPFEG"></span></small> </p></div><div class="col-4"> <p class="mb-0"><small>Relación C. Cráneo &#47; C.Abdomen:</small></p></div><div class="col-4"> <p class="mb-0 text-center"> <small><span id="impCCCA"></span></small> </p></div><div class="col-4"> <p class="mb-0 text-center"> <small><span id="impCCCAG"></span></small> </p></div>'

    let cV = +the("lc").value;

    if (cV != NaN){
        contenido += '<div class="col-4"> <p class="mb-0"><small>Largo Cervical:</small></p></div><div class="col-4"> <p class="mb-0 text-center"> <small><span id="impLC"></span></small> </p></div><div class="col-4"> <p class="mb-0 text-center"> <small><span id="impLCTXT"></span></small> </p></div>'
    }

    contenido += '</div><div class="row mt-2"> <div class="col-12"> <p class="mb-0"><small><strong>Observaciones:</strong></small></p></div><div class="col-12"><p class="mb-0" id="impObs"></p></div></div><hr/><div class="row"> <div class="col-6"></div><div class="col-6"> <p class="mb-0"> <small>Profesional ecografista: <span id="impEco"></span></small> </p></div></div><hr class="mt-0"/><p class="mb-0"> <small> * Evaluación de crecimiento fetal según referencia propuesta por Hardlock y col. Radiology 181: 129 - 133; 1991 (Normalidad pct 10 a 90)<br/> ** Referencia para medición de líquido amniótico (BVM), Magann EF. Sanderson M. Martin JN y col. Am J Obstet Gynecol 1982: 1581, 2000 </small></p><p> <small> <strong> La aplicación tiene por objetivo favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento. </strong> </small></p>'
    
    the("impresion").innerHTML = contenido

    the("impresionNombrePaciente").innerHTML = (the("nombreInformeCrecimiento").value == undefined) ? "" : the("nombreInformeCrecimiento").value
    the("impresionFechaExamen").innerHTML = humanDate()
    the("impresionFUR").innerHTML =  (the("txtFUM").innerHTML == undefined) ? "" : the("txtFUM").innerHTML
    the("impresionEdadGestacional").innerHTML =  (the("txtEG").innerHTML == undefined) ? "" : the("txtEG").innerHTML

    the("impresionPlacenta").innerHTML =  (the("placenta").value == undefined) ? "" : the("placenta").value
    the("impresionLiquido").innerHTML =  (the("liquido").value == undefined) ? "" : the("liquido").value
    the("impresionFeto").innerHTML =  (the("fetoGemelar").value == undefined) ? "" : the("fetoGemelar").value + " " + the("fetoEstado").value

    the("impresionFCF").innerHTML =  (the("fcf").value == undefined) ? "" : the("fcf").value

    the("impDBP").innerHTML =  (the("dbp").value == undefined) ? "" : the("dbp").value
    the("impDBPG").innerHTML =  (the("dbp").value == undefined) ? "" : oldProgress(dbp.calcular(the("eg").value, the("dbp").value))

    the("impCC").innerHTML =  (the("cc").value == undefined) ? "" : the("cc").value
    the("impCCG").innerHTML =  (the("cc").value == undefined) ? "" : oldProgress(cc.calcular(the("eg").value, the("cc").value))

    the("impCA").innerHTML =  (the("ca").value == undefined) ? "" : the("ca").value
    the("impCAG").innerHTML =  (the("ca").value == undefined) ? "" : oldProgress(ca.calcular(the("eg").value, the("ca").value))

    the("impLF").innerHTML =  (the("lf").value == undefined) ? "" : the("lf").value
    the("impLFG").innerHTML =  (the("lf").value == undefined) ? "" : oldProgress(lf.calcular(the("eg").value, the("lf").value))

    the("impPFE").innerHTML =  (the("pfe").value == undefined) ? "" : the("pfe").value
    let _pfe = psohdlk.calcular(the("cc").value, the("ca").value, the("lf").value)
    the("impPFEG").innerHTML =  (the("pfe").value == undefined) ? "" : oldProgress(pfe.calcular(the("eg").value, _pfe))

    the("impCCCA").innerHTML =  (the("ccca").value == undefined) ? "" : the("ccca").value
    let _ccca = ccca.calcular(+the("cc").value, +the("ca").value);
    the("impCCCAG").innerHTML = (the("ccca").value == undefined) ? "" : oldProgress(ccca.percentil(the("eg").value, _ccca))

    the("impEco").innerHTML = (the("profEcografistaDos").value == undefined) ? "" : the("profEcografistaDos").value

    if (the("obsSegundo").value == ""){
        the("impObs").innerHTML == ""
    }else{
        let tmp = the("obsSegundo").value
        tmp = tmp.replace(/\r?\n/g, "<br>")

        the("impObs").innerHTML = tmp
    }

    if (cV != NaN){
        the("impLC").innerHTML  = the("lc").value + " mm"
        the("impLCTXT").innerHTML = the("lcTxt").innerHTML
    }

}

the("informeEG").onclick = function(){
    construirInformeEG()

    if (window.webkit != undefined){
        if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.toggleMessageHandler) {
            window.webkit.messageHandlers.toggleMessageHandler.postMessage({
                "message": "print"
            });
        }
    } else if (typeof app != 'undefined'){ 
        app.iEG()
    }else{
        window.print()
    }
}

function construirInformeEG(){

    let contenido = '<p> <small> PROTOCOLO ECOGRÁFICO<br/> UNIDAD DE ATENCION<br/> GINECO / OBSTETRICA </small></p><h1 class="text-center border-bottom h5 pb-3" id="impresionTitulo">Determinación ecográfica de edad gestacional sobre las 14 semanas</h1><div class="row"> <div class="col-6"> <p class="mb-0"> <small>Nombre: <span id="impresionNombrePaciente"></span></small> </p></div><div class="col-6"> <p class="mb-0"> <small>Fecha exámen: <span id="impresionFechaExamen"></span></small> </p></div><div class="col-6"> <p> <small>FUR: <span id="impresionFUR"></span></small> </p></div><div class="col-6"> <p> <small>Edad Gestacional: <span id="impresionEdadGestacional"></span></small> </p></div></div><p class="mb-2">DESCRIPCIÓN</p><div class="row"> <div class="col-6"> <p class="mb-0"> <small>Placenta normo insertada: <span id="impresionPlacenta"></span></small> </p></div><div class="col-6"> <p class="mb-0"> <small>Líquido amniótico: <span id="impresionLiquido"></span></small> </p></div><div class="col-6"> <p> <small>Feto: <span id="impresionFeto"></span></small> </p></div><div class="col-6"> <p> <small>FCF: <span id="impresionFCF"></span> x min.</small> </p></div></div><p class="mb-2">BIOMETRÍAS</p><div class="row"> <div class="col-4"> <p class="mb-0"><small>Medida</small></p></div><div class="col-4"><p class="mb-0 text-center">Valor</p></div><div class="col-4"> <p class="mb-0"><small>Rango Percentilar</small></p></div><div class="col-4"> <p class="mb-0"><small>DBP:</small></p></div><div class="col-4"> <p class="mb-0 text-center"> <small><span id="impDBP"></span> mm</small> </p></div><div class="col-4"> <p class="mb-0 text-center"> <small><span id="impDBPG"></span></small> </p></div><div class="col-4"> <p class="mb-0"><small>C. Cráneo:</small></p></div><div class="col-4"> <p class="mb-0 text-center"> <small><span id="impCC"></span> mm</small> </p></div><div class="col-4"> <p class="mb-0 text-center"> <small><span id="impCCG"></span></small> </p></div><div class="col-4"> <p class="mb-0"><small>C. Abdomen:</small></p></div><div class="col-4"> <p class="mb-0 text-center"> <small><span id="impCA"></span> mm</small> </p></div><div class="col-4"> <p class="mb-0 text-center"> <small><span id="impCAG"></span></small> </p></div><div class="col-4"> <p class="mb-0"><small>L. Fémur:</small></p></div><div class="col-4"> <p class="mb-0 text-center"> <small><span id="impLF"></span> mm</small> </p></div><div class="col-4"> <p class="mb-0 text-center"> <small><span id="impLFG"></span></small> </p></div><div class="col-4"> <p class="mb-0"><small>L. Húmero:</small></p></div><div class="col-4"> <p class="mb-0 text-center"> <small><span id="impLH"></span></small> </p></div><div class="col-4"> <p class="mb-0 text-center"> <small><span id="impLHG"></span></small> </p></div><div class="col-4"> <p class="mb-0"><small>D. Cerebelo Transverso:</small></p></div><div class="col-4"> <p class="mb-0 text-center"> <small><span id="impC"></span></small> </p></div><div class="col-4"> <p class="mb-0 text-center"> <small><span id="impCG"></span></small> </p></div><div class="col-4 border-top border-bottom"> <p class="mb-0"><small>EG promedio de biometrías*</small></p></div><div class="col-4 border-top border-bottom"> <p class="mb-0 text-center"> <small><span id="impEGProm"></span></small> </p></div><div class="col-4  border-top border-bottom"></div><div class="col-12"> <p class="mb-0"><small><small>* La app excluye la C. Abdominal, inicialmente considera solo Cráneo y Fémur. Adicionalmente Humero y Cerebelo.</small></small></p></div></div>'
    contenido += '</div><div class="row mt-2"> <div class="col-12"> <p class="mb-0"><small><strong>Observaciones:</strong></small></p></div><div class="col-12"><p class="mb-0" id="impObs"></p></div></div><hr/><div class="row"> <div class="col-6"></div><div class="col-6"> <p class="mb-0"> <small>Profesional ecografista: <span id="impEco"></span></small> </p></div></div><hr class="mt-0"/><p><small><small>* Determinación de edad gestacional según criterios Hadlock FP. Deter RL., Harris RB Radiology 152:497-501, 1<br>** Medición de líquido amniótico (BVM), según Magann EF. Sanderson M. Martin JN y col. Am J Obstet Gynecol 1982: 1581, 2000</small></small></p><p><small><strong>La aplicación tiene por objetivo favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento.</strong></small> </p>'

    the("impresion").innerHTML = contenido

    the("impresionNombrePaciente").innerHTML = (the("nombreInformeEG").value == undefined) ? "" : the("nombreInformeEG").value
    the("impresionFechaExamen").innerHTML =  humanDate()
    the("impresionFUR").innerHTML =  (the("txtFUM").innerHTML == undefined) ? "" : the("txtFUM").innerHTML
    the("impresionEdadGestacional").innerHTML =  (the("txtEG").innerHTML == undefined) ? "" : the("txtEG").innerHTML

    the("impresionPlacenta").innerHTML =  (the("placentaEG").value == undefined) ? "" : the("placentaEG").value
    the("impresionLiquido").innerHTML =  (the("liquidoEG").value == undefined) ? "" : the("liquidoEG").value
    the("impresionFeto").innerHTML =  (the("fetoGemelarEG").value == undefined) ? "" : the("fetoGemelarEG").value + " " + the("fetoEstadoEG").value

    the("impresionFCF").innerHTML =  (the("fcfEG").value == undefined) ? "" : the("fcfEG").value

    the("impDBP").innerHTML =  (the("dbp").value == undefined) ? "" : the("dbp").value
    the("impDBPG").innerHTML =  (the("dbp").value == undefined) ? "" : oldProgress(dbp.calcular(the("eg").value, the("dbp").value))

    the("impCC").innerHTML =  (the("cc").value == undefined) ? "" : the("cc").value
    the("impCCG").innerHTML =  (the("cc").value == undefined) ? "" : oldProgress(cc.calcular(the("eg").value, the("cc").value))

    the("impCA").innerHTML =  (the("ca").value == undefined) ? "" : the("ca").value
    the("impCAG").innerHTML =  (the("ca").value == undefined) ? "" : oldProgress(ca.calcular(the("eg").value, the("ca").value))

    the("impLF").innerHTML =  (the("lf").value == undefined) ? "" : the("lf").value
    the("impLFG").innerHTML =  (the("lf").value == undefined) ? "" : oldProgress(lf.calcular(the("eg").value, the("lf").value))

    the("impLH").innerHTML =  (the("lh").value == undefined) ? "" : the("lh").value
    the("impLHG").innerHTML =  (the("lh").value == undefined) ? "" : oldProgress(lh.calcular(the("eg").value, the("lh").value))

    the("impC").innerHTML =  (the("cb").value == undefined) ? "" : the("cb").value
    the("impCG").innerHTML =  (the("cb").value == undefined) ? "" : oldProgress(cb.calcular(the("eg").value, the("cb").value))

    the("impEGProm").innerHTML =  (the("egNewSegundo").innerHTML == undefined) ? "" : the("egNewSegundo").innerHTML + " Semanas"

    the("impEco").innerHTML = (the("profEcografistaEG").value == undefined) ? "" : the("profEcografistaEG").value
    the("impObs").innerHTML = (the("obsSegundoEG").value == "") ? "" : the("obsSegundoEG").value.replace(/\r?\n/g, "<br>")
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

    the("impresion").innerHTML = contenido

    the("impNombrePaciente").innerHTML = (the("nombreInformeDoppler").value == undefined) ? "" : the("nombreInformeDoppler").value
    the("impFechaExamen").innerHTML =  humanDate()
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

    value = (isNumber(value)) ? (Number.isInteger(value)) ? value : Math.trunc(value) : 0;

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