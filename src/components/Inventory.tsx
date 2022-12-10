import { For, Resource } from "solid-js";
import type { Item } from "../types/Item";
import ItemSlot from "./ItemSlot";

interface InventoryProps {
  items: Item[];
}

export default function Inventory(props: InventoryProps) {
  return (
    <div
      style={{
        display: "flex",
        "flex-direction": "row",
        "flex-wrap": "wrap",
        "user-select": "none",
      }}
    >
      <For each={props.items}>{(item) => <ItemSlot item={item} />}</For>
    </div>
  );
}
