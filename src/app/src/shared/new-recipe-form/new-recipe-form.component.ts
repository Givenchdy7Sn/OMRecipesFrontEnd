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
  ingredientAmount: string = '';
  message: string = '';
  error: boolean = false;

  recipe = {
    recipeTitle: '',
    mealType: '',
    difficultyLevel: '',
    peopleServed: '',
    instructions: '',
    steps: [],
    ingredients: []
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
      unit: this.ingredientUnit,
      amount: this.ingredientAmount
    });

    this.ingredientName = '';
    this.ingredientUnit = '';
    this.ingredientAmount = '';
  }

  saveRecipe() {

    var stepsTemp = this.recipe.instructions.split('\n');
    var steps: any = [];

    for (let i = 0; i < stepsTemp.length; i++) {
      var step = {
        description: stepsTemp[i],
        stepNumber: i + 1,
      }
      steps.push(step);
    }

    this.recipe.steps = steps;
    this.recipe.ingredients = this.ingredients;

    this.api.createRecipe(this.recipe).subscribe((response: any) => {
        this.message = response.message;
        this.error = false;
    }, (err) => {
      this.error = true;
      this.message = err.error.message;
    });

  }

}
