export interface RecipeJson {
  format_version: "1.12.0";
  "minecraft:recipe_shaped"?: {
    description: {
      identifier: string;
    };
    tags: string[];
    result?: RecipeJsonItem;
    pattern: string[];
    key: Record<string, RecipeJsonItem>;
  };
  "minecraft:recipe_shapeless": {
    description: {
      identifier: string;
    };
    tags: string[];
    ingredients: (RecipeJsonItem | undefined)[];
    result?: RecipeJsonItem;
  };
}

export interface RecipeJsonItem {
  item: string;
  count: number;
  data?: number;
}
