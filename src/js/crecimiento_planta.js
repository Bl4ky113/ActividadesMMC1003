const get = {
  id: document.getElementById.bind(document),
  class: document.getElementsByClassName.bind(document),
  tag: document.getElementsByTagName.bind(document)
};

let output_table = get.id("plants_table");
let output_growth_rate = get.id("growthrate_output");

const MAX_DAYS = 42;
const MAX_GROWTH_PER_DAY = 5;
const DAYS_COUNTING = 3;
const UNITS = {
  SIZE: "cm",
  VELOCITY: "<sup>cm</sup>/<sub>día</sub>",
  ACELERATION: "<sup>cm</sup>/<sub>día<sup>2</sup></sub>"
};

var plant = {
  total_size: 0,
  growth_rate: 0,
  sizes_arr: [],
  growth_arr: [],
  velocity_growth: [],
  aceleration_growth: []
};


// Set a random number for the Plant's Growth rate
window.onload = () => {
  plant.growth_rate = Math.floor(Math.random() * MAX_GROWTH_PER_DAY);
  while (plant.growth_rate === 0) { plant.growth_rate = Math.floor(Math.random() * MAX_GROWTH_PER_DAY); }
  output_growth_rate.innerHTML += `${plant.growth_rate}${UNITS.SIZE} (aprox).`;
  
  calcSize(plant, plant.total_size, plant.sizes_arr, plant.growth_arr, plant.growth_rate, MAX_DAYS);
  calcVelocity(plant, plant.sizes_arr, DAYS_COUNTING, MAX_DAYS);
  calcAceleration(plant, plant.velocity_growth, DAYS_COUNTING);

  sendData(plant, DAYS_COUNTING);
  console.log(output_table)
}

function calcSize (obj, total_size, sizes_array, growth_arr, grow_rate, days_num = 10) {
  let random_growth = 0;
  let add_or_subtract = 0;
  let total_growth = 0;
  for (let i = 0; i < days_num; i += 1) {
    random_growth = (Math.floor(Math.random() * 10) / 10);
    add_or_subtract = Math.floor(Math.random() * 2) < 1;
    if (add_or_subtract) {
      total_growth = grow_rate + random_growth;
    } else {
      total_growth = grow_rate - random_growth;
    }
    total_size += total_growth;
    growth_arr.push(total_growth);
    sizes_array.push(total_size);
  }
  obj.total_size = total_size;
}

function calcVelocity (obj, sizes_arr, days_counting = 1, days_num = 10) {
  let velocity_growth = 0;
  for (let i = days_counting - 1; i < days_num; i += days_counting) {
    if ((i - days_counting) < 0) {
      velocity_growth = sizes_arr[i] / days_counting;
    } else {
      velocity_growth = (sizes_arr[i] - sizes_arr[i - days_counting]) / days_counting;
    }
    obj.velocity_growth.push(velocity_growth);
  }
}

function calcAceleration (obj, velocity_arr, days_counting = 1) {
  let aceleration_growth = 0;
  for (let i = 0; i < velocity_arr.length; i += 1) {
    aceleration_growth = velocity_arr[i] / days_counting;
    obj.aceleration_growth.push(aceleration_growth);
  }
}

function sendData (obj, days_counting) {
  let skip_row = false;
  for (let i = 0; i < output_table.rows.length; i += 1) {
    if (output_table.rows[i].cells[0].innerHTML == 0) { skip_row = true; }
    else { skip_row = false; }
    
    let sizes_arr_output = [];
    for (let o = days_counting - 1; o < obj.sizes_arr.length; o += days_counting) {
      sizes_arr_output.push(obj.sizes_arr[o]);
    }

    if (!skip_row) {
      output_table.rows[i].cells[1].innerHTML = `${sizes_arr_output[i - 1]}${UNITS.SIZE}`;
      output_table.rows[i].cells[2].innerHTML = `${obj.velocity_growth[i - 1]}${UNITS.VELOCITY}`;
      output_table.rows[i].cells[3].innerHTML = `${obj.aceleration_growth[i - 1]}${UNITS.ACELERATION}`;
    }
  }
}