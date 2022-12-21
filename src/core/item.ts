import { customItems } from "../stores/customItems";
import { vanillaItems } from "../stores/vanillaItems";
import type { RecipeJsonItem } from "../types/RecipeJson";

export function getItem(id: string | null): RecipeJsonItem | undefined {
  id ??= "";
  const item = vanillaItems()[id] ?? customItems()[id];
  if (!item) return undefined;
  return {
    item: item.identifier,
    data: item.data,
    count: 1,
  };
}

export function getItemTexture(id: string | null): string {
  id ??= "";
  return vanillaItems()[id]
    ? `https://ink0rr-api.deno.dev/items/${id}/texture`
    : customItems()[id]?.texture ?? "/missing.png";
}
