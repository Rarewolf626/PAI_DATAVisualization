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
 * @see {@link https://www.chartjs.org/docs/latest/charts/bubble.html} 
 */


import { Point2D } from './Point2D.js';
import { Cluster } from './Cluster.js';

/**
 * @desc Calculate the euclidean distance of two points
 * @param {Point2D} point1
 * @param {Point2D} point2
 * @returns {number} The distance between the two points
 */
function euclideanDistance(point1, point2) {
    let summatory = 0;
    for (let size = 0; size < 2; size++) {
        summatory += (point2.getCoords()[size] - point1.getCoords()[size]) * (point2.getCoords()[size] - point1.getCoords()[size]);
    }
    return Math.sqrt(summatory);
}
/**
 * @desc Select N random centroids from the set of points
 * @param {Set<Point2D>} points The entire set of points of the problem
 * @param {number} amountOfClusters The amount of centroids that are needed
 * @returns {Point2D[]} returns an array of Centroids
 */
function selectRandomCentroids(points, amountOfClusters) {
    let newCentroids = [];
    let selectPoints = new Set();
    for (let centroid = 0; centroid < amountOfClusters; centroid++) {
        let randomPosition;
        do {
            console.log(randomPosition);
            randomPosition = Math.floor(Math.random() * points.size);
        } while (selectPoints.has(Array.from(points)[randomPosition]));
        newCentroids.push(Array.from(points)[randomPosition]);
        selectPoints.add(Array.from(points)[randomPosition]);
    }
    return newCentroids;
}
/**
 * @desc Given a point and an Array of centroids, it calculates the corresponding
 * cluster that the point must be assigned
 * @param {Point2D} point the point to be assigned
 * @param {Point2D[]} centroids The centroids of each cluster
 * @returns {number} returns the position in the array of cluster tha the point
 * must be inserted
 */
function assignCentroid(point, centroids) {
    let index = 0;
    let minDistance = euclideanDistance(point, centroids[0]);
    for (let i = 1, size = centroids.length; i < size; i++) {
        let distance = euclideanDistance(point, centroids[i]);
        if (minDistance > distance) {
            minDistance = distance;
            index = i;
        }
    }
    return index;
}
/**
 * @desc recalculate the centroid of each clusters and return it to the algorithm
 * @param {Cluster[]} clusters
 * @return {Point2D[]} The new centroids of each cluster
 */
function recalculateCentroid(clusters) {
    let newCentroids = [];
    for (let cluster of clusters) {
        cluster.recalculateCentroid();
        newCentroids.push(cluster.getCentroid());
    }
    return newCentroids;
}
/**
 * @desc Check if the clusters of the previous state are equal to the clusters
 * of the actual state
 * @param {Cluster[]} oldclusters
 * @param {Cluster[]} newClusters
 * @returns {boolean} returns true if they are equal
 * @returns {boolean} returns false otherwise
 */
function areEquals(oldclusters, newClusters) {
    if (oldclusters.length !== newClusters.length) { return false; }
    for (let i = 0, size = oldclusters.length; i < size; i++) {
        if (!oldclusters[i].areEquals(newClusters[i])) {
            return false;
        }
    }
    return true;
}
/**
 * @desc Convert the obtained clusters into ChartData needed for the chart to display the information
 * @param {Cluster[]} clusters
 */
function clusterToChartData(clusters) {
    let dataSetArray = [];
    let counter = 1;
    for (let cluster of clusters) {
        let dataArray = [];
        let dataSet = { label: '', data: [] };
        dataSet.label = `Cluster ${counter}`;
        for (let point of cluster.getPoints()) {
            dataArray.push({ x: point.getCoords()[0], y: point.getCoords()[1], r: 10 });
        }
        dataArray.push({ x: cluster.getCentroid().getCoords()[0], y: cluster.getCentroid().getCoords()[1], r: 20 });
        dataSet.data = dataArray;
        counter++;
        dataSetArray.push(dataSet);
    }
    return dataSetArray;
}
/**
 * @desc Given an amount of clusters the function calculate which points are in each cluster, and which are the ones
 * @param initialCluster
 * @param amountOfClusters
 * @returns
 */
export function solve(initialCluster, amountOfClusters) {
    debugger
    let centroids = selectRandomCentroids(initialCluster.getPoints(), amountOfClusters);
    let newClusters = [];
    let oldclusters = [];
    do {
        oldclusters = newClusters.slice();
        newClusters = [];
        for (let i = 0; i < amountOfClusters; i++) {
            newClusters.push(new Cluster());
        }
        for (let point of initialCluster.getPoints()) {
            newClusters[assignCentroid(point, centroids)].insertPoint(point);
        }
        centroids = recalculateCentroid(newClusters);
    } while (!(areEquals(oldclusters, newClusters)));
    return clusterToChartData(newClusters);
}
