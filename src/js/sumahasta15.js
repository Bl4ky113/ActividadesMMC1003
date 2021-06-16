// Made By Bl4ky113

let output_sh15 = id("output-sumahasta15");

const numSuma = 25;
let resNum = 0;
let numArr = [];

for (i = 0; i < numSuma; i += 1) {
  resNum += i + 1;
  numArr.push(resNum);  
}

output_sh15.innerHTML = numArr.join(", ")