import { inject } from '@angular/core';
import { Route } from '@angular/router';
import { AuthFacade } from '@llp/features/auth/state';
import { map, take } from 'rxjs';

export const UserRoleGuard = (route: Route) => {
  const authFacade = inject(AuthFacade);

  if (route.data && route.data['role']) {
    const allowedRole = route.data['role'];

    return authFacade.user$.pipe(
      take(1),
      map(user => user ? user.roles.some(role => role.value === allowedRole) : false),
    );
  }

  return false;
}
