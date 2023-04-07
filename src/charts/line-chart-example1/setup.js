/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Eva Peso Adán <peso.adan.05@ull.edu.es>
 * @author Raimon José Mejías Hernández  <raimon.mejias.35@ull.edu.es>
 * @since Apr 7 2023
 * 
 * @desc Set the data configuration of the line chart, reading the pernoctaciones.json file
 * and working with the information to filter the data sought
 *       
 * @see {@link https://github.com/ULL-ESIT-PAI-2022-2023/2022-2023-pai-data-visualization}
 * @see {@link https://www.chartjs.org/docs/latest/charts/bar.html} 
 */
'use strict';

// @desc Importing pecnoctations dataset
import {PERNOCTATIONS} from '../../data/pernoctaciones.js';
const PERNOCTATIONS_DATA = PERNOCTATIONS.slice();

// Getting the labels and the data for every year
let dataMap = new Map();
let years = new Set();
for (let pernoctation of PERNOCTATIONS_DATA) {
  years.add(pernoctation.año);
  dataMap.set(pernoctation.año, ((dataMap.get(pernoctation.año) ?? 0) + Number(pernoctation.total)));
}
years = Array.from(years); // Transform the Set to an Array
let chartDataArray = []; // Create a new Array that will contain the data that will be displayed
for (let data of dataMap) { chartDataArray.push(data); } // Push the data from the map into an Array

const LIGHT_BLUE = 'rgb(75, 192, 192)';

/** @desc Data for the configuration of the chart */
export const DATA = {
  labels: years, // names that will show in the legend
  datasets: [{ // Array of objects of type ChartData
    label: 'Total percnoctations in hotels in Tenerife throughout the years', // names that will show in the legend
    data: chartDataArray, // object|object[]|number[]|string[]
    fill: false, // If true, fills the area under the line
    borderColor: LIGHT_BLUE,  // line color
    backgroundColor: LIGHT_BLUE , // Color of the are under the line
    pointBorderColor: 'red',
    pointBackgroundColor: 'red',
    borderWidth: 1 // Changes the size of the line 
  }],
};