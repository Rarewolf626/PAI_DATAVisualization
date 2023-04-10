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
const TYPE = 'line'; 

/**
 * @desc  The general options of the line chart
 */
const OPTIONS = {
  responsive: true,  // Respond to size changes in the canvas
  maintainAspectRatio: false, // Deactivate the AspectRatio
  scales: {
    y: { 
      min: 10000000, // It sets the minium value to display in the Y Axis of the chart
      max: 90000000, // It sets the maximum value to display in the Y Axis of the chart 
      ticks: { // A tick is the value that is displayed in the axis 
        font: {
          size: 10 // Changes the font size to 10px
        }, 
        stepSize: 10000000 // Represents the jump from each tick in the Y Axis
      }
    },
    x: {
      ticks: { // A tick is the value that is displayed in the axis 
        font: {
          size: 10 // Changes the font size to 10px
        }
      }, 
      reverse: true // Displays the information from the last DataObject to the first one
    }
  },
  tension: 0.5, // Represents the curve of the line. Can be more than 1, but is discouraged
  // If uncommented the line chart will have a little animation that change the tension from 0.5 to 0.1
  /* animations: {
    tension: {
      duration: 500,
      easing: 'linear',
      from: 0.5,
      to: 0.1,
      loop: true,
    }
  },
  */
  plugins: {
    title: {                  // Activate the Title of the chart
      display: true,
      color: 'black',
      text: 'Overnight stays in Tenerife',
      font: {
        size: 30,
      }
    }
  }
}

/** 
 * @desc Configuration of the chart
 * It contains all the necessary information for the LineChart to work
 */
export const CONFIG = {
  type: TYPE,      // The type of the chart
  data: DATA,      // The data that is going to be displayed
  options: OPTIONS // All other options of the chart
};