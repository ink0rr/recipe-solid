import { createResource } from "solid-js";
import type { Item } from "../types/Item";

export const [inventory] = createResource<Item[]>(async () => {
  return await fetch("https://ink0rr-bedrock-items.deno.dev/items").then(
    (res) => res.json()
  );
});
