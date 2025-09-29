import { isKeyPressed } from './input.js';

export class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.oldX = x;
        this.oldY = y;
        this.speed = 4;

        this.img = new Image();
        this.img.src = 'assets/bread.jpg';
    }

    update() {
        let currentSpeed = this.speed;
        if (isKeyPressed('Shift')) currentSpeed += 4;
        this.oldX = this.x;
        this.oldY = this.y;

        if (isKeyPressed('ArrowUp')) this.y -= currentSpeed;
        if (isKeyPressed('ArrowDown')) this.y += currentSpeed;
        if (isKeyPressed('ArrowLeft')) this.x -= currentSpeed;
        if (isKeyPressed('ArrowRight')) this.x += currentSpeed;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y);
    }

    setPos(x, y) {
        this.x = x;
        this.y = y;
    }

    getOldPos() {
        return {
            x: this.oldX,
            y: this.oldY
        };
    }
}