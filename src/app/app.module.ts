import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { ProductCardComponent } from './shared/product-card/product-card.component';
import { SidePanelComponent } from './shared/side-panel/side-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidenavComponent,
    ProductCardComponent,
    SidePanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
