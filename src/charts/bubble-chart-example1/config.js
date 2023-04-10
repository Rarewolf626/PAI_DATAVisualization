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
 * @desc Configuration for the bubble chart
 *       
 * @see {@link https://github.com/ULL-ESIT-PAI-2022-2023/2022-2023-pai-data-visualization}
 */

'use strict';

import { DATA } from './setup.js';

/** 
 * @desc Type of the chart to represent
 * Contains the type of the Chart, in this case is a bubble Chart
 */
const TYPE = 'bubble'; 

/**
 * @desc  The general options of the bar chart
 */
const OPTIONS = {
  responsive: true,           // Respond to size changes in the canvas
  maintainAspectRatio: false, // Deactivates the AspectRatio
  plugins: {
    title: {                  // Activate the Title of the chart
      display: true,
      color: 'black',
      text: 'Kmeans algorithm visualizer',
      font: {
        size: 30,
      }
    }
  }
}

/** 
 * @desc Configuration of the chart 
 * It contains all the necessary information for the BarChart to work
 */
export const CONFIG = {
  type: TYPE,      // The type of the chart
  data: DATA,      // The data that is going to be displayed
  options: OPTIONS // All other options of the chart, It can set data options in all DataSets
};