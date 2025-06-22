/* const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data1 = new Date(0 + tresHoras - umDia); // 01/01/1970 Timestamp unix
const data2 = new Date(); // a, m, d, h, M, s, ms
const data3 = new Date(1750603232601);
console.log('Dia', data3.getDate());
console.log('Mês', data3.getMonth() + 1); // Mês começa do zero
console.log('Ano', data3.getFullYear());
console.log('Hora', data3.getHours());
console.log('Min', data3.getMinutes());
console.log('Seg', data3.getSeconds());
console.log('Ms', data3.getMilliseconds());
console.log('Dia semana', data3.getDay()); // 0 = Domingo , 6 = Sábado
console.log(data3.toString()); 
console.log(Date.now()); */






function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);