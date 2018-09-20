export default class Robot {
    constructor() {
        this.moveListeners = [];
    }

    onNext(instruction) {
        if (instruction.setDirection) {
            this.direction = instruction.setDirection;
        }
        if (instruction.updateDirection) {
            this.direction.apply(instruction.updateDirection);
        }
        if (instruction.move) {
            this.moveListeners.every(listener => listener(this, instruction.move))
        }
    }

    onMove(fn) {
        this.moveListeners.push(fn);
    }
}