import { createSignal, Show } from "solid-js";
import { draggedItem, setDraggedItem } from "../stores/draggedItem";
import { isPicking, setIsPicking } from "../stores/isPicking";
import type { Item } from "../types/Item";
import style from "./ItemSlot.module.css";

interface ItemSlotProps {
  item: Item | null;
  setItem?: (item: Item | null) => void;
}

/**
 * If `setItem` is provided, the item slot will be a crafting grid slot.
 */
export default function ItemSlot(props: ItemSlotProps) {
  const EmptySlot = (
    <div
      style={{
        display: "inline",
      }}
      onContextMenu={(e) => e.preventDefault()}
      onMouseEnter={(e) => {
        if (e.buttons && draggedItem() && !isPicking()) {
          props.setItem?.(draggedItem());
        }
      }}
      onMouseDown={() => {
        if (!props.setItem) return;
        setIsPicking(false);
        props.setItem(draggedItem());
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
    <Show when={props.item} fallback={EmptySlot}>
      <div
        style={{
          display: "inline",
        }}
        onContextMenu={(e) => e.preventDefault()}
        onMouseDown={(e) => {
          setIsPicking(true);
          if (!props.setItem) {
            setDraggedItem(draggedItem() ? null : props.item);
            return;
          }

          if (draggedItem()) {
            const temp = draggedItem();
            setDraggedItem(props.item);
            props.setItem(temp);
            return;
          }

          if (e.shiftKey) setIsPicking(false);
          else setDraggedItem(props.item);

          props.setItem(null);
        }}
        onMouseUp={(e) => {
          if (props.setItem && !isPicking()) {
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
              src={`https://raw.githubusercontent.com/ink0rr/bedrock-items/main/dist/textures/${props.item?._id}.png`}
              alt={props.item?.readable}
              width="32px"
              height="32px"
            />
          </div>
        </span>
      </div>
    </Show>
  );
}
