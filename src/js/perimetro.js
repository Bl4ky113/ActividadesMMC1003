/*
 ====================================================================================================
 Hola Profe, o cualquiera que este viendo, les voy a documentar o explicar que va a hacer este código.

 Entonces les doy la bienvenida a el Script de el Perimetro de Batman, no he pensado en un mejor 
 nombre y no lo hare. Pero bueno, este Script va a ser para tomar los datos de las coordenadas de batman 
 y usarlas para obtener las distancias entre cada una. Estas se van a mostrar en una tabla que se va
 a hacer en el punto de medidas de la actividad.
 ====================================================================================================
*/

/* Primero vamos a definir las coordenadas de la tabla anteriormente usada en la actividad */

// Aca logramos obtener los filas de la tabla
let intTable = document.getElementById("XY_table");

// Ahora vamos a guardar las coordenadas X y Y en un array cada una

// Creamos los arrays en donde se van a guardar
var coordX = [];
var coordY = [];

// Agregamos los valores de cada Ordenada y Abcsisa
for (let i = 0; i < intTable.rows.length; i++) {
 coordX.push(parseFloat(intTable.rows[i].cells[0].innerHTML));
 coordY.push(parseFloat(intTable.rows[i].cells[1].innerHTML));
}

/* Listo !!! ya tenemos los valores de cada Coordenada, ahora vamos a usarlas */

// Vamos a calcular usando la ecuacion mencionada
function calcularDistancia (xi, yi, xf, yf) {
 let distancia = Math.sqrt((xi - xf)**2 + (yi - yf)**2);
 return distancia;
}

// Vamos a hacer otros Arrays, que va a contener el valor de cada distancia y las coordenadas de estas operaciones
var distancia = [];
var grupoCoordenadas = [];

for (let i = 0; i <= coordX.length && i <= coordY.length; i+=2) {
 // Calcular la distancia del ultimo vertice con el primer vertice
 if ((i + 1) == coordX.length && (i + 1) == coordY.length) {
  distancia.push(calcularDistancia(coordX[i], coordX[0], coordY[i], coordY[0]))
  grupoCoordenadas.push("(" + coordX[i] + " , " + coordY[i] + " ; " + coordX[0] + " , " + coordY[0]  + ")");
  break;
 }
 // Agregamos los datos a los Arrays
 distancia.push(calcularDistancia(coordX[i], coordX[i + 1], coordY[i], coordY[i + 1]));
 grupoCoordenadas.push("(" + coordX[i] + " , " + coordY[i] + " ; " + coordX[i + 1] + " , " + coordY[i + 1]  + ")");
}

/* Finalmente, creemos una Tabla que va a contener todos los valores del Perimetro */

let outTable = document.getElementById("lenght_table")

// Ponemos los datos en la tabla
function outputDatos (num, lenght, coordenadas) {
 // Creamos la fila
 let newRow = outTable.insertRow(-1);

 // Cambiar el color de las filas según su número
 modNum = num % 2;
 if (modNum == 1) {
  newRow.className = "table-content--row";
 }
 else {
  newRow.className = "table-content--row";
 }

 // Creo la Celda de los Datos
 let tableInfo = {
  cellCoordenada: newRow.insertCell(0),
  cellLength: newRow.insertCell(1)
 }
 
 // Lleno los datos de las celdas y les doy un Style
 tableInfo.cellCoordenada.className = "table-content__data";
 tableInfo.cellCoordenada.innerHTML = coordenadas;
 tableInfo.cellLength.className = "table-content__data";
 tableInfo.cellLength.innerHTML = lenght;
}

// Loop para crear Filas con la Info
for (let i = 0; i < distancia.length && i < grupoCoordenadas.length; i++) {
 outputDatos(i, distancia[i], grupoCoordenadas[i]);
}

/* Suma de las Distancias (Perímetro) */

let resultado = document.getElementById("resultado_perimetro");
let resultadoSuma = 0; 

for (let i = 0; i < distancia.length; i++) {
 resultadoSuma += distancia[i];
}

resultado.innerHTML = "El Perímetro de <strong>Batman</strong> es: " + resultadoSuma;