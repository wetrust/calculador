export class uterinas{

    static calcular(eg, _valor){

        let a = [1.23, 1.18, 1.11, 1.05, 0.99, 0.94, 0.89, 0.85, 0.81, 0.78, 0.74, 0.71, 0.69, 0.66, 0.64, 0.62, 0.6, 0.58, 0.56, 0.55, 0.54, 0.52, 0.51, 0.51, 0.51, 0.49, 0.48, 0.48, 0.47, 0.47, 0.47];
        let b = [2.84, 2.71, 2.53, 2.38, 2.24, 2.11, 1.99, 1.88, 1.79, 1.71, 1.61, 1.54, 1.47, 1.41, 1.35, 1.3, 1.25, 1.21, 1.17, 1.13, 1.11, 1.06, 1.04, 1.01, 0.99, 0.97, 0.95, 0.94, 0.92, 0.91, 0.91];

        _valor = _valor.toString(); 
        _valor = _valor.replace(",", ".");
        _valor = parseFloat(_valor);

        let respuesta = {
            pct: 0,
            raw: 0,
            rango: {
                min:0,
                max:0
            }
        }

        if (eg < 10 || eg > 40) {
            return respuesta;
        }
        else {
            eg = eg - 10;
            let uno = 0, dos = 0;
            
            if (_valor > 0){
                eg = parseInt(eg);
                uno = b[eg] - a[eg];
                dos = _valor - a[eg];
                _valor = parseInt(90 / (uno) * (dos) + 5);
    
                respuesta.raw = _valor;
    
                if (_valor > 95){
                    _valor = '> 95';
                }
                else if (_valor < 5){
                    _valor = '< 5';
                }
    
                respuesta.pct = _valor;
                respuesta.rango.min = a[eg];
                respuesta.rango.max = b[eg];
                return respuesta;
            }
        }
    }
}