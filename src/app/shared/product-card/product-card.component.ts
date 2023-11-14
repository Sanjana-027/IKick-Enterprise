import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;
  countdownTime: string = "";

  toggleFab() {
    this.product.favourite = !this.product.favourite;
  }
  toggleBookmark() {
    this.product.bookmarked = !this.product.bookmarked;
  }

  ngOnInit() {
    var x = setInterval(() => {
      var countDownDate = new Date(this.product.deadline).getTime();
      var now = new Date().getTime();

      var distance = countDownDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.countdownTime = days + "d: " + hours + "h: " + minutes + "m: " + seconds + "s ";

      if (distance < 0) {
        clearInterval(x);
        this.countdownTime = "EXPIRED";
      }
    }, 1000);
  }
}
