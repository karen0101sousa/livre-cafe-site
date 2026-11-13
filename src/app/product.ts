export type ProductCategory = 'Cafés' | 'Bebidas' | 'Doces';

export interface Product {
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  image: string;
  ingredients: string[];
  lactoseFree: boolean;
  allergenInfo: string;
}
