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

import {PERNOCTATIONS} from '../../data/pernoctaciones.js';
const PERNOCTATIONS_DATA = PERNOCTATIONS.slice();

// Getting the labels and the data for every year
let dataMap = new Map();
let years = new Set();
for (let pernoctation of PERNOCTATIONS_DATA) {
  years.add(pernoctation.año);
  dataMap.set(pernoctation.año, ((dataMap.get(pernoctation.año) ?? 0) + Number(pernoctation.total)));
}
years = Array.from(years);                                  // Transform the Set to an Array
let chartDataArray = [];                                    // Create a new Array that will contain the data that will be displayed
for (let data of dataMap) { chartDataArray.push(data[1]); } // Push the data from the map into an Array

const LIGHT_BLUE = 'rgb(75, 192, 192)';
const GREEN = 'rgb(75, 192, 0)';

/**
 * @desc A ChartData object that contains all the information
 * that will be displayed in the Linechart, can have multiple options 
 * for different datasets
 */
export const DATA = {
  labels: years,                                                              // Names that will be shown in the legend
  datasets: [{                                                                // Array of objects of type ChartData
    label: 'Total pernoctations in hotels in Tenerife throughout the years',  // Names that will be shown in the legend
    data: chartDataArray,                                                     // object|object[]|number[]|string[]
    fill: false,                                                              // If true, fills the area under the line
    borderColor: LIGHT_BLUE,                                                  // Line color
    backgroundColor: LIGHT_BLUE ,                                             // Color of the line border of the point
    pointBorderColor: 'red',                                                  // Color of the area under the line
    pointBackgroundColor: 'red',                                              // Color of the point
    borderWidth: 1                                                            // Changes the size of the line 
  }],
};