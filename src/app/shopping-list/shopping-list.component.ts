import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredients/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    { name: 'Apples', count: 50 },
    { name: 'Roma Tomatoes', count: 10 },
    { name: 'Bell Peppers', count: 5 }
  ];

  constructor() {}

  ngOnInit(): void {}

  addNewIngredient = (data: any): void => {
    console.log('received', data);
    this.ingredients.push({ name: data.name, count: data.count });
  };

  callDummy = () => {
    console.log('reached');
  };
}
