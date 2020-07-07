class DateHelper {
    
    constructor() {
        
        throw new Error('Esta classe não pode ser instanciada');
    }
    
    static dataParaTexto(data) {
        let teste = `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
        data.getDate() < 10 && data.getMonth() < 10 ? teste = `0${data.getDate()}/0${data.getMonth()+1}/${data.getFullYear()}` : null;
        data.getDate() < 10 && data.getMonth() > 10 ? teste = `0${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`: null;
        data.getDate() > 10 && data.getMonth() < 10 ? teste = `${data.getDate()}/0${data.getMonth()+1}/${data.getFullYear()}`: null;
        return teste;
    }
    
    static textoParaData(texto) {
        
        if(!/\d{2}\/\d{2}\/\d{4}/.test(texto)) 
            throw new Error('Deve estar no formato dd/mm/aaaa');
             
        return new Date(...texto.split('/').reverse().map((item, indice) => item - indice % 2));
    }
}