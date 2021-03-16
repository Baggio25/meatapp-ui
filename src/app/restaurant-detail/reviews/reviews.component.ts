import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'app/restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>;

  constructor(private restaurantService: RestaurantService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restaurantService
        .reviewsOfRestaurant(this.route.parent.snapshot.params['id']);
  }

  public pissed(review): Boolean {
    return review.rating < 3;
  }

  public soso(review): Boolean  {
    return review.rating >= 3 && review.rating < 4;
  }

  public loved(review): Boolean {
    return review.rating >= 4;
  }
}
