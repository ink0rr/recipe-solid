import { createSignal } from "solid-js";
import type { Item } from "../types/Item";

export const [inventory, setInventory] = createSignal<Item[]>([]);

fetch("https://ink0rr-bedrock-items.deno.dev/items")
  .then((res) => res.json())
  .then((data) => setInventory(data));
