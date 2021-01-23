export class tallaFetal{
    static calcular(_lf){

        return parseInt(_lf * 0.55 + 9.6);

    }

    static percentil(eg, _talla){

        let Pct90Talla = [];
        let Pct10Talla = [];
        Pct90Talla[24] = 34.1;	  Pct90Talla[25] = 35.7;	  Pct90Talla[26] = 37.2;	  Pct90Talla[27] = 38.7;
        Pct90Talla[28] = 40.1;	  Pct90Talla[29] = 41.6;	  Pct90Talla[30] = 43.1;	  Pct90Talla[31] = 44.3;
        Pct90Talla[32] = 45.6;	  Pct90Talla[33] = 46.8;	  Pct90Talla[34] = 47.9;	  Pct90Talla[35] = 49.1;
        Pct90Talla[36] = 49.9;	  Pct90Talla[37] = 50.8;	  Pct90Talla[38] = 51.5;	  Pct90Talla[39] = 52.1;
        Pct90Talla[40] = 52.6;	  Pct90Talla[41] = 52.9;	  Pct90Talla[42] = 53.1;
  
        Pct10Talla[24] = 29.8;	  Pct10Talla[25] = 31.1;	  Pct10Talla[26] = 32.3;	  Pct10Talla[27] = 33.6;
        Pct10Talla[28] = 35.1;	  Pct10Talla[29] = 36.5;	  Pct10Talla[30] = 37.7;	  Pct10Talla[31] = 39.1;
        Pct10Talla[32] = 40.5;	  Pct10Talla[33] = 41.8;	  Pct10Talla[34] = 43.1;	  Pct10Talla[35] = 44.2;
        Pct10Talla[36] = 45.3;	  Pct10Talla[37] = 46.3;	  Pct10Talla[38] = 47.2;	  Pct10Talla[39] = 47.9;
        Pct10Talla[40] = 48.5;	  Pct10Talla[41] = 48.8;	  Pct10Talla[42] = 49.1;

        if (eg < 12 || eg > 40) {  
            return 0;
        }
        else {
            eg = parseInt(eg);

            let uno = parseFloat(Pct90Talla[eg]) -  parseFloat(Pct10Talla[eg]);
            let dos = parseFloat(_talla) -  parseFloat(Pct10Talla[eg]);

            return Math.trunc(80 / (uno) * (dos) + 10)
        }
    }

}