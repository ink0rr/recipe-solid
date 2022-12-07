import { Show } from "solid-js";
import { draggedItem } from "../stores/draggedItem";
import { mousePosition } from "../stores/mousePosition";
import style from "./DraggedItem.module.css";

export default function DraggedItem() {
  return (
    <Show when={draggedItem()}>
      <div
        class={style.ignored}
        style={{
          position: "absolute",
          top: `${mousePosition().y - 24}px`,
          left: `${mousePosition().x - 24}px`,
          "z-index": 1,
        }}
      >
        <img
          class={style.img}
          src={`https://raw.githubusercontent.com/ink0rr/bedrock-items/main/dist/textures/${
            draggedItem()?._id
          }.png`}
          alt={draggedItem()?.readable}
          width="42px"
          height="42px"
        />
      </div>
    </Show>
  );
}
