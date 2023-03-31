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
 */

'use strict';

export const DATA = {
  labels: [ // Names that will shown all aroun the chart
    'Eating',
    'Drinking',
    'Sleeping',
    'Studying',
    'Coding',
    'Cycling',
    'Running'
  ],
  datasets: [{ // Array of object of type ChartData
    label: 'During exam season', // Name that will be shown in the legend
    data: [45, 39, 5, 90, 90, 10, 10], // Only accepts Number[]
    fill: true, // If true, fill the are inside the lines
    backgroundColor: 'rgba(255, 99, 132, 0.2)', // The color of the are inside the lines
    borderColor: 'rgb(255, 99, 132)', // The Color of the border line 
    pointBackgroundColor: 'rgb(255, 99, 132)', // The color of the are inside the Point
    pointBorderColor: '#rgb(255, 99, 132)', // The color of the border lines of the Point 
    tension: 0.2, // The curve of the lines
    borderWidth: 1, // The thickness of the lines

  }, 
  {
    label: 'During vacations',  // Name that will be shown in the legend
    data: [70, 70, 90, 0, 10, 78, 60], // Only accepts Number[]
    fill: true, // If true, fill the are inside the lines
    backgroundColor: 'rgba(54, 162, 235, 0.2)', // The color of the are inside the lines
    borderColor: 'rgb(54, 162, 235)', // The Color of the border line 
    pointBackgroundColor: 'rgb(54, 162, 235)', // The color of the are inside the Point
    pointBorderColor: '#rgb(54, 162, 235)', // The color of the border lines of the Point 
    tension: 0.2, // The curve of the lines
    borderWidth: 1, // The thickness of the lines
  }]
};