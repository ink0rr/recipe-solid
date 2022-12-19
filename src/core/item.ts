import { customItems } from "../stores/customItems";
import { vanillaItems } from "../stores/vanillaItems";
import type { Item } from "../types/Item";

export function getItem(id: string | null): Item | null {
  if (!id) return null;
  return vanillaItems()[id] ?? customItems()[id] ?? null;
}

export function getItemTexture(id: string | null): string {
  if (!id) return "/missing.png";
  return vanillaItems()[id]
    ? `https://ink0rr-api.deno.dev/items/${id}/texture`
    : customItems()[id]?.texture ?? "/missing.png";
}
