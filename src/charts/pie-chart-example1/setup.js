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

import { MARITIME_TRAFFIC } from '../../data/trafico-maritimo.js';

let totalAmounfOfTraffic2016 = [];
for (let data of MARITIME_TRAFFIC.DATOS) {
  if (data.PERIODO === '2016 TOTAL (p)') { 
    console.log(data.PERIODO);
    totalAmounfOfTraffic2016.push(data); 
  }
}
const COLORS = ['red', 'yellow', 'blue', 'green'];
let traffic = [];
let labels = [];  
for (let data of totalAmounfOfTraffic2016) {
  labels.push(data.PUERTO);
  traffic.push(Number(data.pasajeros_de_crucero) + Number(data.pasajeros_en_linea_regular));
}

/**
 * @desc A ChartData object that contains all the information
 * that will be displayed in the Linechart, can have multiple options 
 * for different datasets
 */
export const DATA = { 
  labels: labels,             // Names that will be show above the pie chart
  datasets: [{                // Array of DataSet objects
    data: traffic,            // Set the displayed data with the information collected
    backgroundColor: COLORS,  // Color inside each segment of the PieChart
    hoverOffset: 10,          // How much the segment move away from the chart
    //borderColor: 'black',   // The Color of the border lines
    //borderWitdh: 2,         // The thickness of the boder lines
  }],                        
};