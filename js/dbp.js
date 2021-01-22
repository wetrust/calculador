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