export class GameCanvas {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.entities = [];
    }

    addEntity(entity) {
        this.entities.push(entity);
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    renderLoop() {
        this.clear();
        for (const entity of this.entities) {
            entity.update();
            entity.draw(this.ctx);
        }
        requestAnimationFrame(() => this.renderLoop());
    }
}