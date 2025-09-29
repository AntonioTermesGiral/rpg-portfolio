import { Collidable } from "./collidable.js";

export class NPC extends Collidable {
    constructor(x, y, srcImg, dialogue) {
        super(x, y, srcImg)
        this.dialogue = dialogue;
    }

    loadDialogText() {
        document.getElementById("NPCDialogContent").textContent = this.dialogue;
    }
}