// Made By Bl4ky113

let output_pares50 = id("output-pares50");

let parArr = [];
const numPares_min = 2;
const numPares_max = 50;

for (let i = numPares_min; i < numPares_max; i += 1) {
  if (i % 2 == 0) {
    parArr.push(i);
  } else {
    
  }
}

output_pares50.innerHTML = parArr.join(", ");