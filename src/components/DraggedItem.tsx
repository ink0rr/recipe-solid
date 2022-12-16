import { Show } from "solid-js";
import { draggedItem } from "../stores/draggedItem";
import { mousePosition } from "../stores/mousePosition";

export default function DraggedItem() {
  return (
    <Show when={draggedItem()}>
      <div
        class="pointer-events-none select-none"
        style={{
          position: "absolute",
          top: `${mousePosition().y - 24}px`,
          left: `${mousePosition().x - 24}px`,
          "z-index": 1,
        }}
      >
        <img
          class="w-11 h-11"
          style={{ "image-rendering": "pixelated" }}
          src={`https://raw.githubusercontent.com/ink0rr/bedrock-items/main/dist/textures/${draggedItem()?._id}.png`}
          alt={draggedItem()?.readable}
          width="42px"
          height="42px"
        />
      </div>
    </Show>
  );
}
