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
import { PERNOCTATIONS } from '../../data/pernoctaciones.js';
const PERNOCTATIONS_DATA = PERNOCTATIONS.slice();

/**@desc Getting the labels and the data for every year */
let data_map = new Map();
let years = new Set();
for (let pernoctation of PERNOCTATIONS_DATA) {
  years.add(pernoctation.año);
  data_map.set(pernoctation.año, ((data_map.get(pernoctation.año) ?? 0) + Number(pernoctation.total)));
}

years = Array.from(years)

let data = []
data_map.forEach((_value, key) => {
  data.push(data_map.get(key))
})

/** @desc Data for the configuration of the chart */
export const DATA = {
  labels: years,
  datasets: [{
    label: 'Total percnoctations in hotels in Tenerife throughout the years',
    data: data,
    fill: false,
    borderColor: 'rgb(75, 192, 192)'
  }],
};