import { Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class GeneralLoadingService {
  private isLoading$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoading$(): BehaviorSubject<boolean> {
    return this.isLoading$$;
  }

  setIsLoadingFalse(): void {
    this.isLoading$.next(false);
  }

  setIsLoadingTrue(): void {
    this.isLoading$.next(true);
  }
}
