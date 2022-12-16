/* @refresh reload */
import { render } from "solid-js/web";
import CraftingGrid from "./components/CraftingGrid";
import DraggedItem from "./components/DraggedItem";
import Inventory from "./components/Inventory";
import { setMousePosition } from "./stores/mousePosition";
import { vanillaItems } from "./stores/vanillaItems";

import "./index.css";

function App() {
  window.addEventListener("mousemove", (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  });

  return (
    <div>
      <h1>Recipe</h1>
      <CraftingGrid />
      <br />
      <Inventory items={vanillaItems()} />
      <DraggedItem />
    </div>
  );
}

render(() => <App />, document.getElementById("root") as HTMLElement);
