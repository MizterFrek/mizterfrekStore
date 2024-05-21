import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Rating } from '../../../core/contracts/models/rating.interface';

enum STAR { FULL = '#stars-full-star', HALF = '#stars-half-star', EMPTY = '#stars-empty-star' }

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss',
})
export class StarRatingComponent implements OnInit {
  @Input({required: true}) rating!: Rating;

  public stars: Array<STAR> = [STAR.EMPTY,STAR.EMPTY,STAR.EMPTY,STAR.EMPTY,STAR.EMPTY];

  ngOnInit(): void {

    const rate = this.rating.rate.toString().split(".");
    let half_star = (parseInt(rate[1]) || 0) >= 5;
    let start_count = parseInt(rate[0]);

    this.stars = this.stars.map((item, index) => {
      if (start_count != 0) {
        start_count--;
        return STAR.FULL;
      } else if (half_star) {
        half_star = false;
        return STAR.HALF;
      }
      return STAR.EMPTY;
    });
  }
}
