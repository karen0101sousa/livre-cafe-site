import { Component } from '@angular/core';
import type { Product, ProductCategory } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  categories: (ProductCategory | 'Todas')[] = ['Todas', 'Cafés', 'Bebidas', 'Doces'];

  selectedCategory: ProductCategory | 'Todas' = 'Todas';

  get filteredProducts(): Product[] {
    if (this.selectedCategory === 'Todas') {
      return this.products;
    }

    return this.products.filter((product) => product.category === this.selectedCategory);
  }

  products: Product[] = [
    {
      name: 'Café especial',
      description: 'Café preparado com grãos selecionados.',
      price: 9.0,
      category: 'Cafés',
      image: 'images/cafe-especial.jpg',
      ingredients: ['Café especial', 'Água'],
      lactoseFree: true,
      allergenInfo: 'Verificar informações sobre contato cruzado.',
    },
    {
      name: 'Latte gelado',
      description: 'Bebida cremosa com leite sem lactose.',
      price: 14.0,
      category: 'Bebidas',
      image: 'images/latte-gelado.jpg',
      ingredients: ['Café espresso', 'Leite sem Lactose', 'Gelo'],
      lactoseFree: true,
      allergenInfo: 'Verificar informações sobre contato cruzado.',
    },
    {
      name: 'Bolo de chocolate',
      description: 'Bolo com receita especial sem lactose.',
      price: 12.0,
      category: 'Doces',
      image: 'images/bolo-chocolate.jpg',
      ingredients: ['Ingredientes da receita a confirmar'],
      lactoseFree: true,
      allergenInfo: 'Alérgenos precisam ser identificados conforme a receita.',
    },
    {
      name: 'Cappuccino',
      description: 'Café cremoso com canela.',
      price: 13.0,
      category: 'Cafés',
      image: 'images/cappuccino.jpg',
      ingredients: ['Café', 'Leite sem Lactose', 'Canela'],
      lactoseFree: true,
      allergenInfo: 'Verificar informações sobre contato cruzado.',
    },
  ];
}
