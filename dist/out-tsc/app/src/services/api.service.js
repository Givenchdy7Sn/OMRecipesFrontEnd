var ApiService_1;
import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ApiService = ApiService_1 = class ApiService {
    constructor(http) {
        this.http = http;
    }
    getRecipes() {
        console.log('prepare service call');
        return this.http.get(`${ApiService_1.baseUrl}/collection`);
    }
    getRecipeByID(recipeId) {
        return this.http.get(`${ApiService_1.baseUrl}/${recipeId}`);
    }
    createRecipe(data, ingredients) {
        return this.http.post(`${ApiService_1.baseUrl}`, {
            title: data.recipeTitle,
            difficultyLevel: data.difficultyLevel,
            peopleServed: data.peopleServed,
            mealType: data.mealType
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
};
ApiService.baseUrl = 'http://localhost:3000/api/om/recipe';
ApiService = ApiService_1 = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ApiService);
export { ApiService };
//# sourceMappingURL=api.service.js.map