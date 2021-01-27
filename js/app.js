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
import { ccca } from  './ccca.js'
import { uterinas } from './uterinas.js'
import { umbilical } from './umbilical.js'
import { cerebral } from './cerebral.js'
import { ccp } from './ccp.js'
import { ductus } from './ductus.js'

var activo = "inicio"
var paginas = ["inicio", "examenes"]
var examenes = ["primero", "segundo", "doppler"]

let _fecha = new Date()

the("fexamen").value = inputDate(_fecha)

let _fur = fechas.fur(10, _fecha)
the("fur").value = inputDate(_fur)
the("txtFUM").innerText = humanDate(_fur)

let _fpp = fechas.fpp(_fur)
the("fpp").value = inputDate(_fpp)
the("txtFPP").innerText = humanDate(_fpp)

//cambiar la fur
//the("fur").onchange = function(){
    //convertir a fecha
//    let _fur = fechas.toDate(this.value)
    //clonar a prelude
//    the("txtFUM").innerText = humanDate(_fur)

    //calcular la eg
//    let _fexamen = fechas.toDate(the("fexamen").value)
//    let eg = fechas.eg(_fur, _fexamen)
//    the("eg").value = eg
//    the("txtEG").innerHTML = eg + "sem"

    //calcular fpp
//    let _fpp = fechas.fpp(_fur)

    //set en input y prelude
//    the("fpp").value = inputDate(_fpp)
//    the("txtFPP").innerText = humanDate(_fpp)
//}

the("fur").onchange = function(){
    //convertir a fecha
    let _fur = fechas.toDate(this.value)
    //clonar a prelude
    the("txtFUM").innerText = humanDate(_fur)

    //calcular la eg
    let _fexamen = fechas.toDate(the("fexamen").value)

    let eg = fechas.eg(_fur, _fexamen)

    if (eg > 0){
        let semanas = Math.trunc(eg / 7);
        let dias = Math.trunc(eg - (semanas * 7));
        the("eg").value = semanas;
        the("txtEG").innerHTML = semanas + " sem"
        the("dias").value = dias;
    } else {
        the("eg").value = 0;
        the("txtEG").innerHTML = semanas + " sem"
        the("dias").value = 0;
    }

    //calcular fpp
    let _fpp = fechas.fpp(_fur)

    //set en input y prelude
    the("fpp").value = inputDate(_fpp)
    the("txtFPP").innerText = humanDate(_fpp)
}

//the("eg").onchange = function(){
//    let _fecha = fechas.toDate(the("fexamen").value)

//    the("fur").value = inputDate(fechas.fur(+this.value, _fecha));
//    the("fur").onchange()
//}

the("eg").onchange = function(){
    let semanas = parseInt(this.value);
    let dias = parseInt(the("dias").value);
    semanas = 7 * semanas;

    let _fexamen = fechas.toDate(the("fexamen").value)
    _fexamen.setDate(_fexamen.getDate() - (semanas + dias));

    the("fur").value = inputDate(_fexamen);
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
    //convertir a fecha
    let _fur = fechas.toDate(the("fur").value)

    //calcular la eg
    let _fexamen = fechas.toDate(this.value)

    let eg = fechas.eg(_fur, _fexamen)

    if (eg > 0){
        let semanas = Math.trunc(eg / 7);
        let dias = Math.trunc(eg - (semanas * 7));
        the("eg").value = semanas;
        the("txtEG").innerHTML = semanas + " sem"
        the("dias").value = dias;
    }
    else{
        the("eg").value = 0;
        the("txtEG").innerHTML = semanas + " sem"
        the("dias").value = 0;
    }
}

//controlador de los keypress
let losInput = document.getElementsByTagName("input")

for(let i = 0;i < losInput.length; i++)
{
    losInput[i].onkeypress = function(e){
        var key_enter = ["lcn","edadPrimeroAjustarNo","", "dbp","cc", "ca", "lf", "edadSegundoNo", "", "bvm", "ila", "","aud","aui", "au","acm","dv"];

        if ( e.which == 13 ) {
           e.preventDefault()
           if (key_enter.includes(this.id)== true){
                let pos = key_enter.indexOf(this.id)
                the(key_enter[pos+1]).focus()
           }
        }
    }
}


//controlador de botones
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
the("lcn").onkeyup = function(){
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
        the("determinacionLCNEg").innerHTML = "Edad gestacional : " + _lcn + " sem"

        //diferencia en días
        let _dias = the("eg").value - _lcn
        _dias = (isNaN(_dias) == false) ? Math.trunc(_dias * 7) : 0
        the("lcnDiferenciaDias").innerHTML = _dias
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

the("graphLCN").onclick = function(){
    Highcharts.chart('gLCN',{
        title: {text: '',x: -20},
        xAxis: {
            categories: ['6', '7', '8', '9', '10',  '11', '12', '13', '14', '15']
        },
        yAxis: {
            title: {
                text: 'LCN milimetros'
            },
            tickPositions: [2, 11, 22, 33, 44, 55, 66, 77, 88, 99, 110]
        },
        credits: {enabled:false},
        colors: ['#313131', '#313131', '#313131'],
        plotOptions: {
            series: {
                enableMouseTracking: false
            }
         },
        series: [{
            name: '(-) 2DE',
            type: "line",
            marker: { enabled: false },
            data: [2.6, 7.7, 14, 20.5, 26.2,35.5, 46.8, 58.2, 69.8, 80.2],
            dashStyle: 'shortdot'
        }, {
            name: 'Media',
            type: "line",
            marker: { enabled: false },
            data: [3.8, 8.9, 15.4, 22.5, 29.5,40.5, 52.9, 66.5, 79.0, 90.1]
        }, {
            name: '(+) 2DE',
            type: "line",
            marker: { enabled: false },
            data: [5.3, 10.4, 17.1, 24.9, 33.2,46.4, 60.8, 75.7, 89.1, 100.1],
            dashStyle: 'shortdot'
        }, {
            type: "line",
            name: 'Longitud Céfalo Nalga (LCN)',
            dashStyle: "Dot",
            marker: { symbol: 'square' },
            lineWidth: 0,
            data: (function () {
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
                lcnegx[2] = 7; lcnegx[3] = 8; lcnegx[4] = 9;
                lcnegx[5] = 10; lcnegx[6] = 11; lcnegx[7] = 12;
                lcnegx[8] = 13; lcnegx[9] = 14; lcnegx[10] = 14;
    
                for (let i = 1; i <= 10; i++) {
                    if (lcnegx[i] >= egLcn2) {
                        if (flag == false) {
                        data.push({
                            y: lcn,
                        });
                        flag = true;
                        }
                        else {
                         data.push({
                            y:0,
                         });
                        }
                    }
                    else {
                        data.push({
                            y: 0,
                        });
                    }
                }
                return data;
            }())
        }]
    });
}

the("crecimientoFetalG").onclick = function(){

    Highcharts.chart('pesoV',{
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
            title: { text: 'Kilogramos' },
            tickPositions: [100, 560, 1020, 1480, 1940, 2400, 2860, 3320, 3780, 4340, 4900]
        },
        colors: ['#313131', '#313131', '#313131'],
        xAxis: {
            categories: ['16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
        },
        credits: {enabled: false},
        series: [{
            type: "line",
            name: 'Pct 3',
            dashStyle: "Dot",
            marker: {enabled: false},
            data: [110,136,167,205,248,299,359,426,503,589,685,791,908,1034,1169,1313,1465,1622,1783,1946,2110,2271,2427,2576,2714]
        }, {
            type: "line",
            name: 'Pct 10',
            marker: { enabled: false },
            data: [121,150,185,227,275,331,398,471,556,652,758,876,1004,1145,1294,1453,1621,1794,1973,2154,2335,2513,2686,2851,2985]
        }, {
            type: "line",
            name: 'Pct 90',
            marker: { enabled: false },
            data: [171,212,261,319,387,467,559,665,784,918,1068,1234,1416,1613,1824,2049,2285,2530,2781,3036,3291,3543,3786,4019,4234]
        }, {
            type: "line",
            name: 'Pct 97',
            dashStyle: "Dot",
            marker: { enabled: false, },
            data: [183,226,279,341,414,499,598,710,838,981,1141,1319,1513,1724,1949,2189,2441,2703,2971,3244,3516,3785,4045,4294,4474]
        }, {
            type: "line",
            name: 'Peso',
            dashStyle: "Dot",
            marker: {symbol:'square'},
            lineWidth: 0,
            data: (function () {
                var data = [];
                var edadGest = the("eg").value;
 
                for (let i = 16; i < edadGest; i++) {
                    data.push({
                        y: 0,
                    });
                }
                data.push({
                    y: parseFloat(the("pfe").dataset.value),
                });
                for (let i = edadGest + 1; i <= 39; i++) {
                    data.push({
                        y: 0,
                    });
                }
                return data;
            }())
        }]
    })

    Highcharts.chart('caV', {
        title: {
            text: 'CA**',
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
            title: { text: 'Milimetros (mm)' },
            tickPositions: [20, 60, 100, 140, 180, 220, 260, 300, 340, 400]
        },
        colors: ['#313131', '#313131', '#313131'],
        xAxis: {
            categories:['12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
        },
        credits: { enabled: false },
        series: [{
            type: "line",
            name: 'Pct. 3',
            marker: { enabled: false },
            data: [40,50,60,72,84,97,107,119,131,141,151,161,171,181,191,200,209,218,227,236,245,253,261,269,277,285,292,299,307]
        }, {
            type: "line",
            name: 'Pct 97',
            marker: { enabled: false },
            data: [68,78,88,101,112,127,141,155,168,183,196,209,223,235,248,260,271,284,295,306,318,329,339,349,359,370,380,389,399]
        }, {
            type: "line",
            name: 'CA',
            dashStyle: "Dot",
            marker: { symbol: 'square' },
            lineWidth: 0,
            data: (function () {
                var data = [];
                var edadGest = the("eg").value;
 
                for (let i = 12; i < edadGest; i++) {
                    data.push({
                        y: 0,
                    });
                }
 
                var ca = the("ca").value;
                ca = ca.toString();
                ca = ca.replace(",", ".");
                ca = parseFloat(ca);
 
                data.push({
                    y:ca,
                });

                for (let i = edadGest + 1; i <= 39; i++) {
                    data.push({
                        y: 0,
                    });
                }

                return data;
            }())
        }]
    })

    Highcharts.chart('bvmV',{
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
                fontWeight:'normal'
            }
        },
        yAxis: {
            title: { text: 'Milimetros (mm)' },
            tickPositions: [5, 16, 27, 38, 49, 60, 71, 82, 93, 104]
        },
        colors: ['#313131','#313131','#313131'],
        xAxis: {
            categories: ['16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
        },
        credits: {enabled:false},
        series: [{
            type: "line",
            name: 'Pct. 5',
            dashStyle: "Dot",
            marker: {enabled:false},
            data: [23,25,27,28,29,29,30,30,30,30,30,30,30,29,29,29,29,29,28,28,27,26,24,23,21]
        }, {
            type: "line",
            name: 'Pct. 95',
            dashStyle: "Dot",
            marker: { enabled: false },
            data: [59,62,64,66,67,68,68,68,68,68,68,69,69,69,69,70,71,72,72,72,71,70,68,66,62]
        }, {
            type: "line",
            name: 'BVM',
            dashStyle: "Dot",
            marker: { symbol: 'square' },
            lineWidth: 0,
            data: (
                function () {
                    var data = [];
                    var edadGest = the("eg").value;

                    for (let i = 16; i < edadGest; i ++ ) {
                        data.push({
                            y: 0,
                        });
                    }

                    data.push({
                            y: parseFloat(the("bvm").value),
                    });

                    for (let i = edadGest +1; i <= 39; i ++ ) {
                        data.push({
                            y: 0,
                        });
                    }

                    return data;
                }()
            )
        }]
    })

    Highcharts.chart('cccaV',{
        title: {
            text: 'Cc / Ca *',
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
            title: { text: 'Valor cuociente' },
            tickPositions: [0.75, 0.82, 0.88, 0.95, 1, 1.07, 1.14, 1.2, 1.27, 1.33]
        },
        colors: ['#313131', '#313131', '#313131'],
        xAxis: {
            categories: ['15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
        },
        credits: { enabled: false },
        series: [{
            type: "line",
            name: 'Pct. 3',
            marker: { enabled: false },
            data: [1.1,1.09,1.08,1.07,1.06,1.06,1.05,1.04,1.03,1.02,1.01,1,1,0.99,0.98,0.97,0.96,0.95,0.95,0.94,0.93,0.92,0.91,0.9,0.89,0.89]
        }, {
            type: "line",
            name: 'Pct. 97',
            marker: { enabled: false },
            data: [1.29,1.28,1.27,1.26,1.25,1.24,1.24,1.23,1.22,1.21,1.2,1.19,1.18,1.18,1.17,1.17,1.16,1.15,1.14,1.13,1.12,1.11,1.1,1.09,1.08,1.08]
        }, {
            type: "line",
            name: 'CC/CA',
            dashStyle: "Dot",
            marker: { symbol: 'square' },
            lineWidth: 0,
            data: (function () {
                var data = [];
                var edadGest = the("eg").value;
 
                for (let i = 16; i <= edadGest; i++) {
                    data.push({
                        y: 0,
                    });
                }

                data.push({
                    y: parseFloat(the("ccca").value),
                });

                for (let i = edadGest + 1; i <= 39; i++) {
                    data.push({
                        y: 0,
                    });
                }

                return data;
            }())
        }]
    })

}

the("edadGestacionalG").onclick = function(){

}

the("saco").onkeyup = function(){
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
        the("determinacionSacoEg").innerHTML = "Edad gestacional : " + _saco + " sem"
        the("fppsaco").innerText = humanDate(fechas.fpp(_fur))
        the("sacof").classList.remove("d-none")
    }else{
        the("sacof").classList.add("d-none")
    }
}

the("edadPrimeroNo").onchange = function(){
    the("determinacionLCN").classList.add("d-none")
    the("determinacionSaco").classList.add("d-none")
    the("ajustePrimero").classList.add("d-none")
}

the("edadPrimeroSi").onchange = function(){
    let _lcn = the("lcn").value
    let _saco = the("saco").value

    if (_lcn != "" || +_lcn != 0){
        the("determinacionLCN").classList.remove("d-none")
        the("ajustePrimero").classList.remove("d-none")
    }
    if (_saco != "" || +_saco != 0){
        the("determinacionSaco").classList.remove("d-none")
    }
}

the("edadPrimeroAjustarSi").onchange = function(){
    let _furOld = fechas.toDate(the("fur").value)
    let _fppOld = fechas.toDate(the("fpp").value)

    the("furOld").innerHTML = humanDate(_furOld)
    the("egOld").innerHTML = the("eg").value + ", " + the("dias").value
    the("fppOld").innerHTML = humanDate(_fppOld)

    //calcular Fur según LCN
    let _lcn = lcn.calcular(the("lcn").value)
    let _fexamen = fechas.toDate(the("fexamen").value)

    //calcular la fur con la parte entera del lcn, despues agregar los días
    let _ilcn = Math.trunc(_lcn)
    let _fur = fechas.fur(_ilcn, _fexamen);
    _fur.setDate(_fur.getDate() - (_ilcn - _lcn));

    the("fur").value = inputDate(_fur)

    the("furNew").innerHTML = humanDate(_fur)
    the("egNew").innerHTML = _lcn
    the("fppNew").innerHTML = humanDate(fechas.fpp(_fur))

    the("fur").onchange()
    the("ajustePrimeroReady").classList.remove("d-none")
}

//Segundo Tercer trimestre
the("dbp").onkeyup = function(){
    let _dbp = dbp.calcular(the("eg").value, +this.value)

    ajustarProgreso(_dbp, "dbpG")

}

the("cc").onkeyup = function(){
    let _cc = cc.calcular(the("eg").value, +this.value)

    ajustarProgreso(_cc, "ccG")

    let _pfe = psohdlk(the("cc").value, the("ca").value, the("lf").value) 
    the("pfe").value = _pfe + " gramos"
    the("pfe").dataset.value = _pfe
    ajustarProgreso(pfe.calcular(the("eg").value, _pfe), "pfeG")

    let _ccca = ccca.calcular(+this.value, +the("ca").value)

    the("ccca").value = _ccca
    ajustarProgreso(ccca.percentil(the("eg").value, _ccca), "cccaG")

}

the("ca").onkeyup = function(){
    let _ca = ca.calcular(the("eg").value, +this.value)
    ajustarProgreso(_ca, "caG")

    let _pfe = psohdlk(the("cc").value, the("ca").value, the("lf").value) 
    the("pfe").value = _pfe + " gramos"
    the("pfe").dataset.value = _pfe
    ajustarProgreso(pfe.calcular(the("eg").value, _pfe), "pfeG")

    let _ccca = ccca.calcular(+the("cc").value, +this.value)

    the("ccca").value = _ccca
    ajustarProgreso(ccca.percentil(the("eg").value, _ccca), "cccaG")
}

the("lf").onkeyup = function(){
    let _lf = lf.calcular(the("eg").value, +this.value)

    ajustarProgreso(_lf, "lfG")

    let _pfe = psohdlk(the("cc").value, the("ca").value, the("lf").value) 
    the("pfe").value = _pfe + " gramos"
    the("pfe").dataset.value = _pfe
    ajustarProgreso(pfe.calcular(the("eg").value, _pfe), "pfeG")

}

the("lh").onkeyup = function(){
    let _lh = lh.calcular(the("eg").value, +this.value)

    ajustarProgreso(_lh, "lhG")

}

the("cb").onkeyup = function(){
    let _cb = cb.calcular(the("eg").value, +this.value)

    ajustarProgreso(_cb, "cbG")

}

the("bvm").onkeyup = function(){
    let _bvm = bvm.calcular(the("eg").value, +this.value)

    ajustarProgreso(_bvm, "bvmG")

}

the("ila").onkeyup = function(){
    let _ila = ila.calcular(the("eg").value, +this.value)

    ajustarProgreso(_ila, "ilaG")

}

the("edadSegundoNo").onchange = function(){
    the("biometriAdicional").classList.add("d-none")
}

the("edadSegundoSi").onchange = function(){
    the("biometriAdicional").classList.remove("d-none")
}

//Doppler
the("aud").onkeyup = function(){
    let _ut = uterinas.calcular(the("eg").value, +this.value)

    ajustarProgreso(_ut.raw, "audG")

    let aud = the("aud").value
    let aui = the("aui").value

    aud = aud.toString(); 
    aud = aud.replace(",", ".");
    aud = parseFloat(aud);

    aui = aui.toString(); 
    aui = aui.replace(",", ".");
    aui = parseFloat(aui);

    if (aui > 0 && aud > 0){
        let utprom = ((aui + aud) / 2);
        the("aup").value = utprom

        utprom = uterinas.calcular(the("eg").value, +utprom)
        ajustarProgreso(utprom.raw, "aupG")

    }

}

the("aui").onkeyup = function(){
    let _ut = uterinas.calcular(the("eg").value, +this.value)

    ajustarProgreso(_ut.raw, "auiG")

    let aud = the("aud").value
    let aui = the("aui").value

    aud = aud.toString(); 
    aud = aud.replace(",", ".");
    aud = parseFloat(aud);

    aui = aui.toString(); 
    aui = aui.replace(",", ".");
    aui = parseFloat(aui);

    if (aui > 0 && aud > 0){
        let utprom = ((aui + aud) / 2);
        the("aup").value = utprom

        utprom = uterinas.calcular(the("eg").value, +utprom)
        ajustarProgreso(utprom.raw, "aupG")

    }
}

the("au").onkeyup = function(){
    let _au = umbilical.calcular(the("eg").value, +this.value)

    ajustarProgreso(_au, "auG")

    let _ccp = ccp.calcular(the("acm").value, this.value)

    the("ccp").value = _ccp
    
    ajustarProgreso(ccp.percentil(the("eg").value, _ccp), "ccpG")

}

the("acm").onkeyup = function(){
    let _acm = cerebral.calcular(the("eg").value, +this.value)

    ajustarProgreso(_acm, "acmG")

    let _ccp = ccp.calcular(the("acm").value, the("au").value)
    the("ccp").value = _ccp
    ajustarProgreso(ccp.percentil(the("eg").value, _ccp), "ccpG")

}

the("dv").onkeyup = function(){
    let _dv = ductus.calcular(the("eg").value, +this.value)

    ajustarProgreso(_dv, "dvG")

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