// Made By Bl4ky113

const MAX_ANGLE = 360;
const INCREMENT_ANGLE = 15;

let table_output = document.getElementById("radian_functions_table");

var angles_data = {};

const toRad = (ang) => {
  let radAng = (ang * Math.PI) / 180;
  return radAng;
};

window.onload = () => {
  for (let angle = 0; angle <= MAX_ANGLE; angle += INCREMENT_ANGLE) {
    let rad_angle = toRad(angle);

    angles_data[`${angle}`] = {
      "rad" : `${rad_angle.toFixed(2)}`,
      "sin" : `${Math.sin(rad_angle).toFixed(2)}`,
      "cos" : `${Math.cos(rad_angle).toFixed(2)}`,
      "tan" : `${Math.tan(rad_angle).toFixed(2)}`,
      "csc" : `${(1 / Math.sin(rad_angle)).toFixed(2)}`,
      "sec" : `${(1 / Math.cos(rad_angle)).toFixed(2)}`,
      "cot" : `${(1 / Math.tan(rad_angle)).toFixed(2)}`
    };

    if (angle % 90 === 0) {
      if ((angle / 90) % 2 === 0) {
        angles_data[`${angle}`].csc = Infinity;
        angles_data[`${angle}`].cot = Infinity;
      } else {
        angles_data[`${angle}`].tan = Infinity;
        angles_data[`${angle}`].sec = Infinity;
      }
    }
  }

  Object.entries(angles_data).forEach(([ang, obj]) => {
    let HTML_obj = `
      <tr>
        <td class="tcontent__data">${ang}°</td>
    `;

    Object.values(obj).forEach((val) => {
      HTML_obj += `
        <td class="tcontent__data">${val} rad</td>
      `;
    });

    HTML_obj += `</tr>`;

    table_output.innerHTML += HTML_obj;
  });
};
