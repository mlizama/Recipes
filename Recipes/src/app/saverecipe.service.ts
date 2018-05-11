import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';

@Injectable()
export class SaverecipeService {


  constructor(private _http: Http){}

  saveRecipe(url,recipe){
    console.log("post recipe to: " + url);
    console.log(recipe);
    let headers = new Headers;
    headers.append('Content-Type','application/json');
    return this._http.post(url,recipe,{headers:headers});

  }

}
