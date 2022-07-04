import { Component, OnInit } from '@angular/core';
import { ShoppingListComponent } from '../shopping-list.component';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent extends ShoppingListComponent {
  constructor() {
    super();
  }

  ingredientName: string = '';
  ingredientCount: number = 0;

  addIngredient = () => {
    console.log('clicked', this.ingredients, {
      name: this.ingredientName,
      count: this.ingredientCount
    });

    this.ingredients.push({
      name: this.ingredientName,
      count: this.ingredientCount
    });
    console.log(this.ingredients);
  };
}
