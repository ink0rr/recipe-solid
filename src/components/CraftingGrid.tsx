import { createMemo, createSignal, For } from "solid-js";
import { createRecipe } from "../core/recipe/createRecipe";
import ItemSlot from "./ItemSlot";

export default function CraftingGrid() {
  const [items, setItems] = createSignal<Array<string | null>>(
    Array.from({ length: 9 }, () => null),
  );
  const setItem = (index: number) => (item: string | null) => {
    setItems((prev) => {
      const next = [...prev];
      next[index] = item;
      return next;
    });
  };
  const [output, setOutput] = createSignal<string | null>(null);

  const result = createMemo(() =>
    createRecipe("shaped", {
      input: items(),
      output: output(),
    })
  );
  return (
    <div class="crafting-grid-parent">
      <div class="recipe-grid">
        <div class="crafting-grid">
          <For each={items()}>
            {(item, index) => (
              <ItemSlot item={item} setItem={setItem(index())} />
            )}
          </For>
        </div>
        <ItemSlot item={output()} setItem={setOutput} />
      </div>
      <div class="tab scrollable">
        <pre>
          <code>
            {JSON.stringify(result(), null, 2)}
          </code>
        </pre>
      </div>
    </div>
  );
}
