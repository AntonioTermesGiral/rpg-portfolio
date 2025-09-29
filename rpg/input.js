const pressedKeys = {};

export function initInputs() {
    window.addEventListener('keydown', e => pressedKeys[e.key] = true);
    window.addEventListener('keyup', e => pressedKeys[e.key] = false);
}

export function isKeyPressed(key) {
    return pressedKeys[key] ?? false;
}
