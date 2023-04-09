/**
 * @desc A class that represent a 2D Point
 */
export class Point2D {
    /**
     * @desc The constructor of the Point2D
     * @param {number} xPos The X coord of the point, by default is 0
     * @param {number} yPos The Y coord of the point, by default is 0
     */
    constructor(xPos = 0, yPos = 0) {
        this.xPos = xPos;
        this.yPos = yPos;
    }
    /**
     * @desc Getter of the Coordinates of the point
     * @returns {[number, number]}
     */
    getCoords() { return [this.xPos, this.yPos]; }
    /**
     * @desc Check if two points are equal by checking each coordinate
     * @param {Point2D} anotherPoint
     * @returns {boolean} returns true if they are equal;
     * @returns {boolean} returns false otherwise
     */
    areEquals(anotherPoint) {
        return (this.xPos === anotherPoint.getCoords()[0] &&
            this.yPos === anotherPoint.getCoords()[1]);
    }
}
