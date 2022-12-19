import { createSignal } from "solid-js";
import type { CustomItem } from "../types/CustomItem";

function loadCustomItems(): Record<string, CustomItem> {
  const items = localStorage.getItem("customItems") ?? "{}";
  try {
    return JSON.parse(items);
  } catch {
    return {};
  }
}

const [customItems, setCustomItems] = createSignal(loadCustomItems());

const addCustomItem = (item: CustomItem) =>
  setCustomItems((prev) => {
    const items = { ...prev };
    items[item.identifier] = item;
    localStorage.setItem("customItems", JSON.stringify(items));
    return items;
  });

export { addCustomItem, customItems };
