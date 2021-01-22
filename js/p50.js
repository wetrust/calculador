export class p50{

    static calcular(eg, _dbp, _cc, _lf, _cb, _lh){

        const N7 = new Number(9.468544279);
        const N8 = new Number(1.015432196);

        let N = new Number(N7 * Math.pow(N8, _dbp));
        _dbp = Math.floor(N) + "." + Math.round((N - Math.floor(N)) * 7);


        let c1 = new Number(9.413641651);
        let c2 = new Number(1.004137705);

        N = new Number(c1 * Math.pow(c2, _cc));
        _cc =  Math.floor(N) + "." + Math.round((N - Math.floor(N)) * 7);

        c1 = new Number(11.20178254);
        c2 = new Number(1.01704237);

        N = new Number(c1 * Math.pow(c2, _lf));
        _lf =  Math.floor(N) + "." + Math.round((N - Math.floor(N)) * 7);


        let dbpdias = (Math.floor(_dbp) * 7) + ((_dbp - Math.floor(_dbp)) * 10);
        let ccdias = (Math.floor(_cc) * 7) + ((_cc - Math.floor(_cc)) * 10);
        let lfdias = (Math.floor(_lf) * 7) + ((_lf - Math.floor(_lf)) * 10);
        let egbio = 0

        if (_cb > 0) {
            let cbdias = (Math.floor(_cb) * 7) + ((_cb - Math.floor(_cb)) * 10);
            egbio = (ccdias + lfdias + cbdias) /3;
        }
        else {
            egbio = (dbpdias + ccdias + lfdias) /3;
        }

        if (_lh > 0) {
            let lhdias = (Math.floor(_lh) * 7) + ((_lh - Math.floor(_lh)) * 10);
            egbio = (lhdias + egbio) /2;
        }

        return Math.floor(egbio / 7)+"."+ Math.floor(egbio - (Math.floor(egbio/7) *7));

    }
}