import { make, the, inputDate, humanDate } from './wetrust.js';
import { fechas } from './functiones.js';


the("goSegundoInformeNo").onchange = function() {
	the("protocoloInformeCrecimiento").classList.add("d-none");
};

the("goSegundoInformeSi").onchange = function() {
	the("protocoloInformeCrecimiento").classList.remove("d-none");
};

the("informeCrecimiento").onclick = function(){
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

    console.log(app)
}