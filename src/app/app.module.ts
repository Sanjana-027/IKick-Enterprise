import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { ProductCardComponent } from './shared/product-card/product-card.component';
import { SidePanelComponent } from './shared/side-panel/side-panel.component';
import { MobileNavigationComponent } from './shared/mobile-navigation/mobile-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidenavComponent,
    ProductCardComponent,
    SidePanelComponent,
    MobileNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
