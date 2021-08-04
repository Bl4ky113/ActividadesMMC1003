const get = {
  id: document.getElementById.bind(document),
  class: document.getElementsByClassName.bind(document),
  tag: document.getElementsByTagName.bind(document)
};

let output_table = get.id("plants_table");
let output_growth_rate = get.id("growthrate_output");

const MAX_DAYS = 42;
const MAX_GROWTH_PER_DAY = 5;
const UNITS = {
  SIZE: "cm",
  VELOCITY: "<sup>cm</sup>/<sub>día</sub>",
  ACELERATION: "<sup>cm</sup>/<sub>día<sup>2</sup></sub>"
};

var plant = {
  total_size: 0,
  sizes_arr: [],
  growth_rate: 0
};


// Set a random number for the Plant's Growth rate
window.onload = () => {
  plant.growth_rate = Math.floor(Math.random() * MAX_GROWTH_PER_DAY);
  output_growth_rate.innerHTML += `${plant.growth_rate}cm (aprox).`;
  
  calcSize(plant.total_size, plant.sizes_arr, plant.growth_rate, MAX_DAYS);
}

function calcSize (total_size, sizes_array, grow_rate, time_num = 10) {
  let random_growth = 0;
  let add_or_subtract = 0;
  for (let i = 0; i < time_num; i += 1) {
    random_growth = (Math.floor(Math.random() * 10) / 10);
    add_or_subtract = Math.floor(Math.random()) >= 1;
    if (add_or_subtract) {
      total_size += grow_rate + random_growth;
    } else {
      total_size += grow_rate - random_growth;
    }
    sizes_array.push(total_size);
  }
  plant.total_size = total_size;
}

