const DIRECTIONS = [
    { name: 'NORTH', degrees: 360, sign: 1, axis: 'y' },
    { name: 'SOUTH', degrees: 180, sign: -1, axis: 'y' },
    { name: 'EAST', degrees: 90, sign: 1, axis: 'x' },
    { name: 'WEST', degrees: 270, sign: -1, axis: 'x' }
];

const DEGREES = 360;

export default class Direction {
    constructor(f) {
        this.direction = DIRECTIONS.find((direction) => direction.name === f).degrees
    }

    apply(fn) {
        this.direction = fn(this.direction) % DEGREES;
    }

    compass() {
        return DIRECTIONS.find((direction) => direction.degrees === this.direction)
    }
}