import { inject } from '@angular/core';
import { Route, UrlSegment } from '@angular/router';
import { AuthFacade } from '@llp/features/auth/state';
import { map, take } from 'rxjs';

export const UserRoleGuard = (route: Route, segments: UrlSegment[]) => {
  const authFacade = inject(AuthFacade);

  if (route.data && route.data['role']) {
    const allowedRole = route.data['role'];

    return authFacade.user$.pipe(
      take(1),
      map((user) => {
        return user ? user.roles.some(role => role.value === allowedRole) : false
      })
    );
  }

  return false;
}
