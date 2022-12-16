import { For } from "solid-js";
import ItemSlot from "./ItemSlot";

import type { Item } from "../types/Item";

interface InventoryProps {
  items: Item[];
}

export default function Inventory(props: InventoryProps) {
  return (
    <div class="flex flex-row flex-wrap select-none overflow-y-scroll w-96 max-h-[50vh]">
      <For each={props.items}>{(item) => <ItemSlot item={item} />}</For>
    </div>
  );
}
