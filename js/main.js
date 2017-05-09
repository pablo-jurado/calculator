const calculator = {
  num: '',
  numbers: [],
  operation: '',
  add () { return this.numbers[0] + this.numbers[1] },
  min () { return this.numbers[0] - this.numbers[1] },
  mul () { return this.numbers[0] * this.numbers[1] },
  div () { return this.numbers[0] / this.numbers[1] },
  saveNum () {
    this.numbers.push(parseFloat(this.num, 10))
    this.num = ''
  },
  clear () {
    this.num = ''
    this.operation = ''
    this.numbers = []
  }
}

// check if click number or operation
document.querySelector('.wrapper-btns').addEventListener('click', (e) => {
  let btnNum = e.target.value
  let btnOperation = e.target.id
  if (btnNum !== undefined) {
    if (btnNum) {
      calculator.num += btnNum
      screenBottom.innerHTML = calculator.num
    } else {
      calculator.saveNum()
      checkOperation(btnOperation)
    }
  }
})

function checkOperation (operation) {
  if (operation === 'clear') {
    calculator.clear()
    clearScreen()
  } else if (operation === 'equals') {
    updateTopScreen()
    let result = getResult()
    if (calculator.numbers[1]) screenTop.innerHTML += calculator.numbers[1]
    calculator.clear()
    updateResult(result)
    calculator.num = result
  } else {
    updateTopScreen()
    calculator.operation = operation
    screenTop.innerHTML += calculator.operation
  }
}

function getResult () {
  var result = 0
  if (calculator.numbers.length === 2) {
    if (calculator.operation === '+') result = calculator.add()
    if (calculator.operation === '-') result = calculator.min()
    if (calculator.operation === 'x') result = calculator.mul()
    if (calculator.operation === '/') result = calculator.div()
  }
  return result
}

function updateTopScreen () {
  screenTop.innerHTML = calculator.numbers[0] + calculator.operation
  screenBottom.innerHTML = ''
}

function updateResult (input) {
  screenBottom.innerHTML = input
}

function clearScreen () {
  screenTop.innerHTML = ''
  screenBottom.innerHTML = '0'
}

const screenTop = document.querySelector('.screen .top')
const screenBottom = document.querySelector('.screen .bottom')
