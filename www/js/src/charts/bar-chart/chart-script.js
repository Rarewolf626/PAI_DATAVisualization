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
 * @desc Displays the data as a bar chart
 *
 * @see {@link https://github.com/ULL-ESIT-PAI-2022-2023/2022-2023-pai-data-visualization}
 */
import { CONFIG } from './config.js';
import { Chart, registerables } from 'chart.js';
Chart['register'](...registerables);
const CANVAS = document.getElementById("myChart");
const CONTEXT = CANVAS.getContext("2d");
let myChart = new Chart(CONTEXT, CONFIG);
