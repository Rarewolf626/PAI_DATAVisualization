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
 * @desc Displays the data as a bar chart
 *       
 * @see {@link https://github.com/ULL-ESIT-PAI-2022-2023/2022-2023-pai-data-visualization}
 * @see {@link https://www.chartjs.org/docs/latest/charts/bar.html} 
 */
'use strict'

// This is the basic configuration for the Chart.js library to work
import { Chart, registerables } from '../../../node_modules/chart.js/dist/chart.esm.js';
Chart.register(...registerables);

import { CONFIG } from './config.js';

/**
 * @desc The main function of the program
 * It gets the canvas and creates the chart 
 */
function main() {
  const CONTEXT = document.getElementById('myChart').getContext('2d'); // Get The CanvasRenderingContext2D
  let myChart = new Chart(CONTEXT, CONFIG);                            // Creates the new Chart object 
  myChart.render();                                                    // Renders the Chart
}

main();
