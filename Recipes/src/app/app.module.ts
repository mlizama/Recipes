import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoadProductsService } from './product.list/load.products.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product.list/product.list.component';
import { StarComponent } from './star/star.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    StarComponent,
    RecipesComponent,
    RecipeDetailComponent,
    AddRecipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'recipes', component: RecipesComponent },
      { path: 'recipe-detail/:id', component: RecipeDetailComponent},
      { path: 'addrecipe', component:AddRecipeComponent},
      { path: '', redirectTo: '/home', pathMatch: 'full'
  }
    ])
  ],
  providers: [LoadProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
