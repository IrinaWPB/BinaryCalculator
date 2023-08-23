function intoTenBase(num) {
  return parseInt(num, 2)
}

function intoTwoBase(num) {
  return (num >>> 0).toString(2)
}


const res = document.querySelector('.res')
const expr = document.querySelector('.expr')
const btns = document.querySelector('.btns')
const btn0 = document.querySelector('.btn0')
const btn1 = document.querySelector('.btn1')
const btnClr = document.querySelector('.btnClr')
const btnEql = document.querySelector('.btnEql')
const btnSum = document.querySelector('.btnSum')
const btnSub = document.querySelector('.btnSub')
const btnMul = document.querySelector('.btnMul')
const btnDiv = document.querySelector('.btnDiv')

btns.addEventListener("click", (e) => {
  if (e.target.innerHTML == "C") {
    expr.innerHTML = ''
  } else if (e.target.innerHTML == '=') {
    expr.innerHTML = calculate(expr.innerHTML)
  } else {
    expr.append(e.target.innerHTML)
  }
})

function deleteZeroAtStart(string) {
    for (let i=0; i<string.length; i++) {
        console.log(i, string[i])
        if (string[i] === '1') return string.slice(i)
    }
    return 0
}

function calculate(string) {
  let operations = ['+','-','*','/']
  let operator
  let operatorIdx
  for (let i = 0; i< string.length; i++) {
    if (operations.includes(string[i])) {
        operator = string[i]
        operatorIdx = i
    }
  }
  const first = string.slice(0, operatorIdx)
  const firstTenBase = intoTenBase(deleteZeroAtStart(first))
  const second = string.slice(operatorIdx+1)
  const secondTenBase = intoTenBase(deleteZeroAtStart(second))

  let resultInTenBase;
  if (operator === '+') resultInTenBase = firstTenBase + secondTenBase
  if (operator === '-') resultInTenBase = firstTenBase - secondTenBase
  if (operator === '*') resultInTenBase = firstTenBase * secondTenBase
  if (operator === '/') resultInTenBase = firstTenBase / secondTenBase
  let result = intoTwoBase(resultInTenBase)

  return result
}