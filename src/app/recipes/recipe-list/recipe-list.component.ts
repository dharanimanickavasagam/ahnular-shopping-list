import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'dharani',
      'just some name',
      'https://media.istockphoto.com/photos/vintage-cookbook-with-spices-and-herbs-on-rustic-wooden-background-picture-id1161153224?k=20&m=1161153224&s=612x612&w=0&h=dUAhyeGxsrNps3F10e28lOMadzJ8G50dJvwhdcoVJ4E='
    ),
    new Recipe('dharani1', 'just some name1', 'hey you1')
  ];

  isAddNewRecipeButtonClicked: boolean = false;
  recipeName: string = '';
  recipeDescription: string = '';
  recipeImage: string = '';

  constructor() {}

  showReceipeInputFields = (): void => {
    console.log('clicked');
    this.isAddNewRecipeButtonClicked = !this.isAddNewRecipeButtonClicked;
  };

  clearInputFields = (): void => {
    this.recipeName = '';
    this.recipeDescription = '';
    this.recipeImage = '';
  };

  addRecipeItem = () => {
    const recipe: Recipe = {
      name: this.recipeName,
      description: this.recipeDescription,
      imagePath: this.recipeImage
    };
    this.recipes.push(recipe);
    this.clearInputFields();
    this.showReceipeInputFields();
    console.log(this.recipes);
  };

  ngOnInit(): void {}
}
