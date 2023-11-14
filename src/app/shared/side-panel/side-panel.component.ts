import { Component } from '@angular/core';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent {
  categoriesToggle: boolean = false;
  celebritiesToggle: boolean = false;

  expandCategories() {
    this.categoriesToggle = !this.categoriesToggle;
  }

  expandCelebrities() {
    this.celebritiesToggle = !this.celebritiesToggle;
  }
}
