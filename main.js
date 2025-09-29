import { initInputs } from './rpg/input.js';
import { Player } from './rpg/player.js';
import { GameCanvas } from './rpg/canvas.js';

// Initialize canvas
const gameCanvas = new GameCanvas('mainCanvas');

// Initialize player
const player = new Player(0, 0);
player.img.onload = () => gameCanvas.renderLoop();

// Initialize player inputs
initInputs();

// Add player to canvas entities
gameCanvas.addEntity(player);