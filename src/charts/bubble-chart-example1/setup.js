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

import { Point2D } from './Point2D.js';
import { Cluster } from './Cluster.js';
import { solve } from './Kmeans.js';
import { POINTS } from './points.js';

let cluster = new Cluster();
for (let point of POINTS) {
  cluster.insertPoint(new Point2D(point[0], point[1]));
}
let dataSets = solve(cluster, 4 );
const COLORS =  ['red', 'green', 'blue', 'black'];
const STYLES =  ['circle', 'triangle', 'rect', 'rectRot'];
let counter = 0;
for (let dataSet of dataSets) {
  dataSet.backgroundColor = COLORS[counter];
  dataSet.pointStyle = STYLES[counter];
  counter++;
}

/**
 * 
 */
export const DATA = { datasets: dataSets };