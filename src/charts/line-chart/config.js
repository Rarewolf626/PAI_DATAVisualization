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
 * @desc Configuration for the line chart
 *       
 * @see {@link https://github.com/ULL-ESIT-PAI-2022-2023/2022-2023-pai-data-visualization}
 */

'use strict';

import { DATA } from './setup.js';

/** @desc Type of the chart to represent */
const TYPE = 'line';

/** @desc Configuration of the chart */
export let CONFIG = {
  type: TYPE,
  data: DATA,
  options: {
    scales: {
      y: {min: 20000000, max: 90000000, ticks: {font: {size: 10}, stepSize: 10000000}},
      x: {ticks: {font: {size:10}}, reverse: true}
    },
    tension: 0.1
  }
};