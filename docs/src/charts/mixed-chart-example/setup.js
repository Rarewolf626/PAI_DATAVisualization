/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Eva Peso Adán <peso.adan.05@ull.edu.es>
 * @author Raimon José Mejías Hernández  <raimon.mejias.35@ull.edu.es>
 * @since Mar 30 2023
 * 
 * @desc Configuration for the mixed chart
 *       
 * @see {@link https://github.com/ULL-ESIT-PAI-2022-2023/2022-2023-pai-data-visualization}
 */

'use strict';

const TRANSPARENT_RED = 'rgba(255, 99, 132, 0.2)';

let dataArray = [];
let dataMonths = []
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
for (let i = 0; i < 50; i++) {
  dataArray.push(Math.random() * (20000 - 10000) + 10000);
  dataMonths.push(MONTHS[i % MONTHS.length]);
}

export const DATA = {
  labels: dataMonths,
  datasets: [{                                 // Array of Objects of type ChartData
    type: 'bar',                               // The type of the chart
    label: 'Bar Dataset',                      // Name that are going to be shown in the legend.
    data: dataArray,                           // The value of the data 
    borderColor: 'red',                        // An Array of Colors for each Bar in the Chart. This color represent the inside of each bar
    backgroundColor: TRANSPARENT_RED           // An Array of Colors for each Bar in the Chart. This color represent the lines of each bar
  }, {
    type: 'line',                              // The type of the chart
    label: 'Line Dataset',                     // Name that are going to be shown in the legend.
    data: dataArray,                           // The value of the data
    fill: false,                               // If true, fills the area under the line
    tension: 0.1,                              // Represent the curve of the line can be more than 1, but is discouraged
    borderColor: 'blue'                        // line color
  }]
};