export class Collidable {
    constructor(x, y, srcImg) {
        this.x = x;
        this.y = y;

        this.collision = true;
        this.img = new Image();
        this.img.src = srcImg;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y);
    }
}