import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { ApplicationSettings } from '../../config/ApplicationSettings';
let NewRecipeFormComponent = class NewRecipeFormComponent {
    constructor(api) {
        this.api = api;
        this.levels = [];
        this.mealTypes = [];
        this.measurementUnits = [];
        this.ingredientName = '';
        this.ingredientUnit = '';
        this.recipe = {
            recipeTitle: '',
            mealType: '',
            difficultyLevel: '',
            peopleServed: '',
            instructions: '',
        };
        this.ingredients = [];
    }
    ngOnInit() {
        this.levels = ApplicationSettings.RecipeDifficultyLevels;
        this.mealTypes = ApplicationSettings.MealTypes;
        this.measurementUnits = ApplicationSettings.measurementUnits;
    }
    saveIngredient() {
        this.ingredients.push({
            title: this.ingredientName,
            unit: this.ingredientUnit
        });
    }
    saveRecipe() {
        console.log('data here', this.recipe);
        this.api.createRecipe(this.recipe, this.ingredients).subscribe((response) => {
            console.log('api response', response);
        });
    }
};
NewRecipeFormComponent = __decorate([
    Component({
        selector: 'app-new-recipe-form',
        templateUrl: './new-recipe-form.component.html',
        styleUrls: ['./new-recipe-form.component.scss']
    })
], NewRecipeFormComponent);
export { NewRecipeFormComponent };
//# sourceMappingURL=new-recipe-form.component.js.map