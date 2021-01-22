export class cc{

    static calcular(eg, _cc){

        let pct3 = [];
        let pct97 = [];
       
        // para calculo de percentil
        pct3[0] = 64;pct3[1] = 74;pct3[2] = 88;pct3[3] = 100;pct3[4] = 113;pct3[5] = 126;
        pct3[6] = 137;pct3[7] = 149;pct3[8] = 161;pct3[9] = 172;pct3[10] = 183;
        pct3[11] = 194;pct3[12] = 204;pct3[13] = 214;pct3[14] = 224;pct3[15] = 233;
        pct3[16] = 242;pct3[17] = 250;pct3[18] = 258;pct3[19] = 267;pct3[20] = 274;
        pct3[21] = 280;pct3[22] = 287;pct3[23] = 293;pct3[24] = 299;pct3[25] = 303;
        pct3[26] = 308;pct3[27] = 311;pct3[28] = 315;
       
        pct97[0] = 81;pct97[1] = 94;pct97[2] = 106;pct97[3] = 120;pct97[4] = 135;
        pct97[5] = 150;pct97[6] = 165;pct97[7] = 179;pct97[8] = 193;pct97[9] = 206;
        pct97[10] = 219;pct97[11] = 232;pct97[12] = 243;pct97[13] = 256;pct97[14] = 268;
        pct97[15] = 279;pct97[16] = 290;pct97[17] = 300;pct97[18] = 310;pct97[19] = 319;
        pct97[20] = 328;pct97[21] = 336;pct97[22] = 343;pct97[23] = 351;pct97[24] = 358;
        pct97[25] = 363;pct97[26] = 368;pct97[27] = 373;pct97[28] = 377;

        if (eg < 12 || eg > 40) {
            return 0
        }
        else {
            eg = parseInt(eg);
            eg = eg - 12;

            let uno = pct97[eg] - pct3[eg];
            let dos = _cc - pct3[eg];

            return (parseInt(95 / (uno) * (dos) + 3))
        }
    }
}