// (condição) ? 'Valor para verdadeiro' : 'Valor para Falso'
const potuacaoUsuario = 1000;
const nivelUsuario = potuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal'

const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);

