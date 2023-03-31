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
 * @desc Configuration for the scatter chart
 *       
 * @see {@link https://github.com/ULL-ESIT-PAI-2022-2023/2022-2023-pai-data-visualization}
 */

'use strict';

export const DATA = {
  datasets: [{
    label: 'Scatter Dataset', // Name that will be shown in the legend
    data: [{ // An array of objects {X: number, y: number}
      x: -10, // The X position of the point
      y: 0    // The y position of the point
    }, {
      x: 0,
      y: 10
    }, {
      x: 10,
      y: 5
    }, {
      x: 0.5,
      y: 5.5
    }],
    backgroundColor: 'rgb(255, 99, 132)', // The color of the are inside the circle
    borderColor: 'rgb(255, 99, 132)', // The color of the circle border
    pointSyle: 'circle' // The style of the dots in the chart
    // It can be change to cross, line, rect, triangle, star, etc.
  }],
};