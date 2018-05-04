import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;
  imageURL = '../../assets/starRating.png';

  @Output() ratingClicked: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnChanges() {
      //Convert star rating to px width
      this.starWidth = this.rating * 106/5;
  }
  onClick(): void {
      this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }
}
