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
 * @desc Configuration for the bubble chart
 *       
 * @see {@link https://github.com/ULL-ESIT-PAI-2022-2023/2022-2023-pai-data-visualization}
 */

'use strict';

export const DATA = {
  datasets: [{
    label: 'First Dataset', // name that will show in the legend
    data: [{ // An array of objects  { x: number, y: number, r:number}
      x: 20, // X position in the chart
      y: 30, // Y position in the chart
      r: 25  // The radius of the circle in the chart
    }, {
      x: 40,
      y: 10,
      r: 10
    }],
    backgroundColor: 'rgb(255, 99, 132)', // The color inside the circle
    borderColor: 'rgb(255, 99, 132)', // The color of the circle border
    pointSyle: 'circle' // The style of the dots in the chart
    // It can be change to cross, line, rect, triangle, star, etc.
  }]
};