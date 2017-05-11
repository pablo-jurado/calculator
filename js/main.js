// global variables
let calcArr = []
let mainNumber = ''

function updateArrToScreen () {
  screenTop.innerHTML = calcArr.join(' ')
}

function updateBottomScreen (input = 0) {
  screenBottom.innerHTML = input
}

function clearScreen () {
  screenTop.innerHTML = ''
  screenBottom.innerHTML = '0'
}

function clearCalcArray () {
  calcArr = []
}

function clearCalcNum () {
  mainNumber = ''
}

function toggleOperationBtn (arr, bool) {
  arr.forEach((btn) => {
    btn.disabled = bool
  })
}

let oppsButton = document.querySelectorAll('.operation')

function updateOperation (num, operation) {
  if (operation === 'clear') {
    clearScreen()
    clearCalcArray()
    clearCalcNum()
  } else if (operation === 'equals') {
    if (calcArr.length !== 0) {
      calcArr.push(parseFloat(num, 10))
      updateArrToScreen()
      console.log(calcArr)
      let result = getResult(calcArr)
      updateBottomScreen(result)
      clearCalcArray()
      mainNumber = result
    }
  } else {
    toggleOperationBtn(oppsButton, true)
    calcArr.push(parseFloat(num, 10), operation)
    updateArrToScreen()
    clearCalcNum()
  }
}

// check if click number or operation
document.querySelector('.wrapper-btns').addEventListener('click', (e) => {
  let btnNum = e.target.value
  let btnOperation = e.target.id
  if (btnNum !== undefined) {
    if (btnNum) {
      toggleOperationBtn(oppsButton, false)
      mainNumber += btnNum
      updateBottomScreen(mainNumber)
    } else {
      updateOperation(mainNumber, btnOperation)
    }
  }
})

const screenTop = document.querySelector('.screen .top')
const screenBottom = document.querySelector('.screen .bottom')

// checks for operations reduce the calc array and returns the result
function getResult (arr) {
  let result = arr.reduce((acc, currentValue, index, arr) => {
    if (typeof currentValue === 'string') {
      if (currentValue === '+') acc += arr[index + 1]
      if (currentValue === '-') acc -= arr[index + 1]
      if (currentValue === 'x') acc *= arr[index + 1]
      if (currentValue === '/') acc /= arr[index + 1]
    }
    return acc
  }, arr[0])
  return result
}

updateBottomScreen()
toggleOperationBtn(oppsButton, true)
