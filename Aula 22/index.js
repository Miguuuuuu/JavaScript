/*
Operadores Lógicos
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU
! -> NOT -> NÃO
*/

// And (&&)

 const expressaoAnd = true && true && true && true;
console.log(expressaoAnd); 

// Or (||)

 const expressaoOr = false || false || true || false;
console.log(expressaoOr); 


// Not (!)

const expressaoNot = true
console.log(!expressaoNot); // Se colocar duas negacões, volta ao valor original


// Exemplo

 const usuario = 'Miguel'; //form usuário digitou
const senha = '123456'; //form usuário digitou

//                      True                  False
const vailogar = usuario === 'Miguel' && senha === '12345'; 
console.log(vailogar);

