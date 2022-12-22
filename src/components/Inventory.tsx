import { debounce } from "lodash-es";
import { createMemo, createSignal, For } from "solid-js";
import ItemSlot from "./ItemSlot";

interface InventoryProps {
  items: string[];
}

export default function Inventory(props: InventoryProps) {
  const [searchQuery, setSearchQuery] = createSignal("");
  const items = createMemo(() => {
    return props.items.filter(
      (item) => item.toLowerCase().includes(searchQuery().toLowerCase()),
    );
  });
  return (
    <div class="tab">
      <div class="tab--header">
        {
          <input
            type="search"
            id="search"
            class="input input-parent"
            placeholder="Search"
            onInput={debounce((event) => {
              setSearchQuery(event.target.value);
            })}
          />
        }
      </div>
      <div class="tab--content">
        <div class="scrollable item-inventories">
          <For each={items()}>{(item) => <ItemSlot item={item} />}</For>
        </div>
      </div>
    </div>
  );
}
