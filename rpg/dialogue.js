export class DialogueHandler {
    constructor(canvasInstance) {
        this.canvas = canvasInstance;
        this.open = false;
        this.dialog = document.getElementById("NPCDialog");
        this.dialog.addEventListener("close", () => this.open = false)
    }

    init() {
        document.addEventListener('keydown', (e) => {
            if (e.code === "KeyE") {
                const npcs = this.canvas.entities.filter((e) => e.dialogue);
                const player = this.canvas.entities.filter((e) => e.speed)[0];
                let closestNPC = npcs[0];
                let closestDistance = Infinity;
                for (const npc of npcs) {
                    const distance = this.distanceToNPC(player, npc);
                    if (distance < closestDistance) {
                        closestDistance = distance;
                        closestNPC = npc;
                    }
                }
                if (closestDistance < 30) {
                    this.open = true;
                    closestNPC.loadDialogText();
                    this.dialog.show()
                }
            };
        })
    }

    distanceToNPC(player, npc) {
        const playerStartX = player.x;
        const playerEndX = player.x + player.img.naturalWidth;
        const playerStartY = player.y;
        const playerEndY = player.y + player.img.naturalHeight;

        const npcStartX = npc.x;
        const npcEndX = npc.x + npc.img.naturalWidth;
        const npcStartY = npc.y;
        const npcEndY = npc.y + npc.img.naturalHeight;

        // Calculate horizontal and vertical distances between edges
        const dx = Math.max(0, Math.max(npcStartX - playerEndX, playerStartX - npcEndX));
        const dy = Math.max(0, Math.max(npcStartY - playerEndY, playerStartY - npcEndY));

        // Use Pythagorean theorem to get distance
        return Math.sqrt(dx * dx + dy * dy);
    }

}