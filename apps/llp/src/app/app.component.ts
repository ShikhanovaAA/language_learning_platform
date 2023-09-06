import { Component } from '@angular/core';
import { GeneralLoadingService } from '@llp/shared/services';

@Component({
  selector: 'frontend-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoading$ = this.generalLoadingService.isLoading$;

  constructor(private generalLoadingService: GeneralLoadingService) {}
}
