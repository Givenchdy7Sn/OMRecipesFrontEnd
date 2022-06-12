import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-recipe-dashboard',
  templateUrl: './recipe-dashboard.component.html',
  styleUrls: ['./recipe-dashboard.component.scss']
})
export class RecipeDashboardComponent implements OnInit {

  showNewForm: boolean = false;
  showRecipeList: boolean = true;
  showDetailedRecipe: boolean = false;
  recipeCollection: any = [];
  viewFullRecipe: boolean = false;
  selectedDetailedRecipe: any = null;

  constructor(public api: ApiService) { }

  ngOnInit(): void {

    if (this.showRecipeList) {
      this.fetchRecipeCollection();
    }
  }

  fetchRecipeCollection() {

    this.api.getRecipes().subscribe((response: any) => {
      if (response.data) {
        this.recipeCollection = response.data;
      }
    });

  }

  selectRecipe(recipe: any) {

    this.api.getRecipeByID(recipe.id).subscribe((response: any) => {

      console.log('whole item - now show full item using template', response);
      if (response.data) {
        this.viewFullRecipe = true;
        this.selectedDetailedRecipe = response.data;
      }
  
     // this.showRecipeList = false;
      //this.showDetailedRecipe = true;

    });
    
  }

  showAddRecipe() {

   this.showNewForm = true;
   this.showDetailedRecipe = false;
   this.showRecipeList = false;

  }

}
