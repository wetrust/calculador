export class fechas{
    static fur(eg, fexamen){
        if (typeof fexamen === typeof undefined){
            fexamen = new Date();
        }

        fexamen.setDate(fexamen.getUTCDate() - (eg*7));

        return fexamen;
    }

    static fpp(date){
        if (typeof date === typeof undefined){
            date = new Date();
        }

        date.setDate(date.getUTCDate() + 282);

        return date;
    }
}