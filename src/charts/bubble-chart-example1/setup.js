/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Eva Peso Adán <peso.adan.05@ull.edu.es>
 * @author Raimon José Mejías Hernández  <raimon.mejias.35@ull.edu.es>
 * @since Apr 7 2023
 * 
 * @desc Set the data configuration of the bar chart
 *       
 * @see {@link https://github.com/ULL-ESIT-PAI-2022-2023/2022-2023-pai-data-visualization}
 * @see {@link https://www.chartjs.org/docs/latest/charts/bubble.html} 
 */
'use strict';

import { Point2D } from './kmeans/Point2D.js';
import { Cluster } from './kmeans/Cluster.js';
import { solve } from './kmeans/Kmeans.js';
import { POINTS } from './points.js';

let cluster = new Cluster(); // Create a new Cluster
for (let point of POINTS) {
  cluster.insertPoint(new Point2D(point[0], point[1])); // Add all points in the problem cluster
}
let dataSets = solve(cluster, 4); // Solves the cluster problem using Kmeans
const COLORS =  ['red', 'green', 'blue', 'black']; // Array of colors
const STYLES =  ['circle', 'triangle', 'rect', 'rectRot']; // Array of PointStyles
let counter = 0;
for (let dataSet of dataSets) { // Set a color and a pointStyle for each cluster
  dataSet.backgroundColor = COLORS[counter];
  dataSet.pointStyle = STYLES[counter];
  counter++;
}

/**
 * @desc A ChartData object that contains all the information
 * that will be displayed in the Bubblechart, can have multiple options 
 * for different datasets
 */
export const DATA = { datasets: dataSets };