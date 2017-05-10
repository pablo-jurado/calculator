
let calcArr = []
let mainNumber = ''

// check if click number or operation
document.querySelector('.wrapper-btns').addEventListener('click', (e) => {
  let btnNum = e.target.value
  let btnOperation = e.target.id
  if (btnNum !== undefined) {
    if (btnNum) {
      mainNumber += btnNum
      updateBottomScreen(mainNumber)
    } else {
      updateOperation(mainNumber, btnOperation)
    }
  }
})

function updateOperation (num, operation) {
  if (operation === 'clear') {
    clearScreen()
    clearCalcArray()
    clearCalcNum()
  } else if (operation === 'equals') {
    calcArr.push(num)
    updateTopScreen(num)
    updateBottomScreen('loading...')
  } else {
    calcArr.push(num, operation)
    updateTopScreen(num, operation)
    clearCalcNum()
  }
  console.info(`${operation} clicked`, calcArr)
}

function updateTopScreen (num, operation = '') {
  screenTop.innerHTML += ` ${num} ${operation}`
  screenBottom.innerHTML = ''
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

const screenTop = document.querySelector('.screen .top')
const screenBottom = document.querySelector('.screen .bottom')
