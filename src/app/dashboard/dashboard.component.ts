import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  activeProductsAllData: any;
  upcomingProductsAllData: any;
  activeProducts: any;
  upcomingProducts: any;

  activeListingToggle: boolean = false;
  upcomingListingToggle: boolean = false;

  searchProduct: string = "";

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getAllProducts().subscribe(res => {
      this.activeProductsAllData = res.active;
      this.upcomingProductsAllData = res.upcoming;

      this.expandActiveProducts();
      this.expandUpcomingProducts();
      // console.log(this.activeProducts);
      // console.log(this.upcomingProducts);
    })
  }

  expandActiveProducts() {
    if (window.screen.availWidth <= 425) {
      this.activeProducts = this.activeListingToggle ? this.activeProductsAllData : this.activeProductsAllData.slice(0, 4);
    }
    else if (window.screen.availWidth <= 768) {
      this.activeProducts = this.activeListingToggle ? this.activeProductsAllData : this.activeProductsAllData.slice(0, 6);
    }
    else {
      this.activeProducts = this.activeListingToggle ? this.activeProductsAllData : this.activeProductsAllData.slice(0, 8);
    }
    this.activeListingToggle = !this.activeListingToggle;
      
  }

  expandUpcomingProducts() {
    if (window.screen.availWidth <= 425) {
      this.upcomingProducts = this.upcomingListingToggle ? this.upcomingProductsAllData : this.upcomingProductsAllData.slice(0, 4);
    }
    else if (window.screen.availWidth <= 768) {
      this.upcomingProducts = this.upcomingListingToggle ? this.upcomingProductsAllData : this.upcomingProductsAllData.slice(0, 6);
    }
    else {
      this.upcomingProducts = this.upcomingListingToggle ? this.upcomingProductsAllData : this.upcomingProductsAllData.slice(0, 8);
    }
    this.upcomingListingToggle = !this.upcomingListingToggle;
  }

}
