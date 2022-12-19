/* @refresh reload */
import { render } from "solid-js/web";
import CraftingGrid from "./components/CraftingGrid";
import DraggedItem from "./components/DraggedItem";
import Inventory from "./components/Inventory";
import { customItems } from "./stores/customItems";
import { setMousePosition } from "./stores/mousePosition";
import { vanillaItems } from "./stores/vanillaItems";

import "./index.css";

function App() {
  window.addEventListener("mousemove", (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  });

  return (
    <div class="container m-auto pt-5 flex flex-row flex-wrap-reverse justify-center gap-6">
      <div>
        <Inventory
          items={[
            ...Object.keys(customItems()),
            ...Object.keys(vanillaItems()),
          ]}
        />
      </div>
      <CraftingGrid />
      <DraggedItem />
    </div>
  );
}

render(() => <App />, document.getElementById("root") as HTMLElement);
