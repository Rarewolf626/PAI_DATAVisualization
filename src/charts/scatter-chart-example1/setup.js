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

import { BUS_STOPS } from '../../data/paradas-TITSA.js';

const PINK = 'rgba(255, 99, 132, 1)'

let dataSets = [];
for (let busStop of BUS_STOPS) {
  dataSets.push({ 
      label: busStop.properties.stop_name, 
      data: { x: Number(busStop.geometry.coordinates[0]), y: Number(busStop.geometry.coordinates[0])},
      backgroundColor: PINK, // The color of the are inside the circle
      borderColor: PINK, // The color of the circle border
      pointSyle: 'circle' // The style of the dots in the chart      
    }
  );
}

export const DATA = { datasets: dataSets };