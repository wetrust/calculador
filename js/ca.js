export class ca{

    static calcular(eg, _ca){

        let pct3 = [];
        let pct97 = [];
       
        pct3[0] = 42;pct3[1] = 52;pct3[2] = 64;pct3[3] = 75;pct3[4] = 86;
        pct3[5] = 97;pct3[6] = 109;pct3[7] = 119;pct3[8] = 131;pct3[9] = 141;
        pct3[10] = 151;pct3[11] = 161;pct3[12] = 171;pct3[13] = 181;
        pct3[14] = 191;pct3[15] = 200;pct3[16] = 209;pct3[17] = 218;pct3[18] = 227;
        pct3[19] = 236;pct3[20] = 245;pct3[21] = 253;pct3[22] = 261;pct3[23] = 269;
        pct3[24] = 277;pct3[25] = 285;pct3[26] = 292;pct3[27] = 299;pct3[28] = 307;
       
        pct97[0] = 71;pct97[1] = 79;pct97[2] = 92;pct97[3] = 102;pct97[4] = 113;
        pct97[5] = 127;pct97[6] = 141;pct97[7] = 155;pct97[8] = 170;
        pct97[9] = 183;pct97[10] = 192;pct97[11] = 209;pct97[12] = 223;
        pct97[13] = 235;pct97[14] = 248;pct97[15] = 260;pct97[16] = 271;pct97[17] = 284;
        pct97[18] = 295;pct97[19] = 306;pct97[20] = 318;pct97[21] = 329;pct97[22] = 339;
        pct97[23] = 349;pct97[24] = 359;pct97[25] = 370;pct97[26] = 380;pct97[27] = 389;
        pct97[28] = 399;

        if (eg < 12 || eg > 40) {
            return 0
        }
        else {
            eg = parseInt(eg);
            eg = eg - 12;

            let uno = pct97[eg] - pct3[eg];
            let dos = _ca - pct3[eg];

            return (parseInt(95 / (uno) * (dos) + 3))
        }
    }
}