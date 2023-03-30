const fInput = document.querySelector('.first-number');
const sInput = document.querySelector('.second-number');
const thInput = document.querySelector('.third-number');
const btn = document.querySelector('button');
const res = document.querySelector('.result');

res.addEventListener('mouseover',() => {
    res.style.cursor = 'not-allowed';
    res.disabled = true;
});

btn.onclick = function() {
    let a = +fInput.value;
    let b = +sInput.value;
    let c = +thInput.value;
    let sum = a + b + c;
    res.setAttribute('value', sum);
};

