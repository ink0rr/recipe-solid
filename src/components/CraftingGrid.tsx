import style from "./CraftingGrid.module.css";
import ItemSlot from "./ItemSlot";

export default function CraftingGrid() {
  return (
    <div class={style.div}>
      <ItemSlot item={null} crafting />
      <ItemSlot item={null} crafting />
      <ItemSlot item={null} crafting />
      <ItemSlot item={null} crafting />
      <ItemSlot item={null} crafting />
      <ItemSlot item={null} crafting />
      <ItemSlot item={null} crafting />
      <ItemSlot item={null} crafting />
      <ItemSlot item={null} crafting />
    </div>
  );
}
