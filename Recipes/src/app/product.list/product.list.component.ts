import { Component, OnInit } from '@angular/core';
import { LoadProductsService } from './load.products.service';
import { IRecipe } from './recipe';

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

  recipes: IRecipe[];
  filteredRecipes: IRecipe[];

  constructor(private _loadProductsService: LoadProductsService) {
  }

  ngOnInit() {
      this.recipes = this._loadProductsService.getProducts('../../assets/recipes.json');
      this.filteredRecipes = this.recipes; //Used for setting data members
  }

  onKeyup(e) {
    console.log(e);
  }

  filterRecipes(filter:string): IRecipe[] {
    return this.recipes.filter((m: IRecipe) =>
      m.title.indexOf(filter) !== -1
    );
  }

  onRatingClicked(msg) {
      console.log(msg);
  }

}
