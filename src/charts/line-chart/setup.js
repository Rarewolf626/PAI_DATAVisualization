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

/** @desc Data for the configuration of the chart */
export const DATA = {
  labels: years, // names that will show in the legend
  datasets: [{ // Array of objects of type ChartData
    label: 'Total percnoctations in hotels in Tenerife throughout the years', // names that will show in the legend
    data: data, // object|object[]|number[]|string[]
    fill: false, // If true, fills the area under the line
    borderColor: 'rgb(75, 192, 192)',  // line color
    backgroundColor: 'rgb(75, 192, 192)' , // Color of the are under the line
    borderWidth: 1 // Changes the size of the line 
  }],
};