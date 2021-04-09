/* 
 -------------------------------------------------------------------------------------------
 Hola Profesor o cualquiera que vea esto! en este archivo, realizare y explicare el codigo 
 del 2do punto de la 3ra actividad de Programacion.
 -------------------------------------------------------------------------------------------
*/

/* Mirar si la suma es mayor o menor a 20 */
function checkSum (num1, num2) {
 // Sumar los Numeros
 sum = num1 + num2;

 if (sum > 20) { //Verificar si es Mayor
  return true;
 } else { // Si no es Mayor, es Menor
  return false;
 }
}

/* Salida de Datos */

function showData_20 (data) {
 const outputPara = id("output_20");

 if (data === true) {
  outputPara.innerHTML = "La Suma de los Números es mayor a 20";
 } else {
  outputPara.innerHTML = "La Suma de los Números es menor O igual a 20";
 }
}

/* Entrada de Datos */

const input1_20 = id("input-num1_20");
const input2_20 = id("input-num2_20");

input1_20.addEventListener("change", updateInfo)
input2_20.addEventListener("change", updateInfo)

// Crear/Actualizar la info de los numeros

var num = []; // Array con los numeros a Operar

function updateInfo () {
 // Verificar que los Inputs no esten vacios
 let condition_1 = input1_20.value != NaN && input2_20.value != NaN;
 let condition_2 = input1_20.value != "" && input2_20.value != "";

 if (condition_1 && condition_2) {
  // Agregar los datos al Array
  num = [
   parseFloat(input1_20.value),
   parseFloat(input2_20.value)
  ];

  // Mostrar y Sumar los Resultados
  showData_20(checkSum(num[0], num[1]));
 } else {
  console.warn("Ingrese un Numero en los inputs");
 }
}