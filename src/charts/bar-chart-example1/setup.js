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
 * @see {@link https://www.chartjs.org/docs/latest/charts/bar.html} 
 */

/**
 * @desc A bad example of data that can be displayed in a chart
 */
const data = [
  { year: 2010, count: 10 },
  { year: 2011, count: 20 },
  { year: 2012, count: 15 },
  { year: 2013, count: 25 },
  { year: 2014, count: 22 },
  { year: 2015, count: 30 },
  { year: 2016, count: 28 },
];

/**
 * @desc A ChartData object that contains all the information
 * that will be displayed in the Barchart, can have multiple options 
 * for different datasets
 */
export const DATA = {
  labels: data.map((row) => { return row.year; }), // Names that are going to be shown in the Y axis.
  datasets: [{ // An array of DataChart objects containing the basic information for the chart
    label: 'Acquisitions by year', // The name that will appear in the legend
    data: data.map((row) => { return row.count; }), // An array of Objects, Numbers or Strings
    backgroundColor: data.map(() => `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`), 
      // An Array of Colors for each Bar in the Chart. This color represent the inside of each bar
    borderColor: data.map(() => `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`),
      // An Array of Colors for each Bar in the Chart. This color represent the lines of each bar
  }],
};