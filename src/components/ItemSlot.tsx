import { Show } from "solid-js";
import { getItemTexture } from "../core/item";
import { draggedItem, setDraggedItem } from "../stores/draggedItem";
import { isPicking, setIsPicking } from "../stores/isPicking";

interface ItemSlotProps {
  item: string | null;
  setItem?: (item: string | null) => void;
}

/**
 * If `setItem` is provided, the item slot will be a crafting grid slot.
 */
export default function ItemSlot(props: ItemSlotProps) {
  const EmptySlot = (
    <div
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
      <span class="mc-itemslot item">
      </span>
    </div>
  );

  return (
    <Show when={props.item} fallback={EmptySlot}>
      <div
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
        <span>
          <div class="mc-itemslot item">
            <img
              class="pointer-events-none"
              style={{ "image-rendering": "pixelated" }}
              src={getItemTexture(props.item)}
              alt={props.item ?? "unknown"}
              width="32px"
              height="32px"
            />
          </div>
        </span>
      </div>
    </Show>
  );
}
