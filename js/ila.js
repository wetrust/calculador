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
            let dos = ila - pct5ILA[eg];

            return parseInt(90 / (uno) * (dos) + 5);
        }else{
            return 0
        }
    }
}