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

        date.setDate(date.getDate() + 280);

        return date;
    }

    //hay un error al tomas una fecha
    //ya que a la fecha le quita 3 o 4 horas y se atraza
    //por eso cuando tomas una fecha string hay que agregarles las 
    //horas que el sistema le descuenta
    //ese error solo pasa cuando se toma una fecha desde un
    //input
    static toDate(fecha){
        let date = new Date();

        date.setTime(Date.parse(fecha))
        let n = 1000 *60* date.getTimezoneOffset();
        date.setTime(date.getTime() + n)

        return date
    }
}