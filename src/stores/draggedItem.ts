import { createSignal } from "solid-js";

export const [draggedItem, setDraggedItem] = createSignal<string | null>(null);
