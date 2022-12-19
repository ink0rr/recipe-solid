import { createResource } from "solid-js";
import type { Item } from "../types/Item";

export const [vanillaItems] = createResource<Record<string, Item>>(
  async () => {
    return await fetch("https://ink0rr-api.deno.dev/items").then(
      (res) => res.json(),
    );
  },
  { initialValue: {} },
);
