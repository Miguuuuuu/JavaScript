const numero = 10;

// Se (numero >= 0 && numero <= 5) ocorrer, faça isso {código}
// Se não faça isso {o código}

if (numero <= 10) {
  console.log('o número é menor ou igual a 10.');
}

if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5.');
} else if (numero >= 6 && numero <= 8) {
    console.log('O número está ente 6 e 8.');
} else if (numero >= 9 && numero <= 11) {
    console.log('O número está ente 9 e 11.'); // Verdadeiro
} else {
  console.log('O número não está entre 0 e 11.');
}

console.log('...Aqui vai o resto do código.');
