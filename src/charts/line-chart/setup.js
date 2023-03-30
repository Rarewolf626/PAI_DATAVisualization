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

 /** @desc import AEMET dataset and remove last element */
 import { PECNOCTATIONS } from './../../JSON/pecnoctaciones.js';
 const PECNOCTATIONS_DATA = PECNOCTATIONS.slice(0, -1);
 
 /** @desc Obtain the number of rainy days in every month */
 let data = [];
 for (let pecnoctation of PECNOCTATIONS_DATA) {
   data.push(pecnoctation.total);
 }
 
 /**@desc labels for the columns representing each month */
 const YEARS = [
   '1932',
   '1937',
   '2011',
   '2012',
   '2013',
   '2015',
   '2019'
 ];
 let years = new Set();
 for (let pecnoctation of PECNOCTATIONS_DATA) {
   years.add(pecnoctation.año);
 }

 years = Array.from(years).reverse()
 
 
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