import { Component, OnInit } from '@angular/core';
import { ApplicationSettings } from '../../config/ApplicationSettings';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-new-recipe-form',
  templateUrl: './new-recipe-form.component.html',
  styleUrls: ['./new-recipe-form.component.scss']
})
export class NewRecipeFormComponent implements OnInit {

  levels: string[] = [];
  mealTypes: string[] = [];
  measurementUnits: string[] = [];

  ingredientName: string = '';
  ingredientUnit: string = '';

  recipe = {
    recipeTitle: '',
    mealType: '',
    difficultyLevel: '',
    peopleServed: '',
    instructions: '',
  };

  ingredients: any = [];

  constructor(public api: ApiService) { }

  ngOnInit(): void {

    this.levels = ApplicationSettings.RecipeDifficultyLevels;
    this.mealTypes = ApplicationSettings.MealTypes;
    this.measurementUnits = ApplicationSettings.measurementUnits;

  }

  saveIngredient() {

    this.ingredients.push({
      title: this.ingredientName,
      unit: this.ingredientUnit
    })
  }

  saveRecipe() {

    console.log('data here', this.recipe);

    this.api.createRecipe(this.recipe, this.ingredients).subscribe((response) => {

      console.log('api response', response);
    });

  }

}
