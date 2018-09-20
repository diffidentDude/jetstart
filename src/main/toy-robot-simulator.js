import Direction from './direction';
import Observable from './observable';
import Robot from './robot';
import Board from './board';

const TURN = 90;

export class ToyRobotSimulator {
    constructor() {
        this.instructions = new Observable();
        this.board = new Board(5, 5);
        this.robot = new Robot();
    }

    place(x, y, f) {
        this.board.place(x, y, this.robot);
        this.instructions.subscribe((instruction) => { this.robot.onNext(instruction) });
        this.instructions.push({ setDirection: new Direction(f) });
    }

    move() {
        this.instructions.push({ move: currentPosition => currentPosition + 1 });
    }

    left() {
        this.instructions.push({ updateDirection: currentDirection => currentDirection - TURN });
    }

    right() {
        this.instructions.push({ updateDirection: currentDirection => currentDirection + TURN });
    }

    report() {
        const boardObject = this.board.getObject(this.robot);
        return `x:${boardObject && boardObject.x} y:${boardObject && boardObject.y} f:${this.robot.direction && this.robot.direction.compass().name}`
    }
}