export interface Recipe {
  recipe: string;
  description: string;
  ingredient: Ingredient[];
}

export interface DataObject {
  [key: string]: Recipe;
}
export interface Ingredient {
  name: string,
  values: {
    text: string,
    className: string
  }[]
}