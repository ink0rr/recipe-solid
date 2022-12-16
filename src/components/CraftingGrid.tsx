import { createSignal, For } from "solid-js";
import ItemSlot from "./ItemSlot";

import type { Item } from "../types/Item";

export default function CraftingGrid() {
  const [items, setItems] = createSignal<Array<Item | null>>(
    Array.from({ length: 9 }, () => null),
  );
  const setItem = (index: number) => (item: Item | null) => {
    setItems((prev) => {
      const next = [...prev];
      next[index] = item;
      return next;
    });
  };
  return (
    <div class="flex gap-12">
      <div class="select-none w-[108px]">
        <For each={items()}>
          {(item, index) => <ItemSlot item={item} setItem={setItem(index())} />}
        </For>
      </div>
      <ItemSlot item={null} />
    </div>
  );
}
