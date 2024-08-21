import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { calculateIMC, notNumber } from "./utils.js"

const form = document.querySelector('form')
const inputWeight = document.getElementById("weight")
const inputHeight = document.getElementById("height")

form.onsubmit = handleSubmit

function handleSubmit(e) {
  e.preventDefault()

  const weight = Number(inputWeight.value)
  const height = Number(inputHeight.value)
  const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)

  if(weightOrHeightIsNotANumber == true) {
    AlertError.open()
    return;
  }

  AlertError.close()

  const result = calculateIMC(weight, height)

  displayResultMessage(result)
}

function displayResultMessage(result) {
  const message = `O seu IMC é ${result}`

  Modal.message.innerText = message
  Modal.open()
}

inputHeight.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close()