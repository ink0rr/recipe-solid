import { createSignal } from "solid-js";

export const [mousePosition, setMousePosition] = createSignal({ x: 0, y: 0 });
