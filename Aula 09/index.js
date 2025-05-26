/** Aritméticos
 * + Adição /   (- / *)
 * - Subtração
 * * Multiplicação 
 * / Divisão
 *  ** Potenciação
 * % Resto da divisão
 */

/*
()
**
* / %
+ -  
*/
const num1 = '5';
const num2 = 10;
console.log(num1 + num2);
// O valor deu 510, pois o 5 passa de ser number e vira string e fazer a Contacetanação, unindo os dois valores

const num3 = 5;
const num4 = 2;
const num5 = 10;
console.log((num3 + num4) * num5);
let contador = 1;
++contador; //2
++contador; //3
++contador; //4
++contador; //5
console.log(contador);
// Toda vez que for preciso utilizar isso, so podemos usar let, pois const não pode alterar seu valor

/* Outro exemplo */

// Incremento = ++
let contador2 = 1;
console.log(++contador2);
console.log(contador2);

// Decremento = --
let contador3 = 10;
console.log(--contador2);
console.log(--contador2);

// Exemplo 2 

const passo = 50;
let contadormain = 0;
contadormain = contadormain + passo; 
console.log(contadormain);
contadormain = contadormain + passo; 
console.log(contadormain);
contadormain = contadormain + passo; 
console.log(contadormain);

// Operadires de Atribuição

// -> let(name) **= x (Ponteciação)
// -> let(name) += x (Adição)
// -> let(name) -= x (Subtração)
// -> let(name) /= x (Divisão)

let contador4 = 2;
contador4 **= 10;
console.log(contador4);

// Exemplo 3

// -> NaN - Not a number

const number1 = 10;
const number2 = 'Migu';
console.log(number1 * number2);

// Exemplo 4
// -> parseInt (inteiro)
// -> parseFloat (Decimais)

const number3 = 10;
const number4 = Number('5.2'); 
console.log(number3 + number4);
