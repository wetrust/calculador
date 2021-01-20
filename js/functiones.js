export class fechas{
    static fur(eg, fexamen){
        fexamen = (typeof fexamen === typeof undefined) ? new Date() : fexamen

        fexamen.setDate(fexamen.getDate() - (eg*7));

        return fexamen;
    }

    static eg(fur, fexamen){
        fur = (typeof fur === typeof undefined) ? new Date() : fur
        fexamen = (typeof fexamen === typeof undefined) ? new Date() : fexamen

        let _fur = 1000 *60* fur.getTimezoneOffset();
        let _fexamen = 1000 *60* fexamen.getTimezoneOffset();

        let diff = (fexamen.getTime()) - (fur.getTime());

        return (diff > 0) ? Math.trunc((diff/(1000*60*60*24)) /7) : 0

    }

    static fpp(date){
        date = (typeof date === typeof undefined) ? new Date() : date

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