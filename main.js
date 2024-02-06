const output = document.querySelector(".one");


// const operators = [...document.querySelectorAll(".three div")].map(ele => ele.textContent);
// const numbers = [...document.querySelectorAll(".four div")].map(ele => ele.textContent).splice(0,11);
// const equalSign = 
const operators = document.querySelectorAll(".three div");
const numbers = document.querySelectorAll('.four div');
operators.forEach((ele, idx) => ele.addEventListener('click', () => {
    const ops = ['+', '-', '*', '/'];
    output.textContent += ops[idx];
}));
numbers.forEach((ele, idx) => {
    output.textContent = ""
    if (idx !== 11) ele.addEventListener('click', () => output.textContent += ele.textContent)
}
);

const clear = document.querySelector('.two');

clear.addEventListener('click', () => {
    output.textContent = "0"
});

const calculate = document.querySelectorAll(".four div")[11];

calculate.addEventListener('click', () => {
    
    output.textContent = String(eval(output.textContent))
});
