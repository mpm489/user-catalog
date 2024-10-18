import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Response } from '../interface/response.interface';
import { UserService } from './user.service';
import { inject } from '@angular/core';

export const userResolver: ResolveFn<Response> = (route: ActivatedRouteSnapshot, state) => {
  const userService = inject(UserService); // Inject UserService

  return userService.getUser(route.paramMap.get('uuid')!);
};
