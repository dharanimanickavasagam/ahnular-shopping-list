import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root-main',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {
  activeComponent: string = 'RECIPES';
  constructor() {}

  ngOnInit(): void {}

  showComponent = (data: string): void => {
    this.activeComponent = data;
  };
}
