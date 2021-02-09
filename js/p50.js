export class p50{

    static calcular(_dbp, _cc, _lf, _cb, _lh){

        //calcular dbp
        const N7 = new Number(9.468544279);
        const N8 = new Number(1.015432196);
        var N = new Number(N7 * Math.pow(N8, _dbp));
        _dbp = Math.floor(N) + "." + Math.round((N - Math.floor(N)) * 7);

        var c1 = new Number(9.413641651);
        var c2 = new Number(1.004137705);
        N = new Number(c1 * Math.pow(c2, _cc));
        _cc =  Math.floor(N) + "." + Math.round((N - Math.floor(N)) * 7);

        c1 = new Number(11.20178254);
        c2 = new Number(1.01704237);
        N = new Number(c1 * Math.pow(c2, _lf));
        _lf =  Math.floor(N) + "." + Math.round((N - Math.floor(N)) * 7);

        var dbpdias = (Math.floor(_dbp) * 7) + ((_dbp - Math.floor(_dbp)) * 10);
        var ccdias = (Math.floor(_cc) * 7) + ((_cc - Math.floor(_cc)) * 10);
        var lfdias = (Math.floor(_lf) * 7) + ((_lf - Math.floor(_lf)) * 10);

        let egbio = 0;

        if (_cb > 0) {
            _cb = _cb / 10;
            var egHill = 6.37+(5.4*_cb)+(0.78*Math.pow(_cb,2))-(0.13*Math.pow(_cb,3));
            //añadir mayor presicion, ya se suma 1 dia
            _cb = Math.round( egHill * 10 ) / 10;
            var cbdias = (Math.floor(_cb) * 7) + ((_cb - Math.floor(_cb)) * 10);
            egbio = (ccdias + lfdias + cbdias) /3;
        } else {
            egbio = (dbpdias + ccdias + lfdias) /3;
        }

        let a = [12.4, 12.6, 13.1, 13.4, 13.6, 14.1, 14.4, 14.6, 15.1, 15.4, 15.6, 16.2, 16.5, 17.1, 17.3, 17.6, 18.1, 18.4, 19, 19.3, 19.6, 20.2, 20.5, 21.1, 21.4, 22, 22.4, 22.6, 23.3, 23.6, 24.2, 24.6, 25.2, 25.5, 26.1, 26.5, 27.1, 27.5, 28.1, 28.6, 29.2, 29.6, 30.2, 30.6, 31.3, 32, 32.4, 33.1, 33.4, 34.1, 34.6, 35.2, 35.6, 36.4, 37.1, 37.5, 38.2, 38.6, 39.4, 40.1]

        if (_lh > 0) {
            _lh = _lh -10
            _lh =  a[_lh];
            var lhdias = (Math.floor(_lh) * 7) + ((_lh - Math.floor(_lh)) * 10);
            egbio = (lhdias + egbio) /2;
        }
    
        return Math.floor(egbio / 7)+"."+ Math.floor(egbio - (Math.floor(egbio/7) *7));

    }
}