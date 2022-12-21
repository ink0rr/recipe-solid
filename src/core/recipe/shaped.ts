import { findKey } from "lodash-es";
import type { RecipeJson, RecipeJsonItem } from "../../types/RecipeJson";
import type { RecipeParams } from "../../types/RecipeParams";
import { getItem } from "../item";

export function recipeShaped(params: RecipeParams, exact = false): RecipeJson {
  const { input, output } = params;

  const patternKeys = [..."#ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  const key: Record<string, RecipeJsonItem> = {};
  const grid = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];

  for (const i in input) {
    const item = getItem(input[i]);
    if (!item) continue;

    let k = findKey(
      key,
      (v) => v.item === item.item && v.data === item.data,
    );
    if (!k) {
      k = patternKeys.shift() as string;
      key[k] = item;
    }
    const idx = parseInt(i);
    grid[Math.floor(idx / 3)][idx % 3] = k;
  }

  let pattern = grid.map((s) => s.join(""));

  // Remove extra spaces
  if (!exact) {
    const min: number[] = [];
    const max: number[] = [];
    for (const s of pattern) {
      min.push(3 - s.trimStart().length);
      max.push(3 - s.trimEnd().length);
    }
    const start = Math.min(...min);
    const end = 3 - Math.min(...max);

    const isNotEmpty = (s: string) => s.trim().length > 0;
    const len = pattern.filter(isNotEmpty).length;
    pattern = pattern
      .map((s) => s.slice(start, end))
      .filter((s, i) => isNotEmpty(s) || (i === 1 && len === 2));
  }
  const result = getItem(output);
  return {
    format_version: `1.12.0`,
    "minecraft:recipe_shaped": {
      description: {
        identifier: `result`,
      },
      tags: [],
      pattern,
      key,
      result,
    },
  };
}
