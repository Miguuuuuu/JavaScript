/*
&& -> false && true -> false  "o valor mesmo"
|| -> true || false -> vai retornar "o valor verdadeiro"

FALSY 
false
0
"" '' ``
null / undefined
NaN
*/

// ||

const a = 0;
const b = null;
const c = false; 
const d = false;
const e = NaN;

console.log(a || b || c || d || e);

// &&

 function falaOi () {
    return 'Oi';
}

let vaiExecutar = 'Joãozinho';

console.log(vaiExecutar && falaOi()); 