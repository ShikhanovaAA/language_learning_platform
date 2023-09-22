import { Component } from '@angular/core';
import { MAIN_MENU } from '@llp/model';

@Component({
  selector: 'llp-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  MAIN_MENU = MAIN_MENU;
}
