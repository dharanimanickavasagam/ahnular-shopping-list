import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() activeTabEvent = new EventEmitter<string>();

  setActiveTab = (activeTab: string): void => {
    console.log('emitting active tab as', activeTab);
    this.activeTabEvent.emit(activeTab);
  };
}
