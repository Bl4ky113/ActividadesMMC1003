// Made By Bl4ky113

var tries = 0;

let output_checkzero = id("output-checkzero");
const input_checkzero = id("input-checkzero");
input_checkzero.onchange = (info) => {
  
  let num = parseInt(info.target.value);

  if (num === 0) {
    output_checkzero.innerHTML = `Felicidades has Ganado (?, solo te ha tomado ${tries} intentos`;
  } else {
    tries ++;
    if (tries >= 15) {
      output_checkzero.innerHTML = `Venga que solo es poner un 0, ya lleva ${tries} intentos`;
    } else {
      output_checkzero.innerHTML = `Intenta otra vez, has hecho ${tries} intentos`;
    }
  }
}