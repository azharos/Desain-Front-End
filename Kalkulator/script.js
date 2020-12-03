const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const dot = document.querySelector('.dot');
const plus = document.querySelector('.plus');
const kurang = document.querySelector('.kurang');
const kali = document.querySelector('.kali');
const bagi = document.querySelector('.bagi');
const equale = document.querySelector('.equale');
const clear = document.querySelector('.clear');

function calc(e) {
    document.calc.val.value += e.target.innerHTML;
}

zero.onclick = calc;
one.onclick = calc;
two.onclick = calc;
three.onclick = calc;
four.onclick = calc;
five.onclick = calc;
six.onclick = calc;
seven.onclick = calc;
eight.onclick = calc;
nine.onclick = calc;
dot.onclick = calc;
plus.onclick = calc;
kurang.onclick = calc;
kali.onclick = calc;
bagi.onclick = calc;

clear.onclick = function() {
    document.calc.val.value = '';
}

equale.onclick = function() {
    document.calc.val.value = eval(document.calc.val.value);
}