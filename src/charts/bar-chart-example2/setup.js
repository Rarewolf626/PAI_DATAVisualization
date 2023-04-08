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
 * @desc Set the data configuration of the bar chart
 *       
 * @see {@link https://github.com/ULL-ESIT-PAI-2022-2023/2022-2023-pai-data-visualization}
 * @see {@link https://www.chartjs.org/docs/latest/charts/bar.html} 
 */

import { GDP_PER_COUNTRY } from '../../data/PIB-paises.js';

let years = new Set();
let chinaDataArray = [];
let usaDataArray = [];
let spainDataArray = [];
let japanDataArray = [];
let australiaDataArray = [];
for (let country of GDP_PER_COUNTRY) {
  years.add(country.date);
  switch (country.country.id) {
    case 'CN':
      chinaDataArray.push(country.value);
      break;
    case 'US':
      usaDataArray.push(country.value);
      break;
    case 'ES':
      spainDataArray.push(country.value);
      break;
    case 'JP':
      japanDataArray.push(country.value);
      break;
    case 'AU':
      australiaDataArray.push(country.value);
      break;
    default:
      break;
  }
}
let chinaDataSet = { label: 'China', data: chinaDataArray, backgroundColor: 'red', borderColor: 'red'};
let usaDataSet = { label: 'United Stated', data: usaDataArray, backgroundColor: 'blue', borderColor: 'blue'};
let spainDataSet = { label: 'Spain', data: spainDataArray, backgroundColor: 'green', borderColor: 'green'};
let japanDataSet = { label: 'Japan', data: japanDataArray, backgroundColor: 'yellow', borderColor: 'yellow'};
let australiaDataSet = { label: 'Australia', data: australiaDataArray, backgroundColor: 'silver', borderColor: 'silver'};

/**
 * @desc A ChartData object that contains all the information
 * that will be displayed in the Barchart, can have multiple options 
 * for different datasets
 */
export const DATA = {
  labels: Array.from(years),  // Names that are going to be shown in the Y axis.
  datasets: [                 // Array of DataSet objects
     spainDataSet,
     australiaDataSet,
     japanDataSet,   
     chinaDataSet,
     usaDataSet,
  ],
};