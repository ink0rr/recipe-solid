import { For, Resource } from "solid-js";
import type { Item } from "../types/Item";
import ItemSlot from "./ItemSlot";

interface InventoryProps {
  items: Resource<Item[]>;
}

export default function Inventory({ items }: InventoryProps) {
  return (
    <div
      style={{
        display: "flex",
        "flex-direction": "row",
        "flex-wrap": "wrap",
        "user-select": "none",
      }}
    >
      <For each={items()}>{(item) => <ItemSlot item={item} />}</For>
    </div>
  );
}
