export class umbilical{

    static calcular(eg, _au){

        let a = [0.97, 0.95, 0.94, 0.92, 0.9, 0.89, 0.87, 0.85, 0.82, 0.8, 0.78, 0.75, 0.73, 0.7, 0.67, 0.65, 0.62, 0.58, 0.55, 0.52, 0.49]
        let b = [1.6, 1.56, 1.53, 1.5, 1.46, 1.43, 1.4, 1.37, 1.35, 1.32, 1.29, 1.27, 1.25, 1.22, 1.2, 1.18, 1.16, 1.14, 1.13, 1.11, 1.09];

        _au = _au.toString();
        _au = _au.replace(",", ".");
        _au = parseFloat(_au);

	    if (eg < 20 || eg > 40){
            return 0
	    }else {
            eg = parseInt(eg);
            eg = eg - 20;

            let uno = b[eg] - a[eg];
		    let dos = _au - a[eg];
            return parseInt(90 / (uno) * (dos) + 5);
	    }
    }
}