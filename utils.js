export function notNumber(value) {
  return isNaN(value);
}

export function Imc(weight, height) {
  let imc = weight / (height / 100) ** 2;
  return imc.toFixed(2);
}
