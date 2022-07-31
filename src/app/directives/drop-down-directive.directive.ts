import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[dropDownDirective]'
})
export class DropDownDirectiveDirective {
  @HostBinding('class.open') isOpen: boolean = false;
  @HostListener('click') setDropDownToggleStatus() {
    this.isOpen = !this.isOpen;
  }
}
