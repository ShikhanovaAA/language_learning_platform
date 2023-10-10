import { Component, Input } from '@angular/core';
import { AuthFacade } from '@llp/features/auth/state';
import { MenuItem } from '@llp/models';
import { TokenStorageService } from '@llp/util/token-service';

@Component({
  selector: 'llp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() menuItems!: MenuItem[];

  isLoggidIn = this.tokenStorageService.isTokenValid();

  constructor(
    private authFacade: AuthFacade,
    private tokenStorageService: TokenStorageService,
  ) {}

  logout() {
    this.authFacade.logout();
  }

  trackByFn(index: number, menuItem: MenuItem) {
    return menuItem.route;
  }
}
