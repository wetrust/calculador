export class lf{

    static calcular(eg, _lf){
       
        let pct3 = [7, 9, 12, 15, 17, 21, 23, 26, 28, 30, 33, 35, 38, 40, 42, 44, 46, 48, 50, 52, 53, 55, 57, 59, 60, 62, 64, 65, 66]
        let pct97 = [12, 14, 17, 20, 23, 27, 31, 34, 38, 40, 43, 47, 50, 52, 56, 58, 62, 64, 66, 68, 71, 73, 75, 78, 80, 82, 84, 86, 88]

        if (eg < 12 || eg > 40) {  
            return 0
        } else {
            eg = parseInt(eg);
            eg = eg - 12;

            let uno = pct97[eg] - pct3[eg];
            let dos = _lf - pct3[eg];
           
            return (parseInt(95 / (uno) * (dos) + 3))
        }
    }
}