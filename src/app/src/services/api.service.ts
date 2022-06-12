import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  static baseUrl: string = 'http://13.246.6.227:3000/api/om/recipe';

  constructor(private http: HttpClient) { }

  getRecipes() {
    return this.http.get(`${ApiService.baseUrl}/collection`);
  }

  getRecipeByID(recipeId: any) {

    return this.http.get(`${ApiService.baseUrl}/${recipeId}`);
  }

  createRecipe(data: any) {

    return this.http.post(`${ApiService.baseUrl}`, {
      title: data.recipeTitle,
      difficultyLevel: data.difficultyLevel,
      peopleServed: data.peopleServed,
      mealType: data.mealType,
      steps: data.steps,
      ingredients: data.ingredients
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

  }

}
