
let umaString = "Um \"texto\""; 
// Para coloca uma barra invertida(\) no texto e so fazer assim: "Um //temto"
console.log(umaString);
//            01234567
let string = "Um texto";

console.log(string[4]); //e

//             0123456789
let string2 = "O rato roeu a roupa do rei de roma.";

console.log(string2.charAt(6));
console.log(string2.concat(' em um lindo dia.'));
console.log(string2 + ' em um lindo dia.');
console.log(`${string2} em um lindo dia.`); // Melhor forma
console.log(string2.indexOf('o', 3));
console.log(string2.lastIndexOf('o'));
console.log(string2.match(/[a-z]/g));
console.log(string2.search(/[a-z]/));
console.log(string2.replace(/r/g, '#'));
console.log(string2.length);
console.log(string2.slice(32)) //
console.log(string2.slice(-3)); //
console.log(string2.slice(-5, string2.length -1)); //
console.log(string2.substring(string2.length -5, string2.length -1)); //
console.log(string2.split(' ', 3)); //
console.log(string2.toUpperCase()); //
console.log(string2.toLowerCase()); //