//               0       1        2          3       4
const alunos = ['Luiz', 'Maria', 'João']; // Luiza , Eduardo

console.log(typeof alunos);
console.log(alunos instanceof Array);

//alunos.push('Luiza');
//alunos.push('Eduardo');

//console.log(alunos.slice(0, -2)); // Fatiamento

//console.log(alunos[50]); // Preocura Elementos que não tem, mas vai retornar undefined

/* Deleta elementos mas vai fica com um buraco no seu array */
// Ex: [ 'Luiz', <1 empty item>, 'João' ]

//delete alunos[1];
//console.log(alunos);

/* Remove no começo do Array*/

//const removido = alunos.shift();
//console.log(removido);
//console.log(alunos);

/* Remove no final do Array*/

//const removido = alunos.pop();
//console.log(removido);
//console.log(alunos);

/* Adiciona no começo do Array */

//alunos.unshift('Luiza'); 
//alunos.unshift('Fábio');

/* Adiciona no fim do array */

//alunos.push('Otávio');
//alunos.push('Fábio');



//alunos[alunos.length] = 'Luiza';
//alunos[alunos.length] = 'Fábio';
//alunos[alunos.length] = 'Luana'; adiciona elementos


// console.log(alunos.length); Ver quantos elemntos tem nesse array

//alunos[0] = 'Eduardo'; // Altera um elemento do array
//alunos[3] = 'Luiza'; // Adiciona um elemento do array

//console.log(alunos); // Ver os nomes 
//console.log(alunos[0]); // Selecionar apenas o elemento 0 do array 
//console.log(alunos[2]); // Selecionar apenas o elemento 2 do array
