// Made By Bl4ky113

let input_aux = id("input-num_transporte");
let output_aux = id("output_transporte");

const MAX_APLICABLE = 1817052;
const AYUDA_TRANSPORTE = 106454;


input_aux.addEventListener("change", () => {
  let salario = parseInt(input_aux.value);

  if ( !(isNaN(salario)) && salario != "" && salario > 0) {
    if (salario < MAX_APLICABLE) {
      salario +=  AYUDA_TRANSPORTE;
      output_aux.innerHTML = `Sí Aplicas para el Auxilio de Transporte, tu salario es de: ${salario}`
    } else {
      output_aux.innerHTML = `No Aplicas para el Auxilio de Transporte, tu salario es de: ${salario}`
    }
  } else {
    output_aux.innerHTML = "Por favor ingresa un número valido o mayor a 0"
  }
})