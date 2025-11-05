import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UserService } from './user.service';
import { ApiHttpClient } from '../core/api-http-client.service';

/**
 * Interface representing a player entity to be used in the frontend.
 */
export interface Player {
  PLAYERID: number | string;
  USERNAME: string;
  DISPLAYNAME: string;
  ICON: string;
}

/**
 * Handles all authentication-related actions such as login and registration.
 * Communicates with the backend via the ApiHttpClient service.
 */
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private api: ApiHttpClient, private userService: UserService) { }

  /**
  * Normalizes backend user object formats (PlayerEntity) into a Player model object.
  * */
  private normalizeUser(u: any): Player {
    if (!u) throw new Error('No user in response');
    return {
      PLAYERID: u.PLAYERID ?? u.playerId ?? u.id,
      USERNAME: u.USERNAME ?? u.username,
      DISPLAYNAME: u.DISPLAYNAME ?? u.displayName ?? u.name,
      ICON: u.ICON ?? u.icon ?? 'assets/avatars/icon3.png',
    };
  }

  /**
   * Authenticates a user by sending credentials to the backend.
   * On success it, stores the user in session via UserService.
   * */
  authenticate(username: string, password: string): Observable<Player> {
    return this.api.post('/authenticate', { username, password }).pipe(
      map((res: any) => {
        if (!res?.success) throw new Error(res?.message || 'Login failed');
        const user = this.normalizeUser(res.user ?? res.data);
        this.userService.setLoggedInUser(user);
        return user;
      })
    );
  }

  /**
   * Registers a new user account by the fields provided in the register form
   * */
  register(user: any): Observable<any> {
    return this.api.post('/register', user);
  }
}
