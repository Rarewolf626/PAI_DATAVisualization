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

import { DATA } from './setup.js';

/** 
 * @desc Type of the chart to represent
 * Contains the type of the Chart, in this case is a radar Chart
 */
const TYPE = 'radar'; 

/**
 * @desc  The general options of the radar chart.
 */
const OPTIONS = {
  responsive: true,             // Respond to size changes in the canvas
  maintainAspectRatio: false,   // Deactivate the AspectRatio
  scales: {
    r: {                        // Change the configuration of the Radial Axis 
      min: 1,                   // Set the minimum value of the chart to 1
      max: 100,                 // Set the maximum value of the chart to 160
      grid: {                   // Configuration of the grid lines 
        color: 'black',         // Set the color of the grid lines
        lineWidth: 2,           // Set the lineWidth of the grid lines
      },
      pointLabels: {            // Configuration of the labels displayed outside the chart
        color: 'black',         // Set the color of the labels displayed outside the chart
        font: {
          size: 25,             // Set the font size of the labels displayed outside the chart
        }
      },
      ticks: {                  // The marks displayed inside the chart
        color: 'black',         // Set the color of the marks 
        font: {
          size: 15              // Set the font size of the marks
        }
      }
    }
  },
  plugins: {
    title: {                    // Activate the Title of the chart
      display: true,            // True to display the title
      color: 'black',           // Set the color of the title
      text: 'Stats visualizer', // Set the text displayed in the title
      font: {
        size: 30,               // Set the font size of the title
      }
    }
  }
}

/** 
 * @desc Configuration of the chart 
 * It contains all the necessary information for the RadarChart to work
 */
export const CONFIG = {
  type: TYPE,      // The type of the chart
  data: DATA,      // The data that is going to be displayed
  options: OPTIONS // All other options of the chart
};