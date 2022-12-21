import type { RecipeType } from "../types/RecipeType";

export function createRecipeUrl(
  type: RecipeType,
  input: string | null[],
  output: string,
): string {
  return [type, ...input, output].join(";");
}

export function parseRecipeUrl(
  url: string,
): [RecipeType, (string | null)[], string | null] {
  const [type, input, output] = url.split(";");
  if (type !== "shaped" && type !== "shaped_exact") {
    throw new Error(`Unknown recipe type: ${type}`);
  }

  output;
  return [
    type,
    input.split(","),
    output,
  ];
}
