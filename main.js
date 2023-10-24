import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { Imc, notNumber } from "./utils.js";
const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

form.onsubmit = (event) => {
  event.preventDefault();
  const weight = Number(inputWeight.value);
  const height = Number(inputHeight.value);
  const showAlerError = notNumber(weight) || notNumber(height);

  if (showAlerError) {
    AlertError.open();
    return;
  }

  AlertError.close();
  const result = Imc(weight, height);
  Modal.open();
  Modal.message.innerText = `O seu IMC é de ${result}`;
};

inputWeight.oninput = () => AlertError.close();
inputHeight.oninput = () => AlertError.close();
