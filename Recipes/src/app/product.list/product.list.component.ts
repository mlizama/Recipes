import { Component, OnInit } from '@angular/core';
import { LoadProductsService } from './load.products.service';
import { IRecipe } from './recipe';
import { Recipe } from '../Recipe'

@Component({
  selector: 'product-list',
  templateUrl: './product.list.component.html',
})
export class ProductListComponent implements OnInit {
  private _listFilter: string;

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(v: string) {
    this._listFilter = v;
    this.filteredRecipes = this.filterRecipes(this.listFilter);
  }

  recipes: Recipe[];
  response: Recipe[];
  filteredRecipes: Recipe[];

  constructor(private _loadProductsService: LoadProductsService) {
  }

  ngOnInit() {
      this.recipes = this._loadProductsService.getProducts('../../assets/recipes.json');
      let xhr = new XMLHttpRequest();
      let url = "http://localhost:3000/messages";
      xhr.open("GET", url,true);
      xhr.send();
  
      xhr.addEventListener("load", () => {
        this.response = JSON.parse(xhr.responseText);
        this.recipes = this.recipes.concat(this.response);
        this.filteredRecipes = this.recipes;
        console.log(this.recipes);
      });
  
      this.filteredRecipes = this.recipes; //Used for setting data members
  }

  onKeyup(e) {
    console.log(e);
  }

  filterRecipes(filter:string): Recipe[] {
    return this.recipes.filter((m: Recipe) =>
      m.title.indexOf(filter) !== -1
    );
  }

  onRatingClicked(msg) {
      console.log(msg);
  }

}
