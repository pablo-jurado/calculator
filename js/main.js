const calculator = {
  num: '',
  numbers: [],
  operation: '',
  saveNum () {
    this.numbers.push(parseFloat(this.num, 10))
    console.log(this.num)
    this.num = ''
  },
  clear () {
    this.num = ''
    this.operation = ''
    this.numbers = []
    updateScreen(0)
  }
}

document.querySelector('.wrapper-btns').addEventListener('click', (e) => {
  let btnNum = e.target.value
  let btnOperation = e.target.id
  if (!btnOperation) {
    calculator.num += btnNum
    updateScreen(calculator.num)
  } else {
    calculator.saveNum()
    checkOperation(btnOperation)
  }
})

function checkOperation (operation) {
  if (operation === 'clear') {
    calculator.clear()
  } else if (operation === 'equals') {
    let result = equals()
    calculator.clear()
    updateScreen(result)
    calculator.num = result
  } else {
    calculator.operation = operation
    updateScreen(calculator.operation)
  }
}

function equals () {
  var result = 0
  if (calculator.operation === '+') result = calculator.numbers[0] + calculator.numbers[1]
  if (calculator.operation === '-') result = calculator.numbers[0] - calculator.numbers[1]
  if (calculator.operation === 'x') result = calculator.numbers[0] * calculator.numbers[1]
  if (calculator.operation === '/') result = calculator.numbers[0] / calculator.numbers[1]
  return result
}

function updateScreen (num) {
  screen.innerHTML = num
}

const screen = document.querySelector('.screen')
updateScreen(0)
