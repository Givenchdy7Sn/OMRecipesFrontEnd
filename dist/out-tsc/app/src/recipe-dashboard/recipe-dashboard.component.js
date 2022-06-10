import { __decorate } from "tslib";
import { Component } from '@angular/core';
let RecipeDashboardComponent = class RecipeDashboardComponent {
    constructor(api) {
        this.api = api;
        this.showNewForm = false;
        this.showRecipeList = true;
        this.showDetailedRecipe = false;
        this.recipeCollection = [];
    }
    ngOnInit() {
        if (this.showRecipeList) {
            this.fetchRecipeCollection();
        }
    }
    fetchRecipeCollection() {
        this.api.getRecipes().subscribe((response) => {
            this.recipeCollection = response.data;
        });
    }
    selectRecipe(recipe) {
        this.api.getRecipeByID(recipe.id).subscribe((response) => {
            console.log('whole item - now show full item using template', response);
            // this.showRecipeList = false;
            //this.showDetailedRecipe = true;
        });
    }
    showAddRecipe() {
        this.showNewForm = true;
        this.showDetailedRecipe = false;
        this.showRecipeList = false;
    }
};
RecipeDashboardComponent = __decorate([
    Component({
        selector: 'app-recipe-dashboard',
        templateUrl: './recipe-dashboard.component.html',
        styleUrls: ['./recipe-dashboard.component.scss']
    })
], RecipeDashboardComponent);
export { RecipeDashboardComponent };
//# sourceMappingURL=recipe-dashboard.component.js.map