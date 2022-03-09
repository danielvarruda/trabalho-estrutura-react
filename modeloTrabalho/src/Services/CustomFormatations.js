export const FormateDateHour = (d) => {
    let data = new Date(d);
    let dia = data.getUTCDate().toString();
    let diaF = dia.length === 1 ? "0" + dia : dia;
    let mes = (data.getUTCMonth() + 1).toString();
    let mesF = mes.length === 1 ? "0" + mes : mes;
    let ano = data.getFullYear().toString();
    let hora = data.getHours().toString();
    let horaF = hora.length === 1 ? "0" + hora : hora;
    let minuto = data.getMinutes().toString();
    let minutoF = minuto === 0 ? "00" : minuto.length === 1 ? "0" + minuto : minuto;

    return `${diaF}/${mesF}/${ano} às ${horaF}h${minutoF}`;
};