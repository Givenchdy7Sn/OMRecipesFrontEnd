import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  static baseUrl: string = 'http://localhost:3000/api/om/recipe';

  constructor(private http: HttpClient) { }

  getRecipes() {

    console.log('prepare service call');
    return this.http.get(`${ApiService.baseUrl}/collection`);
  }

  getRecipeByID(recipeId: any) {

    return this.http.get(`${ApiService.baseUrl}/${recipeId}`);
  }

  createRecipe(data: any, ingredients: any) {

    return this.http.post(`${ApiService.baseUrl}`, {
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

}
