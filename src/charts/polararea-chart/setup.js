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
  labels: [ // Names that will be show above the PolarArea chart
    'Red',
    'Green',
    'Yellow',
    'Grey',
    'Blue'
  ],
  datasets: [{ // Array of object of type CharData
    label: 'My First Dataset', // name that will be show in the legend
    data: [11, 16, 7, 3, 14], // Only accepts Number[]
    backgroundColor: [ // The color of each segment in the chart
      'rgb(255, 99, 132)',
      'rgb(75, 192, 192)',
      'rgb(255, 205, 86)',
      'rgb(201, 203, 207)',
      'rgb(54, 162, 235)'
    ],
    borderColor: 'black', // The Color of the border lines
    borderWitdh: 1, // The thickness of the boder lines
    hoverOffset: 4  // A Segment Animation 
  }]
};