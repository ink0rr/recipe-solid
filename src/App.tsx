/* @refresh reload */
import { render } from "solid-js/web";
import CraftingGrid from "./components/CraftingGrid";
import DraggedItem from "./components/DraggedItem";
import Inventory from "./components/Inventory";
import { customItems } from "./stores/customItems";
import { setMousePosition } from "./stores/mousePosition";
import { vanillaItems } from "./stores/vanillaItems";

import "./index.css";
import "./global.css";

function App() {
  window.addEventListener("mousemove", (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  });

  return (
    <div class="main">
      <Inventory
        items={[
          ...Object.keys(customItems()),
          ...Object.keys(vanillaItems()),
        ]}
      />
      <CraftingGrid />
      <DraggedItem />
    </div>
  );
}

render(() => <App />, document.getElementById("root") as HTMLElement);
