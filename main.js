import { initInputs } from './rpg/input.js';
import { Player } from './rpg/player.js';
import { GameCanvas } from './rpg/canvas.js';
import { Collidable } from './rpg/collidable.js';
import { NPC } from './rpg/npc.js';
import { DialogueHandler } from './rpg/dialogue.js';

// Initialize canvas
const gameCanvas = new GameCanvas('mainCanvas');

// Initialize player
const player = new Player(0, 0);
player.img.onload = () => gameCanvas.renderLoop();

const wall1 = new Collidable(400, 300, "assets/wall.jpg");
const npc1 = new NPC(200, 300, "assets/npc.jpg", "Good day m8!");
const npc2 = new NPC(800, 200, "assets/npc.jpg", "Howdy!");

// Initialize player inputs
initInputs();

// Add player to canvas entities
gameCanvas.addEntity(player);
gameCanvas.addEntity(wall1);
gameCanvas.addEntity(npc1);
gameCanvas.addEntity(npc2);

new DialogueHandler(gameCanvas).init();