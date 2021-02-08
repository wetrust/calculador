export class cc{

    static valores(){
        let pct3 = [64, 74, 88, 100, 113, 126, 137, 149, 161, 172, 183, 194, 204, 214, 224, 233, 242, 250, 258, 267, 274, 280, 287, 293, 299, 303, 308, 311, 315]
        let pct97 = [81, 94, 106, 120, 135, 150, 165, 179, 193, 206, 219, 232, 243, 256, 268, 279, 290, 300, 310, 319, 328, 336, 343, 351, 358, 363, 368, 373, 377]
        
        return {pct3, pct97}
    }
    
    static calcular(eg, _cc){

        let tabla = this.valores()

        if (eg < 12 || eg > 40) {
            return 0
        }

        eg = (parseInt(eg) - 12)

        return parseInt(95 / (tabla.pct97[eg] - tabla.pct3[eg]) * (_cc - tabla.pct3[eg]) + 3)
    }
}

export class ca{

    static calcular(eg, _ca){

        let pct3 = [42, 52, 64, 75, 86, 97, 109, 119, 131, 141, 151, 161, 171, 181, 191, 200, 209, 218, 227, 236, 245, 253, 261, 269, 277, 285, 292, 299, 307]
        let pct97 = [71, 79, 92, 102, 113, 127, 141, 155, 170, 183, 192, 209, 223, 235, 248, 260, 271, 284, 295, 306, 318, 329, 339, 349, 359, 370, 380, 389, 399]

        if (eg < 12 || eg > 40) {
            return 0
        } else {
            eg = parseInt(eg);
            eg = eg - 12;

            let uno = pct97[eg] - pct3[eg];
            let dos = _ca - pct3[eg];

            return (parseInt(95 / (uno) * (dos) + 3))
        }
    }
}

export class ccca{

    static calcular(_cc, _ca){

        if (_cc > 0 && _ca > 0 ) {
            let ccca = _cc / _ca;

            return ccca.toFixed(2)

        }else{

            return 0

        }
    }

    static percentil(eg, _ccca){
        let pct3 = [];
        let pct97 = [];

        pct3[0] = 1.1;pct3[1] = 1.09;pct3[2] = 1.08;pct3[3] = 1.07;pct3[4] = 1.06;
        pct3[5] = 1.06;pct3[6] = 1.05;pct3[7] = 1.04;pct3[8] = 1.03;pct3[9] = 1.02;
        pct3[10] = 1.01;pct3[11] = 1;pct3[12] = 1;pct3[13] = 0.99;pct3[14] = 0.98;
        pct3[15] = 0.97;pct3[16] = 0.96;pct3[17] = 0.95;pct3[18] = 0.95;pct3[19] = 0.94;
        pct3[20] = 0.93;pct3[21] = 0.92;pct3[22] = 0.91;pct3[23] = 0.9;pct3[24] = 0.89;
        pct3[25] = 0.89;

        pct97[0] = 1.29;pct97[1] = 1.28;pct97[2] = 1.27;pct97[3] = 1.26;pct97[4] = 1.25;
        pct97[5] = 1.24;pct97[6] = 1.24;pct97[7] = 1.23;pct97[8] = 1.22;pct97[9] = 1.21;
        pct97[10] = 1.2;pct97[11] = 1.19;pct97[12] = 1.18;pct97[13] = 1.18;pct97[14] = 1.17;
        pct97[15] = 1.17;pct97[16] = 1.16;pct97[17] = 1.15;pct97[18] = 1.14;pct97[19] = 1.13;
        pct97[20] = 1.12;pct97[21] = 1.11;pct97[22] = 1.1;pct97[23] = 1.09;pct97[24] = 1.08;
        pct97[25] = 1.08;

        if (eg < 15 || eg > 40) {

            return 0

        } else {

            eg = parseInt(eg);
            eg = eg - 15;

            let uno = pct97[eg] - pct3[eg];
            let dos = _ccca - pct3[eg];

            return parseInt(95 / (uno) * (dos) + 3);

        }
    }
}

export class cb{

    static calcular(eg, _cb){

        //cerebelo segun Hill
        let pct2ds = [];
        let pct2dsmas = [];

        pct2ds[0] = 12;pct2ds[1] = 14;pct2ds[2] = 15;pct2ds[3] = 16;pct2ds[4] = 17;pct2ds[5] = 18;
        pct2ds[6] = 19;pct2ds[7] = 20;pct2ds[8] = 21;pct2ds[9] = 22;pct2ds[10] = 24;
        pct2ds[11] = 26;pct2ds[12] = 27;pct2ds[13] = 29;pct2ds[14] = 30;pct2ds[15] = 31;
        pct2ds[16] = 33;pct2ds[17] = 36;pct2ds[18] = 37;pct2ds[19] = 38;pct2ds[20] = 40;
        pct2ds[21] = 40;pct2ds[22] = 40;pct2ds[23] = 41;pct2ds[24] = 42;pct2ds[25] = 44;

        pct2dsmas[0] = 18;pct2dsmas[1] = 18;pct2dsmas[2] = 19;pct2dsmas[3] = 20;pct2dsmas[4] = 22;
        pct2dsmas[5] = 23;pct2dsmas[6] = 25;pct2dsmas[7] = 26;pct2dsmas[8] = 27;pct2dsmas[9] = 30;
        pct2dsmas[10] = 32;pct2dsmas[11] = 34;pct2dsmas[12] = 34;pct2dsmas[13] = 37;pct2dsmas[14] = 38;
        pct2dsmas[15] = 41;pct2dsmas[16] = 43;pct2dsmas[17] = 46;pct2dsmas[18] = 48;pct2dsmas[19] = 53;
        pct2dsmas[20] = 56;pct2dsmas[21] = 58;pct2dsmas[22] = 60;pct2dsmas[23] = 62;pct2dsmas[24] = 62;
        pct2dsmas[25] = 62;
       
        if (eg < 15 || eg > 40) {
            return 0
        }else {
            eg = parseInt(eg);
            eg = eg - 15;

            let uno = pct2dsmas[eg] - pct2ds[eg];
            let dos = _cb - pct2ds[eg];
       
            return (parseInt(95 / (uno) * (dos)));
        }
    }
}

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

export class cerebral{

    static calcular(eg, _acm){

        var a = [],b = [],c = [],d = [];

        a[0]=1.24;a[1]=1.29;a[2]=1.34;a[3]=1.37;a[4]=1.4;a[5]=1.43;a[6]=1.44;a[7]=1.45;a[8]=1.45;a[9]=1.44;a[10]=1.43;a[11]=1.41;a[12]=1.38;a[13]=1.34;a[14]=1.3;a[15]=1.25;a[16]=1.19;a[17]=1.13;a[18]=1.05;a[19]=0.98;a[20]=0.89;
        b[0]=1.98;b[1]=2.12;b[2]=2.25;b[3]=2.36;b[4]=2.45;b[5]=2.53;b[6]=2.59;b[7]=2.63;b[8]=2.66;b[9]=2.67;b[10]=2.67;b[11]=2.65;b[12]=2.62;b[13]=2.56;b[14]=2.5;b[15]=2.41;b[16]=2.31;b[17]=2.2;b[18]=2.07;b[19]=1.92;b[20]=1.76;

        _acm = _acm.toString();
        _acm = _acm.replace(",", ".");
        _acm = parseFloat(_acm);

        if (eg < 20 || eg > 40)
        {
            return 0
        }
        else {
            eg = parseInt(eg);
            eg = eg - 20;

            let uno = b[eg] - a[eg];
            let dos = _acm - a[eg];

            return parseInt(90 / (uno) * (dos) + 5);
        }
    }
}

export class dbp{

    static calcular(eg, _dbp){

        //calculos segun DE
        let DBPMenos2DE = [];
        let DBPMas2DE = [];

        DBPMenos2DE[0] = 14; DBPMenos2DE[1] = 17; DBPMenos2DE[2] = 19; DBPMenos2DE[3] = 25; DBPMenos2DE[4] = 29; DBPMenos2DE[5] = 33;
        DBPMenos2DE[6] = 34; DBPMenos2DE[7] = 38; DBPMenos2DE[8] = 41; DBPMenos2DE[9] = 43; DBPMenos2DE[10] = 46; DBPMenos2DE[11] = 49;
        DBPMenos2DE[12] = 52; DBPMenos2DE[13] = 54; DBPMenos2DE[14] = 57; DBPMenos2DE[15] = 61; DBPMenos2DE[16] = 63; DBPMenos2DE[17] = 65;
        DBPMenos2DE[18] = 69; DBPMenos2DE[19] = 69; DBPMenos2DE[20] = 74; DBPMenos2DE[21] = 74; DBPMenos2DE[22] = 77; DBPMenos2DE[23] = 78;
        DBPMenos2DE[24] = 78; DBPMenos2DE[25] = 81; DBPMenos2DE[26] = 85; DBPMenos2DE[27] = 88;

        DBPMas2DE[0] = 25; DBPMas2DE[1] = 29; DBPMas2DE[2] = 33; DBPMas2DE[3] = 35; DBPMas2DE[4] = 41; DBPMas2DE[5] = 42;
        DBPMas2DE[6] = 46; DBPMas2DE[7] = 50; DBPMas2DE[8] = 52; DBPMas2DE[9] = 56; DBPMas2DE[10] = 59; DBPMas2DE[11] = 63;
        DBPMas2DE[12] = 66; DBPMas2DE[13] = 70; DBPMas2DE[14] = 71; DBPMas2DE[15] = 75; DBPMas2DE[16] = 77; DBPMas2DE[17] = 81;
        DBPMas2DE[18] = 83; DBPMas2DE[19] = 87; DBPMas2DE[20] = 88; DBPMas2DE[21] = 91; DBPMas2DE[22] = 94; DBPMas2DE[23] = 95;
        DBPMas2DE[24] = 97; DBPMas2DE[25] = 99; DBPMas2DE[26] = 97; DBPMas2DE[27] = 106;
    
        if (eg < 12 || eg > 40) {
            return 0
        } else {
            eg = parseInt(eg);
            eg = eg - 12;

            let uno = DBPMas2DE[eg] - DBPMenos2DE[eg];
            let dos = _dbp - DBPMenos2DE[eg];
     
            return (parseInt(95 / (uno) * (dos) + 3))
        }
    }
}

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

export class bvm{

    static calcular(eg, _bvm){
        let a = [], b = [];
        a[0]=23; a[1]=25; a[2]=27; a[3]=28; a[4]=29; a[5]=29; a[6]=30; a[7]=30; a[8]=30; a[9]=30; a[10]=30; a[11]=30; a[12]=30; a[13]=29; a[14]=29; a[15]=29; a[16]=29; a[17]=29; a[18]=28; a[19]=28; a[20]=27; a[21]=26; a[22]=24; a[23]=23; a[24]=21;
        b[0]=59; b[1]=62; b[2]=64; b[3]=66; b[4]=67; b[5]=68; b[6]=68; b[7]=68; b[8]=68; b[9]=68; b[10]=68; b[11]=69; b[12]=69; b[13]=69; b[14]=69; b[15]=70; b[16]=71; b[17]=72; b[18]=72; b[19]=72; b[20]=71; b[21]=70; b[22]=68; b[23]=66; b[24]=62;

        if (eg > 15 || eg < 41){
            eg = parseInt(eg);
            eg = eg - 16;
            let uno = b[eg] - a[eg];
            let dos = _bvm - a[eg];

            return parseInt(90 / (uno) * (dos) + 5);
        } else {
            return 0
        }
    }
}

export class ila{

    static calcular(eg, _ila){

        let pct5ILA = [], pct95ILA = [];

        pct5ILA[16] = 79; pct5ILA[17] = 83; pct5ILA[18] = 87;
        pct5ILA[19] = 90; pct5ILA[20] = 93; pct5ILA[21] = 95;
        pct5ILA[22] = 97; pct5ILA[23] = 98; pct5ILA[24] = 98;
        pct5ILA[25] = 97; pct5ILA[26] = 97; pct5ILA[27] = 95;
        pct5ILA[28] = 94; pct5ILA[29] = 92; pct5ILA[30] = 90;
        pct5ILA[31] = 88; pct5ILA[32] = 86; pct5ILA[33] = 83;
        pct5ILA[34] = 81; pct5ILA[35] = 79; pct5ILA[36] = 77;
        pct5ILA[37] = 75; pct5ILA[38] = 73; pct5ILA[39] = 72;
        pct5ILA[40] = 71; pct5ILA[41] = 70; pct5ILA[42] = 72;

        pct95ILA[16] = 185; pct95ILA[17] = 194; pct95ILA[18] = 200;
        pct95ILA[19] = 204; pct95ILA[20] = 208; pct95ILA[21] = 212;
        pct95ILA[22] = 214; pct95ILA[23] = 217; pct95ILA[24] = 218;
        pct95ILA[25] = 221; pct95ILA[26] = 223; pct95ILA[27] = 226;
        pct95ILA[28] = 228; pct95ILA[29] = 231; pct95ILA[30] = 234;
        pct95ILA[31] = 238; pct95ILA[32] = 242; pct95ILA[33] = 245;
        pct95ILA[34] = 248; pct95ILA[35] = 249; pct95ILA[36] = 249;
        pct95ILA[37] = 244; pct95ILA[38] = 239; pct95ILA[39] = 226;
        pct95ILA[40] = 214; pct95ILA[41] = 194; pct95ILA[42] = 179;

        if (eg > 15 || eg < 41){
            eg = parseInt(eg);
            
            let uno = pct95ILA[eg] - pct5ILA[eg];
            let dos = _ila - pct5ILA[eg];

            return parseInt(90 / (uno) * (dos) + 5);
        }else{
            return 0
        }
    }
}

export class lcn{

    static calcular(_lcn){

        let LCN = [[],[]];

        LCN[0][0] = 0.09; LCN[0][1] = 0.2; LCN[0][2] = 0.37;
        LCN[0][3] = 0.57; LCN[0][4] = 0.7; LCN[0][5] = 0.8;
        LCN[0][6] = 0.9; LCN[0][7] = 1; LCN[0][8] = 1.1;
        LCN[0][9] = 1.12; LCN[0][10] = 1.13; LCN[0][11] = 1.18;
        LCN[0][12] = 1.27; LCN[0][13] = 1.38; LCN[0][14] = 1.47;
        LCN[0][15] = 1.58; LCN[0][16] = 1.65; LCN[0][17] = 1.72;
        LCN[0][18] = 1.87; LCN[0][19] = 1.96; LCN[0][20] = 2.05;
        LCN[0][21] = 2.18; LCN[0][22] = 2.25; LCN[0][23] = 2.35;
        LCN[0][24] = 2.54; LCN[0][25] = 2.62; LCN[0][26] = 2.7;
        LCN[0][27] = 2.9; LCN[0][28] = 3.08; LCN[0][29] = 3.16;
        LCN[0][30] = 3.4; LCN[0][31] = 3.51; LCN[0][32] = 3.57;
        LCN[0][33] = 3.76; LCN[0][34] = 3.85; LCN[0][35] = 4.05;
        LCN[0][36] = 4.18; LCN[0][37] = 4.46; LCN[0][38] = 4.55;
        LCN[0][39] = 4.66; LCN[0][40] = 4.88; LCN[0][41] = 5.07;
        LCN[0][42] = 5.29; LCN[0][43] = 5.46; LCN[0][44] = 5.66;
        LCN[0][45] = 5.87; LCN[0][46] = 6.01; LCN[0][47] = 6.27;
        LCN[0][48] = 6.37; LCN[0][49] = 6.65; LCN[0][50] = 6.77;
        LCN[0][51] = 7.08; LCN[0][52] = 7.19; LCN[0][53] = 7.39;
        LCN[0][54] = 7.57; LCN[0][55] = 7.68; LCN[0][56] = 7.98;
        LCN[0][57] = 8.09; LCN[0][58] = 8.35; LCN[0][59] = 8.48;
        LCN[0][60] = 8.56; LCN[0][61] = 8.76; LCN[0][62] = 8.88;
        LCN[0][63] = 9.09;
    
        LCN[1][0] = 0; LCN[1][1] = 5.5; LCN[1][2] = 6;
        LCN[1][3] = 6.2; LCN[1][4] = 6.4; LCN[1][5] = 6.5;
        LCN[1][6] = 6.6; LCN[1][7] = 7.1; LCN[1][8] = 7.1;
        LCN[1][9] = 7.1; LCN[1][10] = 7.2; LCN[1][11] = 7.3;
        LCN[1][12] = 7.4; LCN[1][13] = 7.5; LCN[1][14] = 7.6;
        LCN[1][15] = 8; LCN[1][16] = 8.1; LCN[1][17] = 8.2;
        LCN[1][18] = 8.3; LCN[1][19] = 8.4; LCN[1][20] = 8.5;
        LCN[1][21] = 8.6; LCN[1][22] = 9; LCN[1][23] = 9.1;
        LCN[1][24] = 9.2; LCN[1][25] = 9.3; LCN[1][26] = 9.4;
        LCN[1][27] = 9.5; LCN[1][28] = 10; LCN[1][29] = 10.1;
        LCN[1][30] = 10.2; LCN[1][31] = 10.3; LCN[1][32] = 10.4;
        LCN[1][33] = 10.5; LCN[1][34] = 10.6; LCN[1][35] = 11;
        LCN[1][36] = 11.1; LCN[1][37] = 11.2; LCN[1][38] = 11.3;
        LCN[1][39] = 11.4; LCN[1][40] = 11.5; LCN[1][41] = 11.6;
        LCN[1][42] = 12; LCN[1][43] = 12.1; LCN[1][44] = 12.2;
        LCN[1][45] = 12.3; LCN[1][46] = 12.4; LCN[1][47] = 12.5;
        LCN[1][48] = 12.6; LCN[1][49] = 13; LCN[1][50] = 13.1;
        LCN[1][51] = 13.2; LCN[1][52] = 13.3; LCN[1][53] = 13.4;
        LCN[1][54] = 13.5; LCN[1][55] = 13.6; LCN[1][56] = 14;
        LCN[1][57] = 14.1; LCN[1][58] = 14.2; LCN[1][59] = 14.3;
        LCN[1][60] = 14.4; LCN[1][61] = 14.5; LCN[1][62] = 14.6;
        LCN[1][63] = 15;

        if (_lcn > 90 || _lcn < 1)
        {
            return 0;
        }

        _lcn = _lcn / 10;

        for (let i = 1; i <= 63; i ++ ) {
            if (LCN[0][i] >= _lcn) {
                return LCN[1][i];
            }
        }
    }
}

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

