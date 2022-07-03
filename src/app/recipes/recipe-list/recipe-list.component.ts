import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("dharani", "just some name", "hey you"),
    new Recipe("dharani1", "just some name1", "hey you1")
  ];

  constructor() {}

  ngOnInit(): void {}
}
