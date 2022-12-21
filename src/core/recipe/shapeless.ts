import type { RecipeJson, RecipeJsonItem } from "../../types/RecipeJson";
import type { RecipeParams } from "../../types/RecipeParams";
import { getItem } from "../item";

export function recipeShapeless(params: RecipeParams): RecipeJson {
  const { input, output } = params;

  const ingredients: (RecipeJsonItem | undefined)[] = [];

  for (const item of input) {
    if (!item) continue;
    ingredients.push(getItem(item));
  }

  const result = getItem(output);
  return {
    format_version: "1.12.0",
    "minecraft:recipe_shapeless": {
      description: {
        identifier: "result",
      },
      tags: [],
      ingredients,
      result,
    },
  };
}
