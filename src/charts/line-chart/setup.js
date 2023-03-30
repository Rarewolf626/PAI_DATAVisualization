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
 * @desc Setup for the line chart
 *       
 * @see {@link https://github.com/ULL-ESIT-PAI-2022-2023/2022-2023-pai-data-visualization}
 */

'use strict';

/** @desc Importing pecnoctations dataset */
import { PECNOCTATIONS } from '../../JSON/pecnoctaciones.js';
const PECNOCTATIONS_DATA = PECNOCTATIONS.slice();

/**@desc Getting the labels and the data for every year */
let data_map = new Map();
let years = new Set();
for (let pecnoctation of PECNOCTATIONS_DATA) {
  years.add(pecnoctation.año);
  data_map.set(pecnoctation.año, ((data_map.get(pecnoctation.año) ?? 0) + Number(pecnoctation.total)));
}

years = Array.from(years).reverse()

let data = []
data_map.forEach((_value, key) => {
  data.push(data_map.get(key))
})
data.reverse()

/** @desc Data for the configuration of the chart */
export const DATA = {
  labels: years,
  datasets: [{
    label: 'Total pecnoctations throughout the years',
    data: data,
    fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
  }]
};