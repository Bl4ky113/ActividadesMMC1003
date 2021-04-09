/* 
 -------------------------------------------------------------------------------------------
 Hola Profesor o cualquiera que vea esto! en este archivo, realizare y explicare el codigo 
 del 1er punto de la 3ra actividad de Programacion.
 -------------------------------------------------------------------------------------------
*/

/* Shortcuts del DOM */
const id = document.getElementById.bind(document);

/* Modificación de los datos de entrada */

var result = {}; // Objeto donde se guardaran los resultados

// Sumar los Datos
function addData (num1, num2) {
 return num1 + num2;
}

// Restar los Datos
function subtractData (num1, num2) {
 return num1 - num2;
}

// Multiplicar los Datos
function multiplyData (num1, num2) {
 return num1 * num2;
}

// Dividir los Datos
function divideData (num1, num2) {
 return num1 / num2;
}

/* Enviar la informacion a la salida */

const outputTable = id("output-table_op");

function showData_op (finalResults, resultsNumber) {
 //Borrar Informacion anterior en la tabla
 while (outputTable.rows.length > 0) {
  outputTable.deleteRow(-1);
 }

 for (let i = 0; i < resultsNumber; i++) {
  // Crear toda la Informacion de la Tabla
  const tableRow = outputTable.insertRow(-1); //Crear la fila en la Tabla

  let modNum = i % 2;
  if (modNum == 1) {
   tableRow.className = "table-content--row2";
  }
  else {
   tableRow.className = "table-content--row1";
  }

  // Crear las celdas con los datos
  let tableInfo = {
   title: tableRow.insertCell(0),
   data: tableRow.insertCell(1)
  };
  
  switch (i) {
   case 0: // Agregar los Resultados de la Suma a la Tabla
    tableInfo.title.className = "table-content__header";
    tableInfo.title.innerHTML = "Suma";

    tableInfo.data.className = "table-content__data";
    tableInfo.data.innerHTML = finalResults.add;
    break;

   case 1: // Agregar los Resultados de la Resta a la Tabla
    tableInfo.title.className = "table-content__header";
    tableInfo.title.innerHTML = "Resta";

    tableInfo.data.className = "table-content__data";
    tableInfo.data.innerHTML = finalResults.subtraction[0] + " | " + finalResults.subtraction[1];
    break;

   case 2: // Agregar los Resultados de la Multiplicacion a la Tabla
    tableInfo.title.className = "table-content__header";
    tableInfo.title.innerHTML = "Multiplicación";

    tableInfo.data.className = "table-content__data";
    tableInfo.data.innerHTML = finalResults.multiplication;
    break;

   case 3: // Agregar los Resultados de la Division a la Tabla
    tableInfo.title.className = "table-content__header";
    tableInfo.title.innerHTML = "División";

    tableInfo.data.className = "table-content__data";
    tableInfo.data.innerHTML = finalResults.division[0] + " | " + finalResults.division[1];
    break;

   default:
    console.error("WHAT");
    break;
  }
 }
}

/* Recibir la entrada de la informacion */

const input1_op = id("input-num1_op");
const input2_op = id("input-num2_op");

input1_op.addEventListener("change", updateInfo);
input2_op.addEventListener("change", updateInfo);

// Crear/Actualizar la info de los numeros

var num = []; // Array con los numeros a Operar

function updateInfo () {
 // Verificar que los Inputs no esten vacios
 let condition_1 = input1_op.value != NaN && input2_op.value != NaN;
 let condition_2 = input1_op.value != "" && input2_op.value != "";

 if (condition_1 && condition_2) {
  // Agregar los datos al Array
  num = [
   parseFloat(input1_op.value),
   parseFloat(input2_op.value)
  ];

  // Sumar, Restar, Multiplicar y Dividir los Numeros
  result = {
   add: [
    addData(num[0], num[1])
   ],
   subtraction: [
    subtractData(num[0], num[1]), // Al derecho
    subtractData(num[1], num[0]) // Al revez
   ],
   multiplication: [
    multiplyData(num[0], num[1])
   ],
   division: [
    divideData(num[0], num[1]), // Al derecho
    divideData(num[1], num[0]) // Alrevez
   ]
  };
  // Salida de los Datos
  showData_op(result, Object.keys(result).length);
 } else {
  console.warn("Ingrese un Numero en los inputs");
 }
}