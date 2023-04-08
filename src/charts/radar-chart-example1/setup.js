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
 * @desc Configuration for the radar chart
 *       
 * @see {@link https://github.com/ULL-ESIT-PAI-2022-2023/2022-2023-pai-data-visualization}
 * @see {@link https://www.chartjs.org/docs/latest/charts/radar.html}
 */
'use strict';

const TRANSPARENT_PINK = 'rgba(255, 99, 132, 0.2)';
const PINK = 'rgba(255, 99, 132, 1)'
const TRANSPARENT_DARK_GREEN = 'rgba(21, 187, 27, 0.2)';
const DARK_GREEN = 'rgba(21, 187, 27, 1)';

export const DATA = {
  labels: [                                  // Names that will shown all around the chart
    'Health Points',
    'Attack',
    'Defense',
    'Velocity',
    'Special defense',
    'Special attack',
  ],
  datasets: [{                               // Array of object of type ChartData
    label: 'A defensive player',             // Name that will be shown in the legend
    data: [100, 15, 75, 10, 65, 5],          // Only accepts Number[]
    fill: true,                              // If true, fill the area inside the lines
    backgroundColor: TRANSPARENT_PINK,       // The color of the area inside the lines
    borderColor: PINK,                       // The color of the border line 
    pointBackgroundColor: 'black',           // The color of the are inside the Point
    pointBorderColor: 'black',               // The color of the border lines of the Point 
    tension: 0,                              // The curve of the lines can be more than 1, but is discourage
    borderWidth: 3,                          // The thickness of the lines
    pointStyle: 'triangle',                  // The style of the points inside the chart
  }, 
  {
    label: 'A standar player',               // Name that will be shown in the legend
    data: [50, 30, 20, 50, 10, 10],          // Only accepts Number[]
    fill: true,                              // If true, fill the area inside the lines
    backgroundColor: TRANSPARENT_DARK_GREEN, // The color of the area inside the lines
    borderColor: DARK_GREEN,                 // The color of the border line 
    pointBackgroundColor: 'black',           // The color of the are inside the Point
    pointBorderColor: 'black',               // The color of the border lines of the Point 
    tension: 0,                              // The curve of the lines can be more than 1, but is discourage
    borderWidth: 3,                          // The thickness of the lines
    pointStyle: 'rect'                       // The style of the points inside the chart
  }]
};