import { make, the, inputDate, humanDate } from './wetrust.js';
import { fechas } from './functiones.js';


the("goSegundoInformeNo").onchange = function() {
	the("protocoloInformeCrecimiento").classList.add("d-none");
};

the("goSegundoInformeSi").onchange = function() {
	the("protocoloInformeCrecimiento").classList.remove("d-none");
};