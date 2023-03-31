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

/** @desc Data for the configuration of the chart */
export const DATA = {
  labels: ['January', 'February', 'March', 'April', 'May' ],
  datasets: [{
    label: 'Some data',
    data: [65, 59, 80, 81, 56],
    fill: false,
    borderColor: 'rgb(75, 192, 192)'
  }],
};