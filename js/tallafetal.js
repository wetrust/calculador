export class tallaFetal{
    static calcular(_lf){

        return parseInt(_lf * 0.55 + 9.6);

    }

    static percentil(eg, _talla){

        let Pct90Talla = [34.1, 35.7, 37.2, 38.7, 40.1, 41.6, 43.1, 44.3, 45.6, 46.8, 47.9, 49.1, 49.9, 50.8, 51.5, 52.1, 52.6, 52.9, 53.1]
        let Pct10Talla = [29.8, 31.1, 32.3, 33.6, 35.1, 36.5, 37.7, 39.1, 40.5, 41.8, 43.1, 44.2, 45.3, 46.3, 47.2, 47.9, 48.5, 48.8, 49.1]

        if (eg < 12 || eg > 40) {  
            return 0;
        }
        else {
            eg = parseInt(eg);
            eg = eg - 24;

            let uno = parseFloat(Pct90Talla[eg]) -  parseFloat(Pct10Talla[eg]);
            let dos = parseFloat(_talla) -  parseFloat(Pct10Talla[eg]);

            return Math.trunc(80 / (uno) * (dos) + 10)
        }
    }

}