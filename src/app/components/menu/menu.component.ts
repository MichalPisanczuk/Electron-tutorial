import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  toggle: boolean = false;

  onToggle() {
    this.toggle = !this.toggle;
    console.log(this.toggle);
    
  }
}
