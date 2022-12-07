import { createSignal, Show } from "solid-js";
import { draggedItem, setDraggedItem } from "../stores/draggedItem";
import { isPicking, setIsPicking } from "../stores/isPicking";
import type { Item } from "../types/Item";
import style from "./ItemSlot.module.css";

interface ItemSlotProps {
  item: Item | null;
  crafting?: boolean;
}

export default function ItemSlot({ item, crafting }: ItemSlotProps) {
  const [currentItem, setCurrentItem] = createSignal(item);

  const EmptySlot = (
    <div
      style={{
        display: "inline",
      }}
      onContextMenu={(e) => e.preventDefault()}
      onMouseEnter={(e) => {
        if (e.buttons && draggedItem() && !isPicking()) {
          setCurrentItem(draggedItem());
        }
      }}
      onMouseDown={() => {
        setIsPicking(false);
        setCurrentItem(draggedItem());
      }}
    >
      <span class={style.grid}>
        <div
          style={{
            height: "32px",
            width: "32px",
          }}
        />
      </span>
    </div>
  );
  return (
    <Show when={currentItem()} fallback={EmptySlot}>
      <div
        style={{
          display: "inline",
        }}
        onContextMenu={(e) => e.preventDefault()}
        onMouseDown={(e) => {
          setIsPicking(true);
          if (!crafting) {
            setDraggedItem(draggedItem() ? null : currentItem());
            return;
          }

          if (draggedItem()) {
            const temp = draggedItem();
            setDraggedItem(currentItem());
            setCurrentItem(temp);
            return;
          }

          if (e.shiftKey) setIsPicking(false);
          else setDraggedItem(currentItem());

          setCurrentItem(null);
        }}
        onMouseUp={(e) => {
          if (crafting && !isPicking()) {
            setDraggedItem(null);
          }
        }}
      >
        <span class={style.grid}>
          <div
            style={{
              height: "32px",
              width: "32px",
            }}
          >
            <img
              class={style.img}
              src={`https://raw.githubusercontent.com/ink0rr/bedrock-items/main/dist/textures/${
                currentItem()?._id
              }.png`}
              alt={currentItem()?.readable}
              width="32px"
              height="32px"
            />
          </div>
        </span>
      </div>
    </Show>
  );
}
