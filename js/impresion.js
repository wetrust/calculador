import { fechas } from "./functiones";

document.getElementById("informeCrecimiento").onclick = function(){
    construirInformeCrecimiento()

    if (window.webkit != undefined){
        if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.toggleMessageHandler) {
            window.webkit.messageHandlers.toggleMessageHandler.postMessage({
                "message": "print"
            });
        }
    } else if (app != undefined){
        app.imprimir()
    }else{
        window.print()
    }
}

function construirInformeCrecimiento(){
    let fexamen = document.getElementById("fexamen").value
    fexamen = fexamen.split("-");
    fexamen = fexamen[2] + "-" +fexamen[1] + "-" +fexamen[0]

    document.getElementById("impresionNombrePaciente").innerHTML = document.getElementById("nombreInformeCrecimiento").value
    document.getElementById("impresionFechaExamen").innerHTML =  fexamen
    document.getElementById("impresionFUR").innerHTML =  document.getElementById("txtFUM").value
    document.getElementById("impresionEdadGestacional").innerHTML =  document.getElementById("impresionNombrePaciente").value
    document.getElementById("impresionPlacenta").innerHTML =  document.getElementById("placenta").value
    document.getElementById("impresionLiquido").innerHTML =  document.getElementById("liquido").value
    document.getElementById("impresionFeto").innerHTML =  document.getElementById("fetoGemelar").value + " " + document.getElementById("fetoEstado").value
    document.getElementById("impresionFCF").innerHTML =  document.getElementById("fcf").value
    document.getElementById("impresionDBP").innerHTML =  document.getElementById("dbp").value
    document.getElementById("impresionDBPPCT").innerHTML =  document.getElementById("dbpPct").value
    document.getElementById("impresionCC").innerHTML =  document.getElementById("cc").value
    document.getElementById("impresionCCPCT").innerHTML =  document.getElementById("ccPct").value
    document.getElementById("impresionCA").innerHTML =  document.getElementById("ca").value
    document.getElementById("impresionCAPCT").innerHTML =  document.getElementById("caPct").value
    document.getElementById("impresionLF").innerHTML =  document.getElementById("lf").value
    document.getElementById("impresionLFPCT").innerHTML =  document.getElementById("lfPct").value
    document.getElementById("impresionPFE").innerHTML =  document.getElementById("pfe").value
    document.getElementById("impresionPFEPCT").innerHTML =  document.getElementById("pfePct").value
    document.getElementById("impresionCCCA").innerHTML =  document.getElementById("ccca").value
    document.getElementById("impresionCCCAPCT").innerHTML = document.getElementById("cccaPct").value

}