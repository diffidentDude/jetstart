export default class Board {
    constructor(x, y) {
        this.MAX = { x, y };
        this.MIN = { x: 1, y: 1 };
        this.objects = [];
    }

    place(x, y, object) {
        if (this.validatePosition(x, this.MIN.x, this.MAX.x) && this.validatePosition(y, this.MIN.y, this.MAX.y)) {
            object.onMove((object, distance) => {
                this.updatePosition(object, distance)
            });
            this.objects.push({x, y, object});
        }
    }

    validatePosition(newPosition, min, max) {
        return newPosition <= max && newPosition >= min;
    }

    updatePosition(object, distance) {
        const boardObject = this.getObject(object);
        const direction = object.direction.compass();
        const selectedAxisPosition = boardObject[direction.axis];
        const newPosition = direction.sign * distance(direction.sign * selectedAxisPosition);
        if (this.validatePosition(newPosition, this.MIN[direction.axis], this.MAX[direction.axis])) {
            const objects = [];
            objects.push(this.objects.filter((boardObject) => boardObject.object === object));
            boardObject[direction.axis] = newPosition;
            objects.push(boardObject);
        }
    }

    getObject(object) {
        return this.objects.find((boardObject) => boardObject.object === object);
    }
}