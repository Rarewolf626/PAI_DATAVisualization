
import { Point2D } from './Point2D.js';
/**
 * @desc a class that represent a Cluster of points
 */
export class Cluster {
    constructor() {
        /** @desc The points inside the cluster */
        this.points = new Set();
        /** @desc The centroid of the cluster */
        this.centroid = new Point2D();
    }
    /**
     * @desc Getter of the amount of points in the cluster
     * @returns {number} the amount of points in the cluster
     */
    getSize() { return this.points.size; }
    /**
     * @desc Getter of the centroid of the cluster
     * @returns {Point2D} The centroid of the cluster
     */
    getCentroid() { return this.centroid; }
    /**
     * @desc Getter of the points inside the cluster
     * @returns {Set<Point2D>} returns the points of the cluster
     */
    getPoints() { return this.points; }
    /**
     * @desc it calculates the new centroid of all the points inside the cluster
     */
    recalculateCentroid() {
        if (this.points.size <= 0) {
            return;
        }
        let coords = [0, 0];
        const SIZE = 2;
        coords.length = SIZE;
        const AMOUNT_OF_POINTS = this.points.size;
        for (let point of this.points) {
            for (let coord = 0; coord < SIZE; coord++) {
                coords[coord] += point.getCoords()[coord] / AMOUNT_OF_POINTS;
            }
        }
        this.centroid = new Point2D(coords[0], coords[1]);
    }
    /**
     * @desc Insert a point in the cluster
     * @param {Point2D} newPoint the point that is going to be inserted
     */
    insertPoint(newPoint) { this.points.add(newPoint); }
    /**
     * @desc Getter of a specific point in the cluster
     * @param {number} index The position of the point in the set
     * @returns {Point2D}
     */
    selectPoint(index) { return Array.from(this.points)[index]; }
    /**
     * @desc Check if two clusters are equal by comparing each point
     * @param {Cluster} anotherCluster
     * @returns {boolean} returns true if they are equal
     * @returns {boolean} returns false otherwise
     */
    areEquals(anotherCluster) {
        if (this.points.size !== anotherCluster.getSize()) {
            return false;
        }
        for (let index = 0, size = this.points.size; index < size; index++) {
            if (!(anotherCluster.selectPoint(index).areEquals(this.selectPoint(index)))) {
                return false;
            }
        }
        return true;
    }
}
