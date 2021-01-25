export class ccp{

    static calcular(_acm, _au){

        _acm = _acm.toString();
        _acm = _acm.replace(",", ".");
        _acm = parseFloat(_acm);

        _au = _au.toString();
        _au = _au.replace(",", ".");
        _au = parseFloat(_au);

        let _ccp =  (_acm / _au);
        return _ccp.toFixed(2)
    }

    static percentil(eg, _ccp){

        let c = [], d = []

        c[20]=0.78;c[21]=0.87;c[22]=0.95;c[23]=1.02;c[24]=1.09;c[25]=1.15;c[26]=1.2;c[27]=1.24;c[28]=1.28;c[29]=1.31;c[30]=1.33;c[31]=1.35;c[32]=1.36;c[33]=1.36;c[34]=1.36;c[35]=1.34;c[36]=1.32;c[37]=1.3;c[38]=1.26;c[39]=1.22;c[40]=1.18;
        d[20]=1.68;d[21]=1.88;d[22]=2.06;d[23]=2.22;d[24]=2.36;d[25]=2.49;d[26]=2.6;d[27]=2.7;d[28]=2.78;d[29]=2.84;d[30]=2.89;d[31]=2.92;d[32]=2.93;d[33]=2.93;d[34]=2.91;d[35]=2.87;d[36]=2.82;d[37]=2.75;d[38]=2.67;d[39]=2.57;
    
        _ccp = _ccp.toString();
        _ccp = _ccp.replace(",", ".");
        _ccp = parseFloat(_ccp);


        if (eg < 20 || eg > 40)
        {
            return 0
        }
        else {
            eg = parseInt(eg);
			let uno = d[eg] - c[eg];
			let dos = _ccp - c[eg];
			return parseInt(90 / (uno) * (dos) + 5);
        }
    }
}