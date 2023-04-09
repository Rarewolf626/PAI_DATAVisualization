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
 * @desc Configuration for the Polar Area chart
 *       
 * @see {@link https://github.com/ULL-ESIT-PAI-2022-2023/2022-2023-pai-data-visualization}
 * @see {@link https://www.chartjs.org/docs/latest/charts/polar.html} 
 */

'use strict';

import { RESULTS } from '../../data/resultados-electorales-tenerife-2019.js';

let colors = [];  
let votes = new Map();
for (let electoralTable of RESULTS) {
  let politicParty = electoralTable.coalicion_partido;                                                              
  let previousVotes = (votes.get(politicParty))? votes.get(politicParty) : 0;                      // Check if the politicalParty has votes
  votes.set(politicParty, previousVotes + electoralTable.votos);                                   // Add the new votes into the politicalParty
  colors.push(`rgba(${Math.random() * 256}, ${Math.random() * 256} , ${Math.random() * 256}, 1)`); // random colors
}

let otherVotes = 0;
const MINIMUM_VOTES = 10000;               // Set the minimum number of votes to be added in the chart with its own name
let totalVotes = [];
let labels = [];
for (let politicPartyVotes of votes) {
  if (politicPartyVotes[1] < MINIMUM_VOTES) { 
    otherVotes += politicPartyVotes[1];     // Add the low votes to otherVotes
  } else {
    totalVotes.push(politicPartyVotes[1]);  // Get all the values of the map into an Array
    labels.push(politicPartyVotes[0]);      // Add the name of the PoliticParty into the labels Array
  }
}
totalVotes.push(otherVotes);
labels.push('Others');

/**
 * @desc A ChartData object that contains all the information
 * that will be displayed in the PolarAreachart, can have multiple options 
 * for different datasets
 */
export const DATA = {
  labels: labels,                     // Names that will be shown above the Polar Area chart
  datasets: [{                        // Array of dataSet objects
    data: totalVotes,                 // Only accepts Number[]
    backgroundColor: colors,          // The color of each segment in the chart
    hoverOffset: 10                   // How much the segment move away from the chart
    // borderColor: 'black',          // The Color of the border lines
    // borderWitdh: 1,                // The thickness of the boder lines
  }]
};