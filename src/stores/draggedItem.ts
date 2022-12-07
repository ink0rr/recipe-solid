import { createSignal } from "solid-js";
import type { Item } from "../types/Item";

export const [draggedItem, setDraggedItem] = createSignal<Item | null>(null);
