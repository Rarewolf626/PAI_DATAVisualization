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

import { BUDGET } from '../../data/presupuesto.js';

let budgedElements = [];
for (let data of BUDGET) {
  if (Number(data.previsionInicialEjercicio) > 5000000) { budgedElements.push(data); }
}
let colors = [];
let budgets= [];  // Array with all the total budgets
let labels = [];  // Array with the name of the budgetElement
for (let data of budgedElements) {
  budgets.push(Number(data.previsionInicialEjercicio));
  labels.push(data.clasificacionEconomica.label);
  colors.push(`rgba(${Math.random() * 256}, ${Math.random() * 256} , ${Math.random() * 256}, 1)`); // random colors
}

/**
 * @desc A ChartData object that contains all the information
 * that will be displayed in the Piechart, can have multiple options 
 * for different datasets
 */
export const DATA = { 
  labels: labels,             // Names that will be shown above the pie chart
  datasets: [{                // Array of DataSet objects
    data: budgets,            // Set the displayed data with the information collected
    backgroundColor: colors,  // Color inside each segment of the PieChart
    hoverOffset: 10,          // How much the segment move away from the chart
    //borderColor: 'black',   // The Color of the border lines
    //borderWitdh: 2,         // The thickness of the boder lines
  }],                        
};