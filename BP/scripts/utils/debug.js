import { world } from "@minecraft/server"

export function debugMessage(message) {
    world.sendMessage(`§8[DEBUG] §7${message}`);
}

export function debugFunction(func) {
    try {
        func();
    } catch (error) {
        world.sendMessage(error.toString());
    }
}