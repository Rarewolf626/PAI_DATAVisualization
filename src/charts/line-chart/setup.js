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
  labels: years, // names that will show in the legend
  datasets: [{ // Array of objects of type ChartData
    label: 'Total percnoctations in hotels in Tenerife throughout the years', // names that will show in the legend
    data: data, // object|object[]|number[]|string[]
    fill: false, // If true, fills the area under the line
    borderColor: 'rgb(75, 192, 192)',  // line color
    backgroundColor: 'rgb(75, 192, 192)' , // Color of the are under the line
    borderWidth: 1 // Changes the size of the line 
  }],
};