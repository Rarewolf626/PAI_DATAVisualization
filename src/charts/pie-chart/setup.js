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
 * @desc Configuration for the pie chart
 *       
 * @see {@link https://github.com/ULL-ESIT-PAI-2022-2023/2022-2023-pai-data-visualization}
 */

'use strict';

export const DATA = {
  labels: [ // Names that will be show above the pie chart
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{ // Array of objectos of type ChartData
    label: 'Pie Chart', // Name that will show in the legend
    data: [300, 50, 100], // The data only accept number[]
    backgroundColor: [ // Array of Colors of each segment in the are inside the Pie 
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    borderColor: 'black', // The Color of the border lines
    borderWitdh: 1, // The thickness of the boder lines
    hoverOffset: 4  // A Segment Animation 
  }]
};