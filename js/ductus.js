export class ductus{

    static calcular(eg, _dv){

        let a = [0.32, 0.32, 0.32, 0.32, 0.32, 0.32, 0.31, 0.31, 0.31, 0.3, 0.29, 0.28, 0.28, 0.27, 0.26, 0.25, 0.24, 0.23, 0.22, 0.21, 0.2]
        let b = [0.83, 0.83, 0.83, 0.83, 0.83, 0.83, 0.82, 0.82, 0.81, 0.81, 0.8, 0.79, 0.78, 0.77, 0.76, 0.75, 0.74, 0.73, 0.72, 0.71, 0.7]

        _dv = _dv.toString();
        _dv = _dv.replace(",", ".");
        _dv = parseFloat(_dv);

        if (eg < 20 || eg > 40){
            return 0
        }else {
            eg = parseInt(eg);
            eg = eg - 20;

            let uno = b[eg] - a[eg];
            let dos = _dv - a[eg];
            return parseInt(90 / (uno) * (dos) + 5);

        }
    }
}