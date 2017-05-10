// global variables
let calcArr = []
let mainNumber = ''

function updateArrToScreen () {
  let str = calcArr.join(' ')
  screenTop.innerHTML = str
}

function updateBottomScreen (input) {
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

function updateOperation (num, operation) {
  if (operation === 'clear') {
    clearScreen()
    clearCalcArray()
    clearCalcNum()
  } else if (operation === 'equals') {
    calcArr.push(parseFloat(num, 10))
    updateArrToScreen()
    let result = getResult(calcArr)
    updateBottomScreen(result)
    clearCalcArray()
    mainNumber = '0.9'
  } else {
    calcArr.push(parseFloat(num, 10), operation)
    updateArrToScreen()
    clearCalcNum()
  }
  // console.info(`${operation} clicked`)
}

// check if click number or operation
document.querySelector('.wrapper-btns').addEventListener('click', (e) => {
  let btnNum = e.target.value
  let btnOperation = e.target.id
  if (btnNum !== undefined && btnNum) {
    mainNumber += btnNum
    updateBottomScreen(mainNumber)
  } else {
    updateOperation(mainNumber, btnOperation)
  }
})

const screenTop = document.querySelector('.screen .top')
const screenBottom = document.querySelector('.screen .bottom')

// TODO: this should be a reduce function that returns the result
function getResult (arr) {
  console.log(arr)
  return 'result'
}
