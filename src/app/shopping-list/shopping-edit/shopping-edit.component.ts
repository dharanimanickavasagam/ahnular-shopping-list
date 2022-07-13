import {
  Component,
  EventEmitter,
  ViewChild,
  Output,
  ElementRef
} from '@angular/core';
import { Ingredient } from 'src/app/ingredients/ingredient.model';
import { ShoppingListComponent } from '../shopping-list.component';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent extends ShoppingListComponent {
  @ViewChild('ingredientName', { static: false }) ingredientName:
    | ElementRef
    | undefined;
  @ViewChild('ingredientCount', { static: false }) ingredientCount:
    | ElementRef
    | undefined;
  @Output() newIngredientEvent = new EventEmitter<Ingredient>();

  constructor() {
    super();
  }

  addIngredient = (): void => {
    if (this.ingredientName != undefined && this.ingredientCount != undefined) {
      this.newIngredientEvent.emit({
        name: this.ingredientName.nativeElement.value,
        count: this.ingredientCount.nativeElement.value
      });
    }
  };
}
