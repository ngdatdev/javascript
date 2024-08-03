let expression = ''
let btn = document.querySelectorAll('.btn')
let result = document.querySelector('#result')
let equal = document.querySelector('.equals')
let clear = document.querySelector('.btn.clear')
function getExpression(num) {
    expression += num
    result.value = expression
}

function getResult() {
    try {
        result.value = eval(expression)
    } catch {
        result.value = result.value
    }
    
}

function clearExpression() {
    expression = ''
    result.value = expression
}

for (let i = 0; i < btn.length; i++)
    btn[i].onclick = getExpression.bind(null, btn[i].innerText)

equal.onclick = getResult.bind(null, 1)
clear.onclick = clearExpression.bind(null, 1)