import { make, the, inputDate, humanDate } from './wetrust.js';
import { fechas } from './functiones.js';
import { lcn, saco, dbp, cc, ca, lf, lh, cb, bvm, ila, ccca, uterinas, umbilical, cerebral, ccp, ductus } from './biometrias.js';
import { pfe } from './pfe.js';
import { p50 } from './p50.js';

var activo = "inicio";
var examenes = ["inicio", "examenes", "primero", "informePrimero", "examenes", "segundo", "informeSegundo", "examenes", "doppler", "informeDoppler"];
let _fecha = new Date();

the("fexamen").value = inputDate(_fecha);
let _fur = fechas.fur(10, _fecha);
the("fur").value = inputDate(_fur);
the("txtFUM").innerText = humanDate(_fur);
let _fpp = fechas.fpp(_fur);
the("fpp").value = inputDate(_fpp);
the("txtFPP").innerText = humanDate(_fpp);

the("fur").onchange = function() {
	//convertir a fecha
	let _fur = fechas.toDate(this.value);
	//clonar a prelude
	the("txtFUM").innerText = humanDate(_fur);
	//calcular la eg
	let _fexamen = fechas.toDate(the("fexamen").value);
	let eg = fechas.eg(_fur, _fexamen);
	if(eg > 0) {
		let semanas = Math.trunc(eg / 7);
		let dias = Math.trunc(eg - (semanas * 7));
		the("eg").value = semanas;
		the("txtEG").innerHTML = semanas + " semanas";
		the("dias").value = dias;
	} else {
		the("eg").value = 0;
		the("txtEG").innerHTML = "0 semanas";
		the("dias").value = 0;
	}
	//calcular fpp
	let _fpp = fechas.fpp(_fur);
	//set en input y prelude
	the("fpp").value = inputDate(_fpp);
	the("txtFPP").innerText = humanDate(_fpp);
};

the("eg").onchange = function() {
	let semanas = parseInt(this.value);
	let dias = parseInt(the("dias").value);
	semanas = 7 * semanas;
	let _fexamen = fechas.toDate(the("fexamen").value);
	_fexamen.setDate(_fexamen.getDate() - (semanas + dias));
	the("fur").value = inputDate(_fexamen);
	the("fur").onchange();
};

the("fexamen").onchange = function() {
	//convertir a fecha
	let _fur = fechas.toDate(the("fur").value);
	//calcular la eg
	let _fexamen = fechas.toDate(this.value);
	let eg = fechas.eg(_fur, _fexamen);
	if(eg > 0) {
		let semanas = Math.trunc(eg / 7);
		let dias = Math.trunc(eg - (semanas * 7));
		the("eg").value = semanas;
		the("txtEG").innerHTML = semanas + " semanas";
		the("dias").value = dias;
	} else {
		the("eg").value = 0;
		the("txtEG").innerHTML = "0 semanas";
		the("dias").value = 0;
	}
}

the("fpp").onchange = function() {
	//convertir a fecha
	let _fpp = fechas.toDate(this.value);
	//clonar a prelude
	the("txtFPP").innerText = humanDate(_fpp);
	//calcular fur
	let _fur = fechas.fppToFUR(_fpp);
	//set en input y prelude
	the("fur").value = inputDate(_fur);
	the("txtFUM").innerText = humanDate(_fur);
	//calcular la eg
	let _fexamen = fechas.toDate(the("fexamen").value);
	let eg = fechas.eg(_fur, _fexamen);
	if(eg > 0) {
		let semanas = Math.trunc(eg / 7);
		let dias = Math.trunc(eg - (semanas * 7));
		the("eg").value = semanas;
		the("txtEG").innerHTML = semanas + " semanas";
		the("dias").value = dias;
	} else {
		the("eg").value = 0;
		the("txtEG").innerHTML = "0 semanas";
		the("dias").value = 0;
	}
}

//controlador de los keypress
let losInput = document.getElementsByTagName("input");
for(let i = 0; i < losInput.length; i++) {
	losInput[i].onkeypress = function(e) {
		var key_enter = ["lcn", "edadPrimeroAjustarNo", "", "dbp", "cc", "ca", "lf", "bvm", "ila", "crecimientoFetalG", "", "lh", "cb", "", "aud", "aui", "au", "acm", "dv"];
		if(e.which == 13) {
			e.preventDefault();
			if(key_enter.includes(this.id) == true) {
				let pos = key_enter.indexOf(this.id);
				the(key_enter[pos + 1]).focus();
			}
		}
	};
}

//controlador de fcf
for (var i = 0; i < 181; i++) {
	let semanas = the("fcf");
	let opt = document.createElement('option');
	opt.appendChild( document.createTextNode(i) );
	opt.value = i;
	semanas.appendChild(opt);
}

the("fcf").value = 140

the("goInicio").onclick = function() {
	window.location.href = 'index.html';
};

//controlador de botones
the("goPrelude").onclick = function() {
	the("inicio").classList.add("d-none");
	the("prelude").classList.remove("d-none");
	the("examenes").classList.remove("d-none");
	activo = "examenes";
}

the("goPrimero").onclick = function() {
	the("examenes").classList.add("d-none");
	the("primero").classList.remove("d-none");
	activo = "primero";
}

the("goPrimeroInforme").onclick = function() {
	the("primero").classList.add("d-none");
	the("informePrimero").classList.remove("d-none");
	activo = "informePrimero";
}

the("goSegundo").onclick = function() {
	the("examenes").classList.add("d-none");
	the("segundo").classList.remove("d-none");
	activo = "segundo";
}

the("goSegundoInforme").onclick = function() {
	the("segundo").classList.add("d-none");
	the("informeSegundo").classList.remove("d-none");
	activo = "informeSegundo";
}

the("goDoppler").onclick = function() {
	the("examenes").classList.add("d-none");
	the("doppler").classList.remove("d-none");
	activo = "doppler";
}

the("goDopplerInforme").onclick = function() {
	the("doppler").classList.add("d-none");
	the("informeDoppler").classList.remove("d-none");
	activo = "informeDoppler";
}

the("back").onclick = back;
//primer trimestre
the("lcn").onkeyup = function() {
	let _lcn = lcn.calcular(this.value);
	the("lcneg").value = _lcn + " semanas";
	if(_lcn > 0) {
		//verificar precisión
		let _fexamen = fechas.toDate(the("fexamen").value);
		let _ilcn = Math.trunc(_lcn);
		let _fur = fechas.fur(_ilcn, _fexamen);
		_fur.setDate(_fur.getDate() - (_ilcn - _lcn));

		the("furlcn").innerHTML = humanDate(_fur);
		the("eglcn").innerHTML = _lcn + " sem";

		the("determinacionLCNEg").innerHTML = "Edad gestacional : " + _lcn + " sem";
		let _dias = the("eg").value - _lcn;
		_dias = (isNaN(_dias) == false) ? Math.trunc(_dias * 7) : 0;
		the("lcnDiferenciaDias").innerHTML = _dias;
		the("fpplcn").innerText = humanDate(fechas.fpp(_fur));
		the("lcnf").classList.remove("d-none");
	} else {
		the("lcnf").classList.add("d-none");
	}
};

the("graphLCN").onclick = function() {
	Highcharts.chart('gLCN', {
		title: {
			text: '',
			x: -20
		},
		xAxis: {
			categories: ['6', '7', '8', '9', '10', '11', '12', '13', '14', '15']
		},
		yAxis: {
			title: {
				text: 'LCN milimetros'
			},
			tickPositions: [2, 11, 22, 33, 44, 55, 66, 77, 88, 99, 110]
		},
		credits: {
			enabled: false
		},
		colors: ['#313131', '#313131', '#313131'],
		plotOptions: {
			series: {
				enableMouseTracking: false
			}
		},
		series: [{
			name: '(-) 2DE',
			type: "line",
			marker: {
				enabled: false
			},
			data: [2.6, 7.7, 14, 20.5, 26.2, 35.5, 46.8, 58.2, 69.8, 80.2],
			dashStyle: 'shortdot'
		}, {
			name: 'Media',
			type: "line",
			marker: {
				enabled: false
			},
			data: [3.8, 8.9, 15.4, 22.5, 29.5, 40.5, 52.9, 66.5, 79.0, 90.1]
		}, {
			name: '(+) 2DE',
			type: "line",
			marker: {
				enabled: false
			},
			data: [5.3, 10.4, 17.1, 24.9, 33.2, 46.4, 60.8, 75.7, 89.1, 100.1],
			dashStyle: 'shortdot'
		}, {
			type: "line",
			name: 'Longitud Céfalo Nalga (LCN)',
			dashStyle: "Dot",
			marker: {
				symbol: 'square'
			},
			lineWidth: 0,
			data: (function() {
				// generate an array of random data
				var data = [];
				var egLcn2 = the("eg").value;
				var lcn = the("lcn").value;
				lcn = lcn.toString();
				lcn = lcn.replace(",", ".");
				lcn = parseFloat(lcn);
				var lcnegx = [];
				var flag = false;
				lcnegx[1] = 6;
				lcnegx[2] = 7;
				lcnegx[3] = 8;
				lcnegx[4] = 9;
				lcnegx[5] = 10;
				lcnegx[6] = 11;
				lcnegx[7] = 12;
				lcnegx[8] = 13;
				lcnegx[9] = 14;
				lcnegx[10] = 14;
				for(let i = 1; i <= 10; i++) {
					if(lcnegx[i] >= egLcn2) {
						if(flag == false) {
							data.push({
								y: lcn,
							});
							flag = true;
						} else {
							data.push({
								y: 0,
							});
						}
					} else {
						data.push({
							y: 0,
						});
					}
				}
				return data;
			}())
		}]
	});
};

the("crecimientoFetalG").onclick = function() {
	Highcharts.chart('pesoV', {
		title: {
			text: 'Peso Fetal Estimado grs. *',
			x: -20 //center
		},
		subtitle: {
			text: 'Kilogramos',
			x: -20
		},
		plotOptions: {
			series: {
				enableMouseTracking: false,
				pointInterval: 1
			}
		},
		yAxis: {
			title: {
				text: 'Kilogramos'
			},
			tickPositions: [100, 560, 1020, 1480, 1940, 2400, 2860, 3320, 3780, 4340, 4900]
		},
		colors: ['#313131', '#313131', '#313131'],
		xAxis: {
			categories: ['16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
		},
		credits: {
			enabled: false
		},
		series: [{
			type: "line",
			name: 'Pct 3',
			dashStyle: "Dot",
			marker: {
				enabled: false
			},
			data: [110, 136, 167, 205, 248, 299, 359, 426, 503, 589, 685, 791, 908, 1034, 1169, 1313, 1465, 1622, 1783, 1946, 2110, 2271, 2427, 2576, 2714]
		}, {
			type: "line",
			name: 'Pct 10',
			marker: {
				enabled: false
			},
			data: [121, 150, 185, 227, 275, 331, 398, 471, 556, 652, 758, 876, 1004, 1145, 1294, 1453, 1621, 1794, 1973, 2154, 2335, 2513, 2686, 2851, 2985]
		}, {
			type: "line",
			name: 'Pct 90',
			marker: {
				enabled: false
			},
			data: [171, 212, 261, 319, 387, 467, 559, 665, 784, 918, 1068, 1234, 1416, 1613, 1824, 2049, 2285, 2530, 2781, 3036, 3291, 3543, 3786, 4019, 4234]
		}, {
			type: "line",
			name: 'Pct 97',
			dashStyle: "Dot",
			marker: {
				enabled: false,
			},
			data: [183, 226, 279, 341, 414, 499, 598, 710, 838, 981, 1141, 1319, 1513, 1724, 1949, 2189, 2441, 2703, 2971, 3244, 3516, 3785, 4045, 4294, 4474]
		}, {
			type: "line",
			name: 'Peso',
			dashStyle: "Dot",
			marker: {
				symbol: 'square'
			},
			lineWidth: 0,
			data: (function() {
				var data = [];
				var edadGest = the("eg").value;
				for(let i = 16; i < edadGest; i++) {
					data.push({
						y: 0,
					});
				}
				data.push({
					y: parseFloat(the("pfe").dataset.value),
				});
				for(let i = edadGest + 1; i <= 39; i++) {
					data.push({
						y: 0,
					});
				}
				return data;
			}())
		}]
	});
	Highcharts.chart('caV', {
		title: {
			text: 'Perímetro Abdominal **',
			x: -20
		},
		subtitle: {
			text: 'Milimetros (mm)',
			x: -20
		},
		plotOptions: {
			series: {
				enableMouseTracking: false
			}
		},
		yAxis: {
			title: {
				text: 'Milimetros (mm)'
			},
			tickPositions: [20, 60, 100, 140, 180, 220, 260, 300, 340, 400]
		},
		colors: ['#313131', '#313131', '#313131'],
		xAxis: {
			categories: ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
		},
		credits: {
			enabled: false
		},
		series: [{
			type: "line",
			name: 'Pct. 3',
			marker: {
				enabled: false
			},
			data: [40, 50, 60, 72, 84, 97, 107, 119, 131, 141, 151, 161, 171, 181, 191, 200, 209, 218, 227, 236, 245, 253, 261, 269, 277, 285, 292, 299, 307]
		}, {
			type: "line",
			name: 'Pct 97',
			marker: {
				enabled: false
			},
			data: [68, 78, 88, 101, 112, 127, 141, 155, 168, 183, 196, 209, 223, 235, 248, 260, 271, 284, 295, 306, 318, 329, 339, 349, 359, 370, 380, 389, 399]
		}, {
			type: "line",
			name: 'CA',
			dashStyle: "Dot",
			marker: {
				symbol: 'square'
			},
			lineWidth: 0,
			data: (function() {
				var data = [];
				var edadGest = the("eg").value;
				for(let i = 12; i < edadGest; i++) {
					data.push({
						y: 0,
					});
				}
				var ca = the("ca").value;
				ca = ca.toString();
				ca = ca.replace(",", ".");
				ca = parseFloat(ca);
				data.push({
					y: ca,
				});
				for(let i = edadGest + 1; i <= 39; i++) {
					data.push({
						y: 0,
					});
				}
				return data;
			}())
		}]
	});
	Highcharts.chart('bvmV', {
		chart: {
			height: 250
		},
		title: {
			text: 'BVM de Líquido Amniótico ***',
			x: -20,
			style: {
				fontSize: '14px'
			}
		},
		plotOptions: {
			series: {
				enableMouseTracking: false
			}
		},
		legend: {
			itemStyle: {
				fontSize: '10px',
				fontWeight: 'normal'
			}
		},
		yAxis: {
			title: {
				text: 'Milimetros (mm)'
			},
			tickPositions: [5, 16, 27, 38, 49, 60, 71, 82, 93, 104]
		},
		colors: ['#313131', '#313131', '#313131'],
		xAxis: {
			categories: ['16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
		},
		credits: {
			enabled: false
		},
		series: [{
			type: "line",
			name: 'Pct. 5',
			dashStyle: "Dot",
			marker: {
				enabled: false
			},
			data: [23, 25, 27, 28, 29, 29, 30, 30, 30, 30, 30, 30, 30, 29, 29, 29, 29, 29, 28, 28, 27, 26, 24, 23, 21]
		}, {
			type: "line",
			name: 'Pct. 95',
			dashStyle: "Dot",
			marker: {
				enabled: false
			},
			data: [59, 62, 64, 66, 67, 68, 68, 68, 68, 68, 68, 69, 69, 69, 69, 70, 71, 72, 72, 72, 71, 70, 68, 66, 62]
		}, {
			type: "line",
			name: 'BVM',
			dashStyle: "Dot",
			marker: {
				symbol: 'square'
			},
			lineWidth: 0,
			data: (function() {
				var data = [];
				var edadGest = the("eg").value;
				for(let i = 16; i < edadGest; i++) {
					data.push({
						y: 0,
					});
				}
				data.push({
					y: parseFloat(the("bvm").value),
				});
				for(let i = edadGest + 1; i <= 39; i++) {
					data.push({
						y: 0,
					});
				}
				return data;
			}())
		}]
	});
	Highcharts.chart('ilaV', {
		title: {
			text: 'ILA',
			x: -20
		},
		subtitle: {
			text: 'Milimetros (mm)',
			x: -20
		},
		plotOptions: {
			series: {
				enableMouseTracking: false
			}
		},
		yAxis: {
			title: {
				text: 'Milimetros (mm)'
			},
			tickPositions: [20, 52, 84, 116, 148, 180, 212, 244, 276, 308]
		},
		colors: ['#313131', '#313131', '#313131'],
		xAxis: {
			categories: ['16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
		},
		credits: {
			enabled: false
		},
		series: [{
			type: "line",
			name: 'Pct. 5',
			dashStyle: "Dot",
			marker: {
				enabled: false
			},
			data: [79, 83, 87, 90, 93, 95, 97, 98, 98, 97, 97, 95, 94, 92, 90, 88, 86, 83, 81, 79, 77, 75, 73, 72, 71]
		}, {
			type: "line",
			name: 'Pct. 95',
			dashStyle: "Dot",
			marker: {
				enabled: false
			},
			data: [185, 194, 200, 204, 208, 212, 214, 217, 218, 221, 223, 226, 228, 231, 234, 238, 242, 245, 248, 249, 249, 244, 239, 226, 214]
		}, {
			type: "line",
			name: 'ILA',
			dashStyle: "Dot",
			marker: {
				symbol: 'square'
			},
			lineWidth: 0,
			data: (function() {
				var data = [];
				var edadGest = the("eg").value;
				for(let i = 16; i < edadGest; i++) {
					data.push({
						y: 0,
					});
				}
				data.push({
					y: parseInt(the("ila").value),
				});
				for(let i = edadGest + 1; i <= 39; i++) {
					data.push({
						y: 0,
					});
				}
				return data;
			}())
		}]
	});
	Highcharts.chart('cccaV', {
		title: {
			text: 'Relación Cráneo / Abdómen *',
			x: -20 //center
		},
		subtitle: {
			text: '',
			x: -20
		},
		plotOptions: {
			series: {
				enableMouseTracking: false
			}
		},
		yAxis: {
			title: {
				text: 'Valor cuociente'
			},
			tickPositions: [0.75, 0.82, 0.88, 0.95, 1, 1.07, 1.14, 1.2, 1.27, 1.33]
		},
		colors: ['#313131', '#313131', '#313131'],
		xAxis: {
			categories: ['15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
		},
		credits: {
			enabled: false
		},
		series: [{
			type: "line",
			name: 'Pct. 3',
			marker: {
				enabled: false
			},
			data: [1.1, 1.09, 1.08, 1.07, 1.06, 1.06, 1.05, 1.04, 1.03, 1.02, 1.01, 1, 1, 0.99, 0.98, 0.97, 0.96, 0.95, 0.95, 0.94, 0.93, 0.92, 0.91, 0.9, 0.89, 0.89]
		}, {
			type: "line",
			name: 'Pct. 97',
			marker: {
				enabled: false
			},
			data: [1.29, 1.28, 1.27, 1.26, 1.25, 1.24, 1.24, 1.23, 1.22, 1.21, 1.2, 1.19, 1.18, 1.18, 1.17, 1.17, 1.16, 1.15, 1.14, 1.13, 1.12, 1.11, 1.1, 1.09, 1.08, 1.08]
		}, {
			type: "line",
			name: 'CC/CA',
			dashStyle: "Dot",
			marker: {
				symbol: 'square'
			},
			lineWidth: 0,
			data: (function() {
				var data = [];
				var edadGest = the("eg").value;
				for(let i = 16; i <= edadGest; i++) {
					data.push({
						y: 0,
					});
				}
				data.push({
					y: parseFloat(the("ccca").value),
				});
				for(let i = edadGest + 1; i <= 39; i++) {
					data.push({
						y: 0,
					});
				}
				return data;
			}())
		}]
	});
};

the("edadGestacionalG").onclick = function() {
	//para impedir errores de visualizacion
	//es necesario solo mostrar 10 semanas 
	//por lo cual hay que cortar los gráficos
	//tomando una porción de la tabla
	let _ccC = ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40'];
	let _cc3 = [70, 80, 90, 100, 113, 126, 137, 149, 161, 172, 183, 194, 204, 214, 224, 233, 242, 250, 258, 267, 274, 280, 287, 293, 299, 303, 308, 311, 315];
	let _cc97 = [90, 100, 111, 124, 136, 150, 165, 179, 193, 206, 219, 232, 243, 256, 268, 279, 290, 300, 310, 319, 328, 336, 343, 351, 358, 363, 368, 373, 377];
	let _eg = the("eg").value;
	//restar a la EG 10
	_eg = +_eg - 12;
	//porcionar el array 5 elementos antes de la eg y 4 elementos despues de la eg
	//límite 0 y límite 30
	let _lInicial = _eg - 5;
	let _lFinal = _eg + 5;
	_lInicial = (_lInicial < 0) ? 0 : _lInicial;
	_lFinal = (_lFinal > 28) ? 28 : _lFinal;
	_ccC = _ccC.slice(_lInicial, _lFinal);
	_cc3 = _cc3.slice(_lInicial, _lFinal);
	_cc97 = _cc97.slice(_lInicial, _lFinal);
	Highcharts.chart('ccVE', {
		title: {
			text: 'Perímetro de Cráneo ** ',
			x: -20
		},
		subtitle: {
			text: 'Milimetros (mm)',
			x: -20
		},
		plotOptions: {
			series: {
				enableMouseTracking: false
			}
		},
		yAxis: {
			title: {
				text: 'Milimetros (mm)'
			},
			tickPositions: [30, 72, 114, 156, 198, 240, 282, 324, 366, 408]
		},
		colors: ['#313131', '#313131', '#313131'],
		xAxis: {
			categories: _ccC
		},
		credits: {
			enabled: false
		},
		series: [{
			type: "line",
			name: 'Pct. 3',
			marker: {
				enabled: false
			},
			data: _cc3
		}, {
			type: "line",
			name: 'Pct. 97',
			marker: {
				enabled: false
			},
			data: _cc97
		}, {
			type: "line",
			name: 'CC',
			dashStyle: "Dot",
			marker: {
				symbol: 'square'
			},
			lineWidth: 0,
			data: (function() {
				var data = [];
				for(let i = _lInicial; i < _eg; i++) {
					data.push({
						y: 0,
					});
				}
				var cc = the("cc").value;
				cc = cc.toString();
				cc = cc.replace(",", ".");
				cc = parseFloat(cc);
				data.push({
					y: cc,
				});
				for(let i = _eg + 1; i < _lFinal; i++) {
					data.push({
						y: 0,
					});
				}
				return data;
			}())
		}]
	});
	//para impedir errores de visualizacion
	//es necesario solo mostrar 10 semanas 
	//por lo cual hay que cortar los gráficos
	//tomando una porción de la tabla
	let _cbC = ['15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40'];
	let _cbd2DE = [12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 26, 27, 29, 30, 31, 33, 36, 37, 38, 40, 40, 40, 41, 42, 44];
	let _cb2DE = [15, 16, 17, 18, 20, 20, 22, 23, 24, 26, 28, 30, 31, 33, 34, 37, 39, 41, 43, 46, 47, 49, 51, 51, 52, 52];
	let _cbu2DE = [18, 18, 19, 20, 22, 23, 25, 26, 27, 30, 32, 34, 34, 37, 38, 41, 43, 46, 48, 53, 56, 58, 60, 62, 62, 62];
	_eg = the("eg").value;
	//restar a la EG 15
	_eg = +_eg - 15;
	//porcionar el array 5 elementos antes de la eg y 4 elementos despues de la eg
	//límite 0 y límite 30
	_lInicial = _eg - 5;
	_lFinal = _eg + 5;
	_lInicial = (_lInicial < 0) ? 0 : _lInicial;
	_lFinal = (_lFinal > 25) ? 25 : _lFinal;
	_cbC = _cbC.slice(_lInicial, _lFinal);
	_cbd2DE = _cbd2DE.slice(_lInicial, _lFinal);
	_cb2DE = _cb2DE.slice(_lInicial, _lFinal);
	_cbu2DE = _cbu2DE.slice(_lInicial, _lFinal);
	Highcharts.chart('cerebeloV', {
		title: {
			text: 'Diámetro de Cerebelo',
			x: -20
		},
		subtitle: {
			text: 'Milimetros (mm)',
			x: -20
		},
		plotOptions: {
			series: {
				enableMouseTracking: false
			}
		},
		yAxis: {
			title: {
				text: 'Milimetros (mm)'
			},
			tickPositions: [5, 10, 20, 30, 40, 50, 60, 70]
		},
		colors: ['#313131', '#313131', '#313131'],
		xAxis: {
			categories: _cbC
		},
		credits: {
			enabled: false
		},
		series: [{
			type: "line",
			name: '-2DE',
			marker: {
				enabled: false
			},
			data: _cbd2DE
		}, {
			type: "line",
			name: 'media',
			marker: {
				enabled: false
			},
			data: _cb2DE
		}, {
			type: "line",
			name: '+2DE',
			marker: {
				enabled: false
			},
			data: _cbu2DE
		}, {
			type: "line",
			name: 'Cerebelo',
			dashStyle: "Dot",
			marker: {
				symbol: 'square'
			},
			lineWidth: 0,
			data: (function() {
				var data = [];
				for(let i = _lInicial; i < _eg; i++) {
					data.push({
						y: 0,
					});
				}
				let cerebelo = the("cb").value;
				cerebelo = cerebelo.toString();
				cerebelo = cerebelo.replace(",", ".");
				cerebelo = parseFloat(cerebelo);
				data.push({
					y: cerebelo,
				});
				for(let i = _eg + 1; i < _lFinal; i++) {
					data.push({
						y: 0,
					});
				}
				return data;
			}())
		}]
	});
	//para impedir errores de visualizacion
	//es necesario solo mostrar 10 semanas 
	//por lo cual hay que cortar los gráficos
	//tomando una porción de la tabla
	let _lfC = ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40'];
	let _lf3 = [6, 9, 12, 14, 17, 20, 22, 25, 27, 30, 32, 35, 37, 40, 42, 45, 47, 49, 52, 54, 56, 58, 59, 61, 62, 64, 65, 66, 67];
	let _lf97 = [12, 15, 18, 21, 24, 28, 31, 34, 38, 41, 44, 47, 50, 53, 55, 57, 60, 62, 65, 67, 70, 71, 73, 75, 77, 79, 80, 81, 82];
	_eg = the("eg").value;
	//restar a la EG 15
	_eg = +_eg - 12;
	//porcionar el array 5 elementos antes de la eg y 4 elementos despues de la eg
	//límite 0 y límite 30
	_lInicial = _eg - 5;
	_lFinal = _eg + 5;
	_lInicial = (_lInicial < 0) ? 0 : _lInicial;
	_lFinal = (_lFinal > 28) ? 28 : _lFinal;
	_lfC = _lfC.slice(_lInicial, _lFinal);
	_lf3 = _lf3.slice(_lInicial, _lFinal);
	_lf97 = _lf97.slice(_lInicial, _lFinal);
	Highcharts.chart('lfV', {
		title: {
			text: 'Largo Femoral',
			x: -20
		},
		subtitle: {
			text: 'Milimetros (mm)',
			x: -20
		},
		plotOptions: {
			series: {
				enableMouseTracking: false
			}
		},
		yAxis: {
			title: {
				text: 'Milimetros (mm)'
			},
			tickPositions: [5, 10, 20, 30, 40, 50, 60, 70, 80, 90]
		},
		colors: ['#313131', '#313131', '#313131'],
		xAxis: {
			categories: _lfC
		},
		credits: {
			enabled: false
		},
		series: [{
			type: "line",
			name: 'Pct. 3',
			marker: {
				enabled: false
			},
			data: _lf3
		}, {
			type: "line",
			name: 'Pct. 97',
			marker: {
				enabled: false
			},
			data: _lf97
		}, {
			type: "line",
			name: 'LF',
			dashStyle: "Dot",
			marker: {
				symbol: 'square'
			},
			lineWidth: 0,
			data: (function() {
				let data = [];
				for(let i = _lInicial; i < _eg; i++) {
					data.push({
						y: 0,
					});
				}
				let lf = the("lf").value;
				lf = lf.toString();
				lf = lf.replace(",", ".");
				lf = parseFloat(lf);
				data.push({
					y: lf,
				});
				for(let i = _eg + 1; i < _lFinal; i++) {
					data.push({
						y: 0,
					});
				}
				return data;
			}())
		}]
	});
	//para impedir errores de visualizacion
	//es necesario solo mostrar 10 semanas 
	//por lo cual hay que cortar los gráficos
	//tomando una porción de la tabla
	let _lhC = ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40'];
	let _lh5 = [4.8, 7.6, 10.3, 13.1, 15.8, 18.5, 21.2, 23.8, 26.3, 28.8, 31.2, 33.5, 35.7, 37.9, 39.9, 41.9, 43.7, 45.5, 47.2, 48.9, 50.4, 52.1, 53.4, 54.8, 56.2, 57.6, 59.8, 60.4, 61.9];
	let _lh95 = [12.3, 15.1, 17.9, 20.7, 23.5, 26.3, 29.1, 31.6, 34.2, 36.7, 39.2, 41.6, 43.9, 46.1, 48.1, 50.1, 52.1, 53.9, 55.6, 57.3, 58.9, 60.5, 62.1, 63.5, 64.9, 66.4, 67.8, 69.3, 70.8];
	_eg = the("eg").value;
	//restar a la EG 15
	_eg = +_eg - 12;
	//porcionar el array 5 elementos antes de la eg y 4 elementos despues de la eg
	//límite 0 y límite 30
	_lInicial = _eg - 5;
	_lFinal = _eg + 5;
	_lInicial = (_lInicial < 0) ? 0 : _lInicial;
	_lFinal = (_lFinal > 28) ? 28 : _lFinal;
	_lhC = _lhC.slice(_lInicial, _lFinal);
	_lh5 = _lh5.slice(_lInicial, _lFinal);
	_lh95 = _lh95.slice(_lInicial, _lFinal);
	Highcharts.chart('lhV', {
		title: {
			text: 'Largo Humeral',
			x: -20
		},
		subtitle: {
			text: 'Milimetros (mm)',
			x: -20
		},
		plotOptions: {
			series: {
				enableMouseTracking: false
			}
		},
		yAxis: {
			title: {
				text: 'Milimetros (mm)'
			},
			tickPositions: [5, 10, 20, 30, 40, 50, 60, 70, 80]
		},
		colors: ['#313131', '#313131', '#313131'],
		xAxis: {
			categories: _lhC
		},
		credits: {
			enabled: false
		},
		series: [{
			type: "line",
			name: 'Pct. 5',
			marker: {
				enabled: false
			},
			data: _lh5
		}, {
			type: "line",
			name: 'Pct. 95',
			marker: {
				enabled: false
			},
			data: _lh95
		}, {
			type: "line",
			name: 'Humero',
			dashStyle: "Dot",
			marker: {
				symbol: 'square'
			},
			lineWidth: 0,
			data: (function() {
				var data = [];
				for(let i = _lInicial; i < _eg; i++) {
					data.push({
						y: 0,
					});
				}
				var lh = the("lh").value;
				lh = lh.toString();
				lh = lh.replace(",", ".");
				lh = parseFloat(lh);
				data.push({
					y: lh,
				});
				for(let i = _eg + 1; i < _lFinal; i++) {
					data.push({
						y: 0,
					});
				}
				return data;
			}())
		}]
	});
};

the("saco").onkeyup = function() {
	let _saco = saco.calcular(this.value);
	the("sacoeg").value = _saco + " semanas";
	if(_saco > 0) {
		//calcular Fur según LCN
		let _fecha = new Date();
		_fecha.setTime(Date.parse(the("fexamen").value));
		//calcular la fut con la parte entera del lcn, despues agregar los días
		let _isaco = Math.trunc(_saco);
		let _fur = fechas.fur(+_saco, _fecha);
		_fur.setDate(_fur.getDate() - (_isaco - _saco));
		the("fursaco").innerText = humanDate(_fur);
		the("egsaco").innerText = _saco + " sem";
		the("determinacionSacoEg").innerHTML = "Edad gestacional : " + _saco + " sem";
		the("fppsaco").innerText = humanDate(fechas.fpp(_fur));
		the("sacof").classList.remove("d-none");
	} else {
		the("sacof").classList.add("d-none");
	}
};

the("edadPrimeroNo").onchange = function() {
	the("determinacionLCN").classList.add("d-none");
	the("determinacionSaco").classList.add("d-none");
	the("ajustePrimero").classList.add("d-none");
};

the("edadPrimeroSi").onchange = function() {
	let _lcn = the("lcn").value;
	let _saco = the("saco").value;
	if(_lcn != "" || +_lcn != 0) {
		the("determinacionLCN").classList.remove("d-none");
		the("ajustePrimero").classList.remove("d-none");
	}
	if(_saco != "" || +_saco != 0) {
		the("determinacionSaco").classList.remove("d-none");
	}
};

the("edadPrimeroAjustarSi").onchange = function() {
	let _furOld = fechas.toDate(the("fur").value);
	let _fppOld = fechas.toDate(the("fpp").value);
	the("furOld").innerHTML = humanDate(_furOld);
	the("egOld").innerHTML = the("eg").value + ", " + the("dias").value;
	the("fppOld").innerHTML = humanDate(_fppOld);

	//calcular Fur según LCN
	let _lcn = lcn.calcular(the("lcn").value);
	let _fexamen = fechas.toDate(the("fexamen").value);
	//calcular la fur con la parte entera del lcn, despues agregar los días
	let _ilcn = Math.trunc(_lcn);
	let _fur = fechas.fur(_ilcn, _fexamen);
	_fur.setDate(_fur.getDate() - (_ilcn - _lcn));
	the("fur").value = inputDate(_fur);
	the("furNew").innerHTML = humanDate(_fur);
	the("egNew").innerHTML = _lcn;
	the("fppNew").innerHTML = humanDate(fechas.fpp(_fur));
	the("fur").onchange();
	the("ajustePrimeroReady").classList.remove("d-none");
};

//Segundo Tercer trimestre
the("dbp").onkeyup = function() {
	let _dbp = dbp.calcular(the("eg").value, +this.value);
	if(_dbp < 0 || _dbp > 99) {
		this.classList.add("is-invalid");
		this.classList.remove("is-valid");
		the("dbpG").parentElement.classList.add("d-none");
		let etiqueta = the("dbpG").parentElement.parentElement.children[0];
		etiqueta.classList.remove("d-none");
		valorPercentil(_dbp, etiqueta);
	} else {
		this.classList.remove("is-invalid");
		this.classList.add("is-valid");
		the("dbpG").parentElement.classList.remove("d-none");
		the("dbpG").parentElement.parentElement.children[0].classList.add("d-none");
	}
	ajustarProgreso(_dbp, "dbpG");
	the("dbpPct").innerHTML = "Pct: " + _dbp;
	calcularP50();
};

the("dbpVisualizador").onclick = function() {
	this.classList.add("d-none");
	the("dbpPercentil").classList.remove("d-none");
};

the("dbpPercentil").onclick = function() {
	this.classList.add("d-none");
	the("dbpVisualizador").classList.remove("d-none");
};

the("cc").onkeyup = function() {
	let _cc = cc.calcular(the("eg").value, +this.value);
	if(_cc < 0 || _cc > 99) {
		this.classList.add("is-invalid");
		this.classList.remove("is-valid");
		the("ccG").parentElement.classList.add("d-none");
		let etiqueta = the("ccG").parentElement.parentElement.children[0];
		etiqueta.classList.remove("d-none");
		valorPercentil(_cc, etiqueta);
	} else {
		this.classList.remove("is-invalid");
		this.classList.add("is-valid");
		the("ccG").parentElement.classList.remove("d-none");
		the("ccG").parentElement.parentElement.children[0].classList.add("d-none");
	}
	ajustarProgreso(_cc, "ccG");
	the("ccPct").innerHTML = "Pct: " + _cc;
	let _pfe = psohdlk(the("cc").value, the("ca").value, the("lf").value);
	the("pfe").value = _pfe + " gramos";
	the("pfe").dataset.value = _pfe;
	ajustarProgreso(pfe.calcular(the("eg").value, _pfe), "pfeG");
	the("pfePct").innerHTML = "Pct: " + pfe.calcular(the("eg").value, _pfe);
	let _ccca = ccca.calcular(+this.value, +the("ca").value);
	the("ccca").value = _ccca;
	ajustarProgreso(ccca.percentil(the("eg").value, _ccca), "cccaG");
	the("cccaPct").innerHTML = "Pct: " + ccca.percentil(the("eg").value, _ccca);
	calcularP50();
};

the("ccVisualizador").onclick = function() {
	this.classList.add("d-none");
	the("ccPercentil").classList.remove("d-none");
};

the("ccPercentil").onclick = function() {
	this.classList.add("d-none");
	the("ccVisualizador").classList.remove("d-none");
};

the("ca").onkeyup = function() {
	let _ca = ca.calcular(the("eg").value, +this.value);
	if(_ca < 0 || _ca > 99) {
		this.classList.add("is-invalid");
		this.classList.remove("is-valid");
		the("caG").parentElement.classList.add("d-none");
		let etiqueta = the("caG").parentElement.parentElement.children[0];
		etiqueta.classList.remove("d-none");
		valorPercentil(_ca, etiqueta);
	} else {
		this.classList.remove("is-invalid");
		this.classList.add("is-valid");
		the("caG").parentElement.classList.remove("d-none");
		the("caG").parentElement.parentElement.children[0].classList.add("d-none");
	}
	ajustarProgreso(_ca, "caG");
	the("caPct").innerHTML = "Pct: " + _ca;
	let _pfe = psohdlk(the("cc").value, the("ca").value, the("lf").value);
	the("pfe").value = _pfe + " gramos";
	the("pfe").dataset.value = _pfe;
	ajustarProgreso(pfe.calcular(the("eg").value, _pfe), "pfeG");
	the("pfePct").innerHTML = "Pct: " + pfe.calcular(the("eg").value, _pfe);
	let _ccca = ccca.calcular(+this.value, +the("ca").value);
	the("ccca").value = _ccca;
	ajustarProgreso(ccca.percentil(the("eg").value, _ccca), "cccaG");
	the("cccaPct").innerHTML = "Pct: " + ccca.percentil(the("eg").value, _ccca);
	calcularP50();
};

the("caVisualizador").onclick = function() {
	this.classList.add("d-none");
	the("caPercentil").classList.remove("d-none");
};

the("caPercentil").onclick = function() {
	this.classList.add("d-none");
	the("caVisualizador").classList.remove("d-none");
};

the("lf").onkeyup = function() {
	let _lf = lf.calcular(the("eg").value, +this.value);
	if(_lf < 0 || _lf > 99) {
		this.classList.add("is-invalid");
		this.classList.remove("is-valid");
		the("lfG").parentElement.classList.add("d-none");
		let etiqueta = the("lfG").parentElement.parentElement.children[0];
		etiqueta.classList.remove("d-none");
		valorPercentil(_lf, etiqueta);
	} else {
		this.classList.remove("is-invalid");
		this.classList.add("is-valid");
		the("lfG").parentElement.classList.remove("d-none");
		the("lfG").parentElement.parentElement.children[0].classList.add("d-none");
	}
	ajustarProgreso(_lf, "lfG");
	the("lfPct").innerHTML = "Pct: " + _lf;
	let _pfe = psohdlk(the("cc").value, the("ca").value, the("lf").value);
	the("pfe").value = _pfe + " gramos";
	the("pfe").dataset.value = _pfe;
	ajustarProgreso(pfe.calcular(the("eg").value, _pfe), "pfeG");
	the("pfePct").innerHTML = "Pct: " + pfe.calcular(the("eg").value, _pfe);
	calcularP50();
};

the("lfVisualizador").onclick = function() {
	this.classList.add("d-none");
	the("lfPercentil").classList.remove("d-none");
};

the("lfPercentil").onclick = function() {
	this.classList.add("d-none");
	the("lfVisualizador").classList.remove("d-none");
};

the("lh").onkeyup = function() {
	let _lh = lh.calcular(the("eg").value, +this.value);
	if(_lh < 0 || _lh > 99) {
		this.classList.add("is-invalid");
		this.classList.remove("is-valid");
		the("lhG").parentElement.classList.add("d-none");
		let etiqueta = the("lhG").parentElement.parentElement.children[0];
		etiqueta.classList.remove("d-none");
		valorPercentil(_lh, etiqueta);
	} else {
		this.classList.remove("is-invalid");
		this.classList.add("is-valid");
		the("lhG").parentElement.classList.remove("d-none");
		the("lhG").parentElement.parentElement.children[0].classList.add("d-none");
	}
	ajustarProgreso(_lh, "lhG");
	the("lhPct").innerHTML = "Pct: " + _lh;
	calcularP50();
};

the("lhVisualizador").onclick = function() {
	this.classList.add("d-none");
	the("lhPercentil").classList.remove("d-none");
};

the("lhPercentil").onclick = function() {
	this.classList.add("d-none");
	the("lhVisualizador").classList.remove("d-none");
};

the("cb").onkeyup = function() {
	let _cb = cb.calcular(the("eg").value, +this.value);
	if(_cb < 0 || _cb > 99) {
		this.classList.add("is-invalid");
		this.classList.remove("is-valid");
		the("cbG").parentElement.classList.add("d-none");
		let etiqueta = the("cbG").parentElement.parentElement.children[0];
		etiqueta.classList.remove("d-none");
		valorPercentil(_cb, etiqueta);
	} else {
		this.classList.remove("is-invalid");
		this.classList.add("is-valid");
		the("cbG").parentElement.classList.remove("d-none");
		the("cbG").parentElement.parentElement.children[0].classList.add("d-none");
	}
	ajustarProgreso(_cb, "cbG");
	the("cbPct").innerHTML = "Pct: " + _cb;
	calcularP50();
};

the("cbVisualizador").onclick = function() {
	this.classList.add("d-none");
	the("cbPercentil").classList.remove("d-none");
};

the("cbPercentil").onclick = function() {
	this.classList.add("d-none");
	the("cbVisualizador").classList.remove("d-none");
};

the("pfeVisualizador").onclick = function() {
	this.classList.add("d-none");
	the("pfePercentil").classList.remove("d-none");
};

the("pfePercentil").onclick = function() {
	this.classList.add("d-none");
	the("pfeVisualizador").classList.remove("d-none");
};

the("cccaVisualizador").onclick = function() {
	this.classList.add("d-none");
	the("cccaPercentil").classList.remove("d-none");
};

the("cccaPercentil").onclick = function() {
	this.classList.add("d-none");
	the("cccaVisualizador").classList.remove("d-none");
};

the("bvm").onkeyup = function() {
	let _bvm = bvm.calcular(the("eg").value, +this.value);
	if(_bvm < 0 || _bvm > 99) {
		this.classList.add("is-invalid");
		this.classList.remove("is-valid");
		the("bvmG").parentElement.classList.add("d-none");
		let etiqueta = the("bvmG").parentElement.parentElement.children[0];
		etiqueta.classList.remove("d-none");
		valorPercentil(_bvm, etiqueta);
	} else {
		this.classList.remove("is-invalid");
		this.classList.add("is-valid");
		the("bvmG").parentElement.classList.remove("d-none");
		the("bvmG").parentElement.parentElement.children[0].classList.add("d-none");
	}
	ajustarProgreso(_bvm, "bvmG");
	the("bvmPct").innerHTML = "Pct: " + _bvm;
};

the("bvmVisualizador").onclick = function() {
	this.classList.add("d-none");
	the("bvmPercentil").classList.remove("d-none");
};

the("bvmPercentil").onclick = function() {
	this.classList.add("d-none");
	the("bvmVisualizador").classList.remove("d-none");
};

the("ila").onkeyup = function() {
	let _ila = ila.calcular(the("eg").value, +this.value);
	if(_ila < 0 || _ila > 99) {
		this.classList.add("is-invalid");
		this.classList.remove("is-valid");
		the("ilaG").parentElement.classList.add("d-none");
		let etiqueta = the("ilaG").parentElement.parentElement.children[0];
		etiqueta.classList.remove("d-none");
		valorPercentil(_ila, etiqueta);
	} else {
		this.classList.remove("is-invalid");
		this.classList.add("is-valid");
		the("ilaG").parentElement.classList.remove("d-none");
		the("ilaG").parentElement.parentElement.children[0].classList.add("d-none");
	}
	ajustarProgreso(_ila, "ilaG");
	the("ilaPct").innerHTML = "Pct: " + _ila;
};

the("ilaVisualizador").onclick = function() {
	this.classList.add("d-none");
	the("ilaPercentil").classList.remove("d-none");
};

the("ilaPercentil").onclick = function() {
	this.classList.add("d-none");
	the("ilaVisualizador").classList.remove("d-none");
};

the("edadSegundoNo").onchange = function() {
	the("biometriAdicional").classList.add("d-none");
	the("edadSegundoAjuste").classList.add("d-none");
};

the("edadSegundoSi").onchange = function() {
	let _dbp = the("dbp").value;
	let _cc = the("cc").value;
	let _ca = the("ca").value;
	let _lf = the("lf").value;
	let modal = make.modal();
	document.getElementsByTagName("body")[0].insertAdjacentHTML('beforeend', modal.modal);
	the(modal.titulo).innerHTML = "Mensaje";
	the(modal.titulo).classList.add("mx-auto");
	the(modal.titulo).parentElement.classList.add("text-white", "bg-danger");
	//$("#"+modal.id + " button").html("Aceptar");
	the(modal.id).childNodes[0].classList.remove("modal-lg");
	the(modal.id).childNodes[0].childNodes[0].childNodes[2].childNodes[0].innerHTML = "Aceptar";
	var myModal = new bootstrap.Modal(the(modal.id), {
		backdrop: 'static',
		keyboard: false
	});
	if(_dbp == "" || +_dbp == 0) {
		the(modal.contenido).innerHTML = '<p class="text-center">Ingrese DBP</p>';
		myModal.show();
		this.checked = false;
		the("edadSegundoNo").checked = true;
		return;
	}
	if(_cc == "" || +_cc == 0) {
		the(modal.contenido).innerHTML = '<p class="text-center">Ingrese CC</p>';
		myModal.show();
		this.checked = false;
		the("edadSegundoNo").checked = true;
		return;
	}
	if(_ca == "" || +_ca == 0) {
		the(modal.contenido).innerHTML = '<p class="text-center">Ingrese CA</p>';
		myModal.show();
		this.checked = false;
		the("edadSegundoNo").checked = true;
		return;
	}
	if(_lf == "" || +_lf == 0) {
		the(modal.contenido).innerHTML = '<p class="text-center">Ingrese LF</p>';
		myModal.show();
		this.checked = false;
		the("edadSegundoNo").checked = true;
		return;
	}
	the("biometriAdicional").classList.remove("d-none");
};

the("edadAjusteNo").onchange = function() {
	the("ajusteSegundoReady").classList.add("d-none");
};

the("edadAjusteSi").onchange = function() {
		let _dbp = the("dbp").value;
		let _cc = the("cc").value;
		let _ca = the("ca").value;
		let _lf = the("lf").value;
		let _lh = the("lh").value;
		let _cb = the("cb").value;
		let modal = make.modal();
		document.getElementsByTagName("body")[0].insertAdjacentHTML('beforeend', modal.modal);
		the(modal.titulo).innerHTML = "Mensaje";
		the(modal.titulo).classList.add("mx-auto");
		the(modal.titulo).parentElement.classList.add("text-white", "bg-danger");
		//$("#"+modal.id + " button").html("Aceptar");
		the(modal.id).childNodes[0].classList.remove("modal-lg");
		the(modal.id).childNodes[0].childNodes[0].childNodes[2].childNodes[0].innerHTML = "Aceptar";
		var myModal = new bootstrap.Modal(the(modal.id), {
			backdrop: 'static',
			keyboard: false
		});
		if(_dbp == "" || +_dbp == 0) {
			the(modal.contenido).innerHTML = '<p class="text-center">Ingrese DBP</p>';
			myModal.show();
			this.checked = false;
			the("edadAjusteNo").checked = true;
			return;
		}
		if(_cc == "" || +_cc == 0) {
			the(modal.contenido).innerHTML = '<p class="text-center">Ingrese CC</p>';
			myModal.show();
			this.checked = false;
			the("edadAjusteNo").checked = true;
			return;
		}
		if(_ca == "" || +_ca == 0) {
			the(modal.contenido).innerHTML = '<p class="text-center">Ingrese CA</p>';
			myModal.show();
			this.checked = false;
			the("edadAjusteNo").checked = true;
			return;
		}
		if(_lf == "" || +_lf == 0) {
			the(modal.contenido).innerHTML = '<p class="text-center">Ingrese LF</p>';
			myModal.show();
			this.checked = false;
			the("edadAjusteNo").checked = true;
			return;
		}
		if(_lh == "" || +_lh == 0) {
			the(modal.contenido).innerHTML = '<p class="text-center">Ingrese LH</p>';
			myModal.show();
			this.checked = false;
			the("edadAjusteNo").checked = true;
			return;
		}
		if(_cb == "" || +_cb == 0) {
			the(modal.contenido).innerHTML = '<p class="text-center">Ingrese CB</p>';
			myModal.show();
			this.checked = false;
			the("edadAjusteNo").checked = true;
			return;
		}
		let _furOld = fechas.toDate(the("fur").value);
		let _fppOld = fechas.toDate(the("fpp").value);
		the("furOldSegundo").innerHTML = humanDate(_furOld);
		the("egOldSegundo").innerHTML = the("eg").value + ", " + the("dias").value;
		the("fppOldSegundo").innerHTML = humanDate(_fppOld);
			//calcular Fur según LCN
		let _p50 = p50.calcular(the("dbp").value, the("cc").value, the("lf").value, the("cb").value, the("lh").value);
		let _fexamen = fechas.toDate(the("fexamen").value);
			//calcular la fur con la parte entera del lcn, despues agregar los días
		let _ip50 = Math.trunc(_p50);
		let _fur = fechas.fur(_ip50, _fexamen);
		_fur.setDate(_fur.getDate() - (_ip50 - _p50));
		the("fur").value = inputDate(_fur);
		the("furNewSegundo").innerHTML = humanDate(_fur);
		the("egNewSegundo").innerHTML = _p50;
		the("fppNewSegundo").innerHTML = humanDate(fechas.fpp(_fur));
		the("fur").onchange();
		the("ajusteSegundoReady").classList.remove("d-none");
};

//Doppler
the("aud").onkeyup = function() {
	let _ut = uterinas.calcular(the("eg").value, +this.value);
	if(_ut.raw < 0 || _ut.raw > 99) {
		this.classList.add("is-invalid");
		this.classList.remove("is-valid");
		the("audG").parentElement.classList.add("d-none");
		let etiqueta = the("audG").parentElement.parentElement.children[0];
		etiqueta.classList.remove("d-none");
		valorPercentil(_ut.raw, etiqueta);
	} else {
		this.classList.remove("is-invalid");
		this.classList.add("is-valid");
		the("audG").parentElement.classList.remove("d-none");
		the("audG").parentElement.parentElement.children[0].classList.add("d-none");
	}
	ajustarProgreso(_ut.raw, "audG");
	the("audPct").innerHTML = "Pct: " + _ut.raw;
	let aud = the("aud").value;
	let aui = the("aui").value;
	aud = aud.toString();
	aud = aud.replace(",", ".");
	aud = parseFloat(aud);
	aui = aui.toString();
	aui = aui.replace(",", ".");
	aui = parseFloat(aui);
	if(aui > 0 && aud > 0) {
		let utprom = ((aui + aud) / 2);
		the("aup").value = utprom;
		utprom = uterinas.calcular(the("eg").value, +utprom);
		ajustarProgreso(utprom.raw, "aupG");
		the("aupPct").innerHTML = "Pct: " + utprom.raw;
	}
};

the("audVisualizador").onclick = function() {
	this.classList.add("d-none");
	the("audPercentil").classList.remove("d-none");
};

the("audPercentil").onclick = function() {
	this.classList.add("d-none");
	the("audVisualizador").classList.remove("d-none");
};

the("aui").onkeyup = function() {
	let _ut = uterinas.calcular(the("eg").value, +this.value);
	if(_ut.raw < 0 || _ut.raw > 99) {
		this.classList.add("is-invalid");
		this.classList.remove("is-valid");
		the("auiG").parentElement.classList.add("d-none");
		let etiqueta = the("auiG").parentElement.parentElement.children[0];
		etiqueta.classList.remove("d-none");
		valorPercentil(_ut.raw, etiqueta);
	} else {
		this.classList.remove("is-invalid");
		this.classList.add("is-valid");
		the("auiG").parentElement.classList.remove("d-none");
		the("auiG").parentElement.parentElement.children[0].classList.add("d-none");
	}
	ajustarProgreso(_ut.raw, "auiG");
	the("auiPct").innerHTML = "Pct: " + _ut.raw;
	let aud = the("aud").value;
	let aui = the("aui").value;
	aud = aud.toString();
	aud = aud.replace(",", ".");
	aud = parseFloat(aud);
	aui = aui.toString();
	aui = aui.replace(",", ".");
	aui = parseFloat(aui);
	if(aui > 0 && aud > 0) {
		let utprom = ((aui + aud) / 2);
		the("aup").value = utprom;
		utprom = uterinas.calcular(the("eg").value, +utprom);
		ajustarProgreso(utprom.raw, "aupG");
		the("aupPct").innerHTML = "Pct: " + utprom.raw;
	}
};

the("auiVisualizador").onclick = function() {
	this.classList.add("d-none");
	the("auiPercentil").classList.remove("d-none");
};

the("auiPercentil").onclick = function() {
	this.classList.add("d-none");
	the("auiVisualizador").classList.remove("d-none");
};

the("au").onkeyup = function() {
	let _au = umbilical.calcular(the("eg").value, +this.value);
	if(_au < 0 || _au > 99) {
		this.classList.add("is-invalid");
		this.classList.remove("is-valid");
		the("auG").parentElement.classList.add("d-none");
		let etiqueta = the("auG").parentElement.parentElement.children[0];
		etiqueta.classList.remove("d-none");
		valorPercentil(_au, etiqueta);
	} else {
		this.classList.remove("is-invalid");
		this.classList.add("is-valid");
		the("auG").parentElement.classList.remove("d-none");
		the("auG").parentElement.parentElement.children[0].classList.add("d-none");
	}
	ajustarProgreso(_au, "auG");
	the("auPct").innerHTML = "Pct: " + _au;
	let _ccp = ccp.calcular(the("acm").value, this.value);
	the("ccp").value = _ccp;
	ajustarProgreso(ccp.percentil(the("eg").value, _ccp), "ccpG");
	the("ccpPct").innerHTML = "Pct: " + ccp.percentil(the("eg").value, _ccp);
};

the("auVisualizador").onclick = function() {
	this.classList.add("d-none");
	the("auPercentil").classList.remove("d-none");
};

the("auPercentil").onclick = function() {
	this.classList.add("d-none");
	the("auVisualizador").classList.remove("d-none");
};

the("aupVisualizador").onclick = function() {
	this.classList.add("d-none");
	the("aupPercentil").classList.remove("d-none");
};

the("aupPercentil").onclick = function() {
	this.classList.add("d-none");
	the("aupVisualizador").classList.remove("d-none");
};

the("acm").onkeyup = function() {
	let _acm = cerebral.calcular(the("eg").value, +this.value);
	if(_acm < 0 || _acm > 99) {
		this.classList.add("is-invalid");
		this.classList.remove("is-valid");
		the("acmG").parentElement.classList.add("d-none");
		let etiqueta = the("acmG").parentElement.parentElement.children[0];
		etiqueta.classList.remove("d-none");
		valorPercentil(_acm, etiqueta);
	} else {
		this.classList.remove("is-invalid");
		this.classList.add("is-valid");
		the("acmG").parentElement.classList.remove("d-none");
		the("acmG").parentElement.parentElement.children[0].classList.add("d-none");
	}
	ajustarProgreso(_acm, "acmG");
	the("acmPct").innerHTML = "Pct: " + _acm;
	let _ccp = ccp.calcular(the("acm").value, the("au").value);
	the("ccp").value = _ccp;
	ajustarProgreso(ccp.percentil(the("eg").value, _ccp), "ccpG");
	the("ccpPct").innerHTML = "Pct: " + ccp.percentil(the("eg").value, _ccp);
};

the("acmVisualizador").onclick = function() {
	this.classList.add("d-none");
	the("acmPercentil").classList.remove("d-none");
};

the("acmPercentil").onclick = function() {
	this.classList.add("d-none");
	the("acmVisualizador").classList.remove("d-none");
};

the("ccpVisualizador").onclick = function() {
	this.classList.add("d-none");
	the("ccpPercentil").classList.remove("d-none");
};

the("ccpPercentil").onclick = function() {
	this.classList.add("d-none");
	the("ccpVisualizador").classList.remove("d-none");
};

the("dv").onkeyup = function() {
	let _dv = ductus.calcular(the("eg").value, +this.value);
	if(_dv < 0 || _dv > 99) {
		this.classList.add("is-invalid");
		this.classList.remove("is-valid");
		the("dvG").parentElement.classList.add("d-none");
		let etiqueta = the("dvG").parentElement.parentElement.children[0];
		etiqueta.classList.remove("d-none");
		valorPercentil(_dv, etiqueta);
	} else {
		this.classList.remove("is-invalid");
		this.classList.add("is-valid");
		the("dvG").parentElement.classList.remove("d-none");
		the("dvG").parentElement.parentElement.children[0].classList.add("d-none");
	}
	ajustarProgreso(_dv, "dvG");
	the("dvPct").innerHTML = "Pct: " + _dv;
};

the("dvVisualizador").onclick = function() {
	this.classList.add("d-none");
	the("dvPercentil").classList.remove("d-none");
};

the("dvPercentil").onclick = function() {
	this.classList.add("d-none");
	the("dvVisualizador").classList.remove("d-none");
};

the("dopplerMaternoFetalG").onclick = function() {
	//para impedir errores de visualizacion
	//es necesario solo mostrar 10 semanas 
	//por lo cual hay que cortar los gráficos
	//tomando una porción de la tabla
	let _utC = ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40'];
	let _ut5 = [1.23, 1.18, 1.11, 1.05, 0.99, 0.94, 0.89, 0.85, 0.81, 0.78, 0.74, 0.71, 0.69, 0.66, 0.64, 0.62, 0.6, 0.58, 0.56, 0.55, 0.54, 0.52, 0.51, 0.51, 0.51, 0.49, 0.48, 0.48, 0.47, 0.47, 0.47];
	let _ut95 = [2.84, 2.71, 2.53, 2.38, 2.24, 2.11, 1.99, 1.88, 1.79, 1.71, 1.61, 1.54, 1.47, 1.41, 1.35, 1.3, 1.25, 1.21, 1.17, 1.13, 1.11, 1.06, 1.04, 1.01, 0.99, 0.97, 0.95, 0.94, 0.92, 0.91, 0.91];
	let _eg = the("eg").value;
	//restar a la EG 10
	_eg = +_eg - 10;
		//porcionar el array 5 elementos antes de la eg y 4 elementos despues de la eg
		//límite 0 y límite 30
	let _lInicial = _eg - 5;
	let _lFinal = _eg + 5;
	_lInicial = (_lInicial < 0) ? 0 : _lInicial;
	_lFinal = (_lFinal > 30) ? 30 : _lFinal;
	_utC = _utC.slice(_lInicial, _lFinal);
	_ut5 = _ut5.slice(_lInicial, _lFinal);
	_ut95 = _ut95.slice(_lInicial, _lFinal);
	Highcharts.chart('utV', {
		chart: {
			height: 250
		},
		title: {
			text: 'IP Promedio Arteria Uterinas *',
			x: -20,
			style: {
				fontSize: '14px'
			}
		},
		plotOptions: {
			series: {
				enableMouseTracking: false
			}
		},
		legend: {
			itemStyle: {
				fontSize: '10px',
				fontWeight: 'normal'
			}
		},
		yAxis: {
			title: {
				text: 'Valor IP'
			},
			tickPositions: [0.1, 0.5, 1, 1.5, 2, 2.5, 3]
		},
		colors: ['#313131', '#313131', '#313131'],
		xAxis: {
			categories: _utC
		},
		credits: {
			enabled: false
		},
		series: [{
			type: "line",
			name: 'Pct. 5',
			marker: {
				enabled: false
			},
			data: _ut5
		}, {
			type: "line",
			name: 'Pct. 95',
			marker: {
				enabled: false
			},
			data: _ut95
		}, {
			type: "line",
			name: 'Promedio Uterinas',
			dashStyle: "Dot",
			marker: {
				symbol: 'square'
			},
			lineWidth: 0,
			data: (function() {
				// generate an array of random data
				var data = [];
				for(let i = _lInicial; i < _eg; i++) {
					data.push({
						y: 0,
					});
				}
				var auprom = the("aup").value;
				auprom = auprom.toString();
				auprom = auprom.replace(",", ".");
				auprom = parseFloat(auprom);
				data.push({
					y: auprom,
				});
				for(let i = _eg + 1; i < _lFinal; i++) {
					data.push({
						y: 0,
					});
				}
				return data;
			}())
		}]
	});
	let _auC = ['20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40'];
	let _au5 = [0.97, 0.95, 0.94, 0.92, 0.9, 0.89, 0.87, 0.85, 0.82, 0.8, 0.78, 0.75, 0.73, 0.7, 0.67, 0.65, 0.62, 0.58, 0.55, 0.52, 0.49];
	let _au95 = [1.6, 1.56, 1.53, 1.5, 1.46, 1.43, 1.4, 1.37, 1.35, 1.32, 1.29, 1.27, 1.25, 1.22, 1.2, 1.18, 1.16, 1.14, 1.13, 1.11, 1.09];
	_eg = the("eg").value;
	_eg = +_eg - 20;
	_lInicial = _eg - 5;
	_lFinal = _eg + 5;
	_lInicial = (_lInicial < 0) ? 0 : _lInicial;
	_lFinal = (_lFinal > 20) ? 20 : _lFinal;
	_auC = _auC.slice(_lInicial, _lFinal);
	_au5 = _au5.slice(_lInicial, _lFinal);
	_au95 = _au95.slice(_lInicial, _lFinal);
	Highcharts.chart('auV', {
		chart: {
			height: 250
		},
		title: {
			text: 'IP Arteria Umbilical **',
			x: -20, //center
			style: {
				fontSize: '14px'
			}
		},
		plotOptions: {
			series: {
				enableMouseTracking: false
			}
		},
		yAxis: {
			title: {
				text: 'Valor IP'
			},
			tickPositions: [0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2]
		},
		colors: ['#313131', '#313131', '#313131'],
		xAxis: {
			categories: _auC
		},
		legend: {
			itemStyle: {
				fontSize: '10px',
				fontWeight: 'normal'
			}
		},
		credits: {
			enabled: false
		},
		series: [{
			type: "line",
			name: 'Pct. 5',
			marker: {
				enabled: false
			},
			data: _au5
		}, {
			type: "line",
			name: 'Pct. 95',
			marker: {
				enabled: false
			},
			data: _au95
		}, {
			type: "line",
			name: 'Arteria Umbilical',
			dashStyle: "Dot",
			marker: {
				symbol: 'square'
			},
			lineWidth: 0,
			data: (function() {
				var data = [];
				for(let i = _lInicial; i < _eg; i++) {
					data.push({
						y: 0,
					});
				}
				var ipau = the("au").value;
				ipau = ipau.toString();
				ipau = ipau.replace(",", ".");
				ipau = parseFloat(ipau);
				data.push({
					y: ipau,
				});
				for(let i = _eg + 1; i < _lFinal; i++) {
					data.push({
						y: 0,
					});
				}
				return data;
			}())
		}]
	});
	let _cmC = ['20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40'];
	let _cm5 = [1.24, 1.29, 1.34, 1.37, 1.4, 1.43, 1.44, 1.45, 1.45, 1.44, 1.43, 1.41, 1.38, 1.34, 1.3, 1.25, 1.19, 1.13, 1.05, 0.98, 0.89];
	let _cm95 = [1.98, 2.12, 2.25, 2.36, 2.45, 2.53, 2.59, 2.63, 2.66, 2.67, 2.67, 2.65, 2.62, 2.56, 2.5, 2.41, 2.31, 2.2, 2.07, 1.92, 1.76];
	_eg = the("eg").value;
	_eg = +_eg - 20;
	_lInicial = _eg - 5;
	_lFinal = _eg + 5;
	_lInicial = (_lInicial < 0) ? 0 : _lInicial;
	_lFinal = (_lFinal > 20) ? 20 : _lFinal;
	_cmC = _cmC.slice(_lInicial, _lFinal);
	_cm5 = _cm5.slice(_lInicial, _lFinal);
	_cm95 = _cm95.slice(_lInicial, _lFinal);
	Highcharts.chart('cmV', {
		chart: {
			height: 250
		},
		title: {
			text: 'IP Arteria Cerebral Media **',
			x: -20,
			style: {
				fontSize: '14px'
			}
		},
		plotOptions: {
			series: {
				enableMouseTracking: false
			}
		},
		yAxis: {
			title: {
				text: 'Valor IP'
			},
			tickPositions: [0.35, 0.7, 1.05, 1.4, 1.75, 2.1, 2.45, 2.8, 3.15, 3.5]
		},
		colors: ['#313131', '#313131', '#313131'],
		xAxis: {
			categories: _cmC
		},
		legend: {
			itemStyle: {
				fontSize: '10px',
				fontWeight: 'normal'
			}
		},
		credits: {
			enabled: false
		},
		series: [{
			type: "line",
			name: 'Pct. 5',
			marker: {
				enabled: false
			},
			data: _cm5
		}, {
			type: "line",
			name: 'Pct. 95',
			marker: {
				enabled: false
			},
			data: _cm95
		}, {
			type: "line",
			name: 'Arteria C. Media',
			dashStyle: "Dot",
			marker: {
				symbol: 'square'
			},
			lineWidth: 0,
			data: (function() {
				var data = [];
				for(let i = _lInicial; i < _eg; i++) {
					data.push({
						y: 0,
					});
				}
				var ipacm = the("acm").value;
				ipacm = ipacm.toString();
				ipacm = ipacm.replace(",", ".");
				ipacm = parseFloat(ipacm);
				data.push({
					y: ipacm,
				});
				for(let i = _eg + 1; i < _lFinal; i++) {
					data.push({
						y: 0,
					});
				}
				return data;
			}())
		}]
	});
	let _cppC = ['20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40'];
	let _cpp5 = [0.78, 0.87, 0.95, 1.02, 1.09, 1.15, 1.2, 1.24, 1.28, 1.31, 1.33, 1.35, 1.36, 1.36, 1.36, 1.34, 1.32, 1.3, 1.26, 1.22, 1.18];
	let _cpp95 = [1.68, 1.88, 2.06, 2.22, 2.36, 2.49, 2.6, 2.7, 2.78, 2.84, 2.89, 2.92, 2.93, 2.93, 2.91, 2.87, 2.82, 2.75, 2.67, 2.57, 2.45];
	_eg = the("eg").value;
	_eg = +_eg - 20;
	_lInicial = _eg - 5;
	_lFinal = _eg + 5;
	_lInicial = (_lInicial < 0) ? 0 : _lInicial;
	_lFinal = (_lFinal > 20) ? 20 : _lFinal;
	_cppC = _cppC.slice(_lInicial, _lFinal);
	_cpp5 = _cpp5.slice(_lInicial, _lFinal);
	_cpp95 = _cpp95.slice(_lInicial, _lFinal);
	Highcharts.chart('cppV', {
		chart: {
			height: 250
		},
		title: {
			text: 'IP de CCP (Indice ACM / AU) **',
			x: -20, //center
			style: {
				fontSize: '14px'
			}
		},
		plotOptions: {
			series: {
				enableMouseTracking: false
			}
		},
		yAxis: {
			title: {
				text: 'Valor IP'
			},
			tickPositions: [0.35, 0.7, 1.05, 1.4, 1.75, 2.1, 2.45, 2.8, 3.15, 3.5]
		},
		legend: {
			itemStyle: {
				fontSize: '10px',
				fontWeight: 'normal'
			}
		},
		colors: ['#313131', '#313131', '#313131'],
		xAxis: {
			categories: _cppC
		},
		credits: {
			enabled: false
		},
		series: [{
			type: "line",
			name: 'Pct. 5',
			dashStyle: "Dot",
			marker: {
				enabled: false
			},
			data: _cpp5
		}, {
			type: "line",
			name: 'Pct. 95',
			dashStyle: "Dot",
			marker: {
				enabled: false
			},
			data: _cpp95
		}, {
			type: "line",
			name: 'Cuociente CP.',
			dashStyle: "Dot",
			marker: {
				symbol: 'square'
			},
			lineWidth: 0,
			data: (function() {
				// generate an array of random data
				var data = [];
				for(let i = _lInicial; i < _eg; i++) {
					data.push({
						y: 0,
					});
				}
				var ccp = the("ccp").value;
				ccp = ccp.toString();
				ccp = ccp.replace(",", ".");
				ccp = parseFloat(ccp);
				data.push({
					y: ccp,
				});
				for(let i = _eg + 1; i < _lFinal; i++) {
					data.push({
						y: 0,
					});
				}
				return data;
			}())
		}]
	});
	let _dvC = ['20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40'];
	let _dv5 = [0.32, 0.32, 0.32, 0.32, 0.32, 0.32, 0.31, 0.31, 0.31, 0.3, 0.29, 0.28, 0.28, 0.27, 0.26, 0.25, 0.24, 0.23, 0.22, 0.21, 0.2];
	let _dv95 = [0.83, 0.83, 0.83, 0.83, 0.83, 0.83, 0.82, 0.82, 0.81, 0.81, 0.8, 0.79, 0.78, 0.77, 0.76, 0.75, 0.74, 0.73, 0.72, 0.71, 0.7];
	_eg = the("eg").value;
	_eg = +_eg - 20;
	_lInicial = _eg - 5;
	_lFinal = _eg + 5;
	_lInicial = (_lInicial < 0) ? 0 : _lInicial;
	_lFinal = (_lFinal > 20) ? 20 : _lFinal;
	_dvC = _dvC.slice(_lInicial, _lFinal);
	_dv5 = _dv5.slice(_lInicial, _lFinal);
	_dv95 = _dv95.slice(_lInicial, _lFinal);
	Highcharts.chart('dvV', {
		chart: {
			height: 250
		},
		title: {
			text: 'IP Ductus Venoso',
			x: -20, //center
			style: {
				fontSize: '14px'
			}
		},
		plotOptions: {
			series: {
				enableMouseTracking: false
			}
		},
		yAxis: {
			title: {
				text: 'Valor IP'
			},
			tickPositions: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
		},
		legend: {
			itemStyle: {
				fontSize: '10px',
				fontWeight: 'normal'
			}
		},
		colors: ['#313131', '#313131', '#313131'],
		xAxis: {
			categories: _dvC
		},
		credits: {
			enabled: false
		},
		series: [{
			type: "line",
			name: 'Pct. 5',
			dashStyle: "Dot",
			marker: {
				enabled: false
			},
			data: _dv5
		}, {
			type: "line",
			name: 'Pct. 95',
			dashStyle: "Dot",
			marker: {
				enabled: false
			},
			data: _dv95
		}, {
			type: "line",
			name: 'Ductus Venoso',
			dashStyle: "Dot",
			marker: {
				symbol: 'square'
			},
			lineWidth: 0,
			data: (function() {
				var data = [];
				for(let i = _lInicial; i < _eg; i++) {
					data.push({
						y: 0,
					});
				}
				var dv = the("dv").value;
				dv = dv.toString();
				dv = dv.replace(",", ".");
				dv = parseFloat(dv);
				data.push({
					y: dv,
				});
				for(let i = _eg + 1; i < _lFinal; i++) {
					data.push({
						y: 0,
					});
				}
				return data;
			}())
		}]
	});
};

function calcularP50() {
	let resultado = p50.calcular(the("dbp").value, the("cc").value, the("lf").value, the("cb").value, the("lh").value);
	the("egp50").innerHTML = resultado + " semanas";
	resultado = resultado.split(".");
	if(isNaN(resultado[0]) == false) {
		the("edadSegundoAjuste").classList.remove("d-none");
	} else {
		the("edadSegundoAjuste").classList.add("d-none");
	}
}

function ajustarProgreso(valor, objeto) {
	valor = (valor == "&gt; 99") ? 99 : valor; // si es mayor a 99
	valor = (isNaN(valor) == true) ? 0 : valor;
	valor = valor + "%";
	the(objeto).children[0].style.width = valor;
}

function psohdlk(_cc, _ca, _lf) {
	if(isNaN(_cc) || isNaN(_ca) || isNaN(_lf)) {
		return 0;
	}
	_cc = _cc / 10;
	_ca = _ca / 10;
	_lf = _lf / 10;
	let psoP = Math.pow(10, (1.326 + 0.0107 * _cc + 0.0438 * _ca + 0.158 * _lf - 0.00326 * _ca * _lf));
	return(isNaN(psoP) == true) ? 0 : Math.trunc(psoP);
}

function back() {
	the(activo).classList.add("d-none");
	let examen = examenes.indexOf(activo);

	activo = examenes[examen - 1];

	the(activo).classList.remove("d-none");
	if(activo == "inicio") {
		the("prelude").classList.add("d-none");
	}
}

function valorPercentil(valor, elemento) {
	elemento.children[0].innerHTML = "Fuera de rango";
}

window.onpopstate = back;