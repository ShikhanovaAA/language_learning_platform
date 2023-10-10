import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthFacade } from '@llp/features/auth/state';
import { GeneralLoadingService } from '@llp/shared/services';
import { TokenStorageService } from '@llp/util/token-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'llp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  isLoading$: Observable<boolean> = this.generalLoadingService.isLoading$;

  constructor(
    private generalLoadingService: GeneralLoadingService,
    private cdr: ChangeDetectorRef,
    private authFacade: AuthFacade,
    private tokenStorageService: TokenStorageService,
  ) {}
  ngOnInit() {
    if (this.tokenStorageService.isTokenValid()) {
      this.authFacade.getUserByToken();
    }

    this.cdr.detectChanges();
  }
}
