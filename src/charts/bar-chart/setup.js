const data = [
  { year: 2010, count: 10 },
  { year: 2011, count: 20 },
  { year: 2012, count: 15 },
  { year: 2013, count: 25 },
  { year: 2014, count: 22 },
  { year: 2015, count: 30 },
  { year: 2016, count: 28 },
];

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