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

    isBetween(firstEntity, secondEntity) {
        let firstPointsX = [firstEntity.x, firstEntity.x + firstEntity.img.naturalWidth]
        let secondPointsX = [secondEntity.x, secondEntity.x + secondEntity.img.naturalWidth]

        const startInX = firstPointsX[0] >= secondPointsX[0] && firstPointsX[0] <= secondPointsX[1];
        const endInX = firstPointsX[1] >= secondPointsX[0] && firstPointsX[1] <= secondPointsX[1];
        const aroundX = firstPointsX[0] <= secondPointsX[0] && firstPointsX[1] >= secondPointsX[1];
        const insideX = firstPointsX[0] >= secondPointsX[0] && firstPointsX[1] <= secondPointsX[1];

        const betweenX = startInX || endInX || aroundX || insideX;

        let firstPointsY = [firstEntity.y, firstEntity.y + firstEntity.img.naturalHeight]
        let secondPointsY = [secondEntity.y, secondEntity.y + secondEntity.img.naturalHeight]
        const startInY = firstPointsY[0] >= secondPointsY[0] && firstPointsY[0] <= secondPointsY[1];
        const endInY = firstPointsY[1] >= secondPointsY[0] && firstPointsY[1] <= secondPointsY[1];
        const aroundY = firstPointsY[0] <= secondPointsY[0] && firstPointsY[1] >= secondPointsY[1];
        const insideY = firstPointsY[0] >= secondPointsY[0] && firstPointsY[1] <= secondPointsY[1];

        const betweenY = startInY || endInY || aroundY || insideY;

        return { betweenY, betweenX };
    }

    checkCollisions(entity) {
        if (entity.speed) {
            let newX = entity.x;
            let newY = entity.y;
            let entityWidth = entity.img.naturalWidth;
            let entityHeight = entity.img.naturalHeight;

            for (const otherEntity of this.entities) {
                const { betweenX, betweenY } = this.isBetween(entity, otherEntity)
                if (otherEntity.collision && betweenY && betweenX) {
                    if (betweenX)
                        newX = entity.getOldPos().x;
                    if (betweenY)
                        newY = entity.getOldPos().y;
                }
            }

            // Check border collisions
            if (entity.x < 0) newX = 0;
            if (entity.x > 1000 - entityWidth) newX = 1000 - entityWidth;
            if (entity.y < 0) newY = 0;
            if (entity.y > 900 - entityHeight) newY = 900 - entityHeight;

            entity.setPos(newX, newY);
        }
    }

    renderLoop() {
        this.clear();
        for (const entity of this.entities) {
            this.checkCollisions(entity);
            entity.update?.();
            entity.draw(this.ctx);
        }
        requestAnimationFrame(() => this.renderLoop());
    }
}