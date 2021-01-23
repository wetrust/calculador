export class uterinas{

    static calcular(eg, _valor){

        let a = [];
        let b = [];
        a[0]=1.23; a[1]=1.18; a[2]=1.11; a[3]=1.05;a[4]=0.99; a[5]=0.94; a[6]=0.89; a[7]=0.85; a[8]=0.81; a[9]=0.78; a[10]=0.74; a[11]=0.71; a[12]=0.69; a[13]=0.66; a[14]=0.64; a[15]=0.62; a[16]=0.6; a[17]=0.58; a[18]=0.56; a[19]=0.55; a[20]=0.54; a[21]=0.52; a[22]=0.51; a[23]=0.51; a[24]=0.51; a[25]=0.49; a[26]=0.48; a[27]=0.48; a[28]=0.47; a[29]=0.47; a[30]=0.47;
        b[0]=2.84; b[1]=2.71; b[2]=2.53; b[3]=2.38;b[4]=2.24; b[5]=2.11; b[6]=1.99; b[7]=1.88;b[8]=1.79; b[9]=1.71; b[10]=1.61; b[11]=1.54;b[12]=1.47; b[13]=1.41; b[14]=1.35; b[15]=1.3;b[16]=1.25; b[17]=1.21;b[18]=1.17; b[19]=1.13;b[20]=1.11; b[21]=1.06;b[22]=1.04; b[23]=1.01; b[24]=0.99; b[25]=0.97;b[26]=0.95; b[27]=0.94;b[28]=0.92; b[29]=0.91; b[30]=0.91;
        
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