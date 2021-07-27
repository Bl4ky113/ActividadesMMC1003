// Made By Bl4ky113

let input_maxHR = document.getElementById("input_HRmax");
let output_maxHR = document.getElementById("output_HRmax");

input_maxHR.onchange = () => {
  if (!(input_maxHR.value <= 0)) {
    let lpm_max = 207 - (0.7 * input_maxHR.value);
    output_maxHR.innerHTML = `Lo máximo que puede resistir tu corazón en actividad física es:  ${lpm_max} Latidos por Minuto o LPM.`
  } else {
    output_maxHR.innerHTML = `Intenta ingresar un número valido.`
  }
}