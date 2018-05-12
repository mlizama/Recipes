import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http, Headers} from '@angular/http';
import { Observable } from 'rxjs';
import { Recipe } from './Recipe'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'


@Injectable()
export class GetrecipesService {

  recipe = {
    "type": String,
    "title": String,
    "servingSize": Number,
    "readyTime": Number,
    "difficulyRating": Number,
    "starRating": Number,
    "imageURL": String,
    "ingredients": String,
    "directions": String
  }

  constructor(  private http: HttpClient ) { }

  getRecipes(): Observable<Recipe[]>{

    return this.http.get<Recipe[]>('http://localhost:3000/messages')
  
  }

}
