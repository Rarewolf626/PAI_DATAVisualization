'use strict';

/** @desc Importing pecnoctations dataset */
import { PERNOCTATIONS } from '../../data/pernoctaciones.js';
const PERNOCTATIONS_DATA = PERNOCTATIONS.slice();

/**@desc Getting the labels and the data for every year */
let data_map = new Map();
let years = new Set();
for (let pernoctation of PERNOCTATIONS_DATA) {
  years.add(pernoctation.año);
  data_map.set(pernoctation.año, ((data_map.get(pernoctation.año) ?? 0) + Number(pernoctation.total)));
}

years = Array.from(years)

let data = []
data_map.forEach((_value, key) => {
  data.push(data_map.get(key))
})
export const DATA = {
  datasets: [{
    label: 'First Dataset', // name that will show in the legend
    data: [{ // An array of objects  { x: number, y: number, r:number}
      x: 20, // X position in the chart
      y: 30, // Y position in the chart
      r: 25  // The radius of the circle in the chart
    }, {
      x: 40,
      y: 10,
      r: 10
    }],
    backgroundColor: 'rgb(255, 99, 132)', // The color inside the circle
    borderColor: 'rgb(255, 99, 132)', // The color of the circle border
    pointSyle: 'circle' // The style of the dots in the chart
    // It can be change to cross, line, rect, triangle, star, etc.
  }]
};