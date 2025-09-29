import { initInputs } from './rpg/input.js';
import { Player } from './rpg/player.js';
import { GameCanvas } from './rpg/canvas.js';
import { Collidable } from './rpg/collidable.js';

// Initialize canvas
const gameCanvas = new GameCanvas('mainCanvas');

// Initialize player
const player = new Player(0, 0);
player.img.onload = () => gameCanvas.renderLoop();

const wall = new Collidable(400, 300, "assets/wall.jpg");

// Initialize player inputs
initInputs();

// Add player to canvas entities
gameCanvas.addEntity(player);
gameCanvas.addEntity(wall);