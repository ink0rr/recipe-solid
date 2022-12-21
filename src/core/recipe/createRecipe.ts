import type { RecipeJson } from "../../types/RecipeJson";
import type { RecipeParams } from "../../types/RecipeParams";
import type { RecipeType } from "../../types/RecipeType";
import { recipeShaped } from "./shaped";
import { recipeShapeless } from "./shapeless";

export function createRecipe(
  type: RecipeType,
  params: RecipeParams,
): RecipeJson {
  switch (type) {
    case "shaped":
      return recipeShaped(params);
    case "shaped_exact":
      return recipeShaped(params, true);
    case "shapeless":
      return recipeShapeless(params);
    default:
      throw new Error(`Unknown recipe type: ${type}`);
  }
}