export class lh{

    static calcular(eg, _lh){
        let pct05 = [];
        let pct95 = [];
       
        pct05[12] = 4.8;   pct95[12] = 12.3;
               pct05[13] = 7.6;   pct95[13] = 15.1;
               pct05[14] = 10.3;  pct95[14] = 17.9;
               pct05[15] = 13.1;  pct95[15] = 20.7;
               pct05[16] = 15.8;  pct95[16] = 23.5;
               pct05[17] = 18.5;  pct95[17] = 26.3;
               pct05[18] = 21.2;  pct95[18] = 29.1;
               pct05[19] = 23.8;  pct95[19] = 31.6;
               pct05[20] = 26.3;  pct95[20] = 34.2;
               pct05[21] = 28.8;  pct95[21] = 36.7;
               pct05[22] = 31.2;  pct95[22] = 39.2;
               pct05[23] = 33.5;  pct95[23] = 41.6;
               pct05[24] = 35.7;  pct95[24] = 43.9;
               pct05[25] = 37.9;  pct95[25] = 46.1;
               pct05[26] = 39.9;  pct95[26] = 48.1;
               pct05[27] = 41.9;  pct95[27] = 50.1;
               pct05[28] = 43.7;  pct95[28] = 52.1;
               pct05[29] = 45.5;  pct95[29] = 53.9;
               pct05[30] = 47.2;  pct95[30] = 55.6;
               pct05[31] = 48.9;  pct95[31] = 57.3;
               pct05[32] = 50.4;  pct95[32] = 58.9;
               pct05[33] = 52.1;  pct95[33] = 60.5;
               pct05[34] = 53.4;  pct95[34] = 62.1;
               pct05[35] = 54.8;  pct95[35] = 63.5;
               pct05[36] = 56.2;  pct95[36] = 64.9;
               pct05[37] = 57.6;  pct95[37] = 66.4;
               pct05[38] = 59.8;  pct95[38] = 67.8;
               pct05[39] = 60.4;  pct95[39] = 69.3;
               pct05[40] = 61.9;  pct95[40] = 70.8;

        if (eg < 12 || eg > 40) {
            return 0
        }
        else {
            eg = parseInt(eg);
            let uno = pct95[eg] - pct05[eg];
            let dos = _lh - pct05[eg];
    
            return Math.trunc(90 / (uno) * (dos)) + 5
        }
    }
}

export class saco{

    static calcular(_saco){
        var y = [];

        y[5] =4.2; y[6] =4.3; y[7] =4.4; y[8] =4.5; y[9] =4.6;
        y[10] =5; y[11] =5.1; y[12] =5.2; y[13] =5.3; y[14] =5.4;
        y[15] =5.5; y[16] =5.6; y[17] =6; y[18] =6.1; y[19] =6.2;
        y[20] =6.3; y[21] =6.4; y[22] =6.5; y[23] =6.6; y[24] =7;
        y[25] =7.1; y[26] =7.2; y[27] =7.3; y[28] =7.4; y[29] =7.5;
        y[30] =7.6; y[31] =8; y[32] =8.1; y[33] =8.2; y[34] =8.3;
        y[35] =8.4; y[36] =8.5; y[37] =8.6; y[38] =9; y[39] =9.1;
        y[40] =9.2; y[41] =9.3; y[42] =9.4; y[43] =9.5; y[44] =9.6;
        y[45] =9.6; y[46] =10; y[47] =10.1; y[48] =10.2; y[49] =10.3;
        y[50] =10.4;y[51] =10.5; y[52] =11; y[53] =11.1; y[54] =11.2;
        y[55] =11.3; y[56] =11.4; y[57] =11.5;
        y[58] =11.6; y[59] =12; y[60] =12.1; y[61] =12.2;

        if (_saco < 5) {
            //app.sacomin();
            return 0;
        }
        if (_saco > 61) {
            //app.sacomax();
            return 0;
        }
        
        return y[_saco]; 
    }
}

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