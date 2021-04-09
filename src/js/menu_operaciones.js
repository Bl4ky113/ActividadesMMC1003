/* 
 -------------------------------------------------------------------------------------------
 Hola Profesor o cualquiera que vea esto! en este archivo, realizare y explicare el codigo 
 del 3er punto de la 3ra actividad de Programacion.
 -------------------------------------------------------------------------------------------
*/

/* Sumas, Restas, Multiplicaciones y Divisones */

// Sumas los numeros
function addInfo (num1, num2) { 
 let result = num1 + num2;
 return result;
}

// Restar los numeros 
function subInfo (num1, num2) {
 let result = [
  num1 - num2,
  num2 - num1
 ];
 return result;
}

// Multiplicar los numeros
function multInfo (num1, num2) { 
 let result = num1 * num2;
 return result;
}

// Dividir los numeros
function divInfo (num1, num2) {
 let result = [
  num1 / num2,
  num2 / num1
 ];
 return result;
}

/* Salida de los Datos */
function showData_mn (numbers, operator, result) {

 // Crear el Mensaje que se va a ver
 if (operator == "-" || operator == "/") { // Si es una resta o division
  var data = numbers[0] + " " + operator + " " + numbers[1] + " = " + result[0] + " | " + numbers[1] + " " + operator + " " + numbers[0] + " = " + result[1]
 } else { // Si es otra
  var data = numbers[0] + " " + operator + " " + numbers[1] + " = " + result;
 }

 const outputText = id("output_mn");
 outputText.style = "text-align: center; font-size: 24px;";
 outputText.innerHTML = data;
}

/* Entrada de los Datos */

const input1_mn = id("input-num1_mn");
const input2_mn = id("input-num2_mn");

var numOperator; // Operador Elegido

var num = []; // Array con los valores de los inputs

// Funcion que va a activar cada button
function changeOperator (op) {
 // Verificar que los Inputs no esten vacios
 let condition_1 = input1_mn.value != NaN && input2_mn.value != NaN;
 let condition_2 = input1_mn.value != "" && input2_mn.value != "";

 if (condition_1 && condition_2) {
  // Agregar los datos al Array
  num = [
   parseFloat(input1_mn.value),
   parseFloat(input2_mn.value)
  ];

  // Cambia o pone el Operador elegido
  switch (op) {
   case "sum": // Sumar los inputs
    numOperator = "+";
    showData_mn(num, numOperator, addInfo(num[0], num[1]));
    break;

    case "sub": // Restar los Inputs
    numOperator = "-";
    showData_mn(num, numOperator, subInfo(num[0], num[1]));
    break;

    case "mult": // Multiplicar los Inputs
    numOperator = "x";
    showData_mn(num, numOperator, multInfo(num[0], num[1]));
    break;

    case "div": // Dividir los Inputs
    numOperator = "/";
    showData_mn(num, numOperator, divInfo(num[0], num[1]));
    break;
  
   default:
    console.error("HOW");
    break; 
  }
 }

}

