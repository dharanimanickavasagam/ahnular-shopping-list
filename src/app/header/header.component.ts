import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  activeTab: string = 'RECIPE';

  setActiveTab = (activeTab: string): void => {
    this.activeTab = activeTab;
    console.log('setting active tab as ', this.activeTab);
  };
}
