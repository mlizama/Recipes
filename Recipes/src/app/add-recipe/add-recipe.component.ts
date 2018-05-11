import { Component, OnInit } from '@angular/core';
import { SaverecipeService } from '../saverecipe.service';


@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  type
  title
  servingSize:number
  readyTime:number
  difficulyRating:number
  starRating:number
  imageURL
  ingredients
  directions

  constructor(    
    private saveRecipeService: SaverecipeService
  ) { }

  ngOnInit() {
  }

  clearForm(){
    this.type = ''
    this.title = ''
    this.servingSize = null
    this.readyTime = null
    this.difficulyRating = null
    this.starRating = null
    this.imageURL = ''
    this.ingredients = ''
    this.directions = ''
  }
  onAddRecipe(){
    let url = 'http://localhost:3000/messages'
    let recipe = {
      "type": this.type,
      "title": this.title,
      "servingSize": this.servingSize,
      "readyTime": this.readyTime,
      "difficulyRating": this.difficulyRating,
      "starRating": this.starRating,
      "imageURL": this.imageURL,
      "ingredients": this.ingredients,
      "directions": this.directions
    }
    console.log(recipe)
    this.saveRecipeService.saveRecipe(url, JSON.stringify(recipe)).subscribe();
    this.clearForm()
  }
}
