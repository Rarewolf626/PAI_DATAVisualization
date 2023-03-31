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

export const DATA = {
  labels: [ // Names that are going to be shown in the Y axis.
    'January',
    'February',
    'March',
    'April'
  ],
  datasets: [{ // Array of Objects of type ChartData
    type: 'bar', // The type of the chart
    label: 'Bar Dataset', // Name that are going to be shown in the legend.
    data: [10, 20, 30, 40], // The value of the data 
    borderColor: 'rgb(255, 99, 132)', // An Array of Colors for each Bar in the Chart. This color represent the inside of each bar
    backgroundColor: 'rgba(255, 99, 132, 0.2)'  // An Array of Colors for each Bar in the Chart. This color represent the lines of each bar
  }, {
    type: 'line', // The type of the chart
    label: 'Line Dataset', // Name that are going to be shown in the legend.
    data: [50, 20, 40, 30], // The value of the data
    fill: false, // If true, fills the area under the line
    borderColor: 'rgb(54, 162, 235)' // line color
  }]
};