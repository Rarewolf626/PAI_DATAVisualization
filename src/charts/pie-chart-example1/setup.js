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
 * @see {@link https://www.chartjs.org/docs/latest/charts/doughnut.html} 
 */

'use strict';

import { MARITIME_TRAFFIC } from '../../data/trafico-maritimo.js';

let totalAmountOfTraffic2016 = [];
for (let data of MARITIME_TRAFFIC.DATOS) {  
  if (data.PERIODO === '2016 TOTAL (p)') { 
    totalAmountOfTraffic2016.push(data);    // Select only the information that is from the total of 2016
  }
}
const COLORS = ['red', 'yellow', 'blue', 'green'];
let traffic = []; // Array with all the total traffics for each port
let labels = [];  // Array with the name of all ports
for (let data of totalAmountOfTraffic2016) {
  let totalTraffic = Number(data.pasajeros_de_crucero) + Number(data.pasajeros_en_linea_regular);
  labels.push(data.PUERTO); 
  traffic.push(totalTraffic);
}

/**
 * @desc A ChartData object that contains all the information
 * that will be displayed in the Piechart, can have multiple options 
 * for different datasets
 */
export const DATA = { 
  labels: labels,             // Names that will be shown above the pie chart
  datasets: [{                // Array of DataSet objects
    data: traffic,            // Set the displayed data with the information collected
    backgroundColor: COLORS,  // Color inside each segment of the PieChart
    hoverOffset: 10,          // How much the hovering element moves away from the chart
    //borderColor: 'black',   // The color of the border lines
    //borderWitdh: 2,         // The thickness of the boder lines
  }],                        
};