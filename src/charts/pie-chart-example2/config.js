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

import { DATA } from './setup.js';

/** 
 * @desc Type of the chart to represent
 * Contains the type of the Chart, in this case is a Pie Chart
 */
const TYPE = 'pie';

/**
 * @desc The general options of the pie chart, 
 * includes chart specific options like resposive or the aspecRatio but can have
 * Data options, this options are set to all Data objects in the Chart
 */
const OPTIONS = {
  responsive: true,           // Respond to size changes in the canvas
  maintainAspectRatio: false, // Desactive the AspectRatio
  cutout: '50%' ,             // The portion of the chart that is cut out of the middle.
  plugins: {
    legend: {
      display: false          // Deactivate the legend of the chart
    },
    title: {                  // Activate the Title of the chart
      display: true,
      color: 'black',
      text: 'Alcobendas City Council budget distribution',
      font: {
        size: 30,
      }
    }
  }  
}

/** 
 * @desc Configuration of the chart 
 * It contains all the necessary information for the PieChart to work
 */
export const CONFIG = {
  type: TYPE,      // The type of the chart
  data: DATA,      // The data that is going to be displayed
  options: OPTIONS // All other options of the chart, It can set data options in all DataSets
};