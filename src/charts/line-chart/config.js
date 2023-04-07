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
 * @see {@link https://www.chartjs.org/docs/latest/charts/line.html}
 */

'use strict';

import { DATA } from './setup.js';

/** 
 * @desc Type of the chart to represent
 * Contains the type of the Chart, in this case is a Line Chart
 */
const TYPE = 'line'; // 

/**
 * @desc  The general options of the bar chart, 
 * includes chart specific options like resposive or the aspecRatio but can have
 * Data options, this options are set to all Data objects in the Chart
 */
const OPTIONS = {
  scales: {
    y: { 
      min: 10000000, // It set the minium value to display in the Y Axis of the chart
      max: 90000000, // It set the maximum value to display in the Y Axis of the chart 
      ticks: { // A tick is the value that is displayed in the axis 
        font: {
          size: 10 // Change the font size to 10px
        }, 
        stepSize: 10000000 // Represent the jump from each tick in the Y Axis
      }
    },
    x: {
      ticks: { // A tick is the value that is displayed in the axis 
        font: {
          size: 10 // Change the font size to 10px
        }
      }, 
      reverse: true // Display the information from the last DataObject to the first one
    }
  },
  tension: 0.5 // Represent the curve of the line can be more than 1, but is discouraged
}

/** @desc Configuration of the chart */
export const CONFIG = {
  type: TYPE, // The type of the chart
  data: DATA, // The data that is going to be displayed
  options: OPTIONS // All other options of the chart, It can set data options in all DataSets
};