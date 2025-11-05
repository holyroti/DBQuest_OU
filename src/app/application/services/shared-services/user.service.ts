import { ApiHttpClient } from '../core/api-http-client.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Handles user session management, profile session persistence, and updates.
 * Uses sessionStorage to store and retrieve the currently logged-in player.
 */

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: ApiHttpClient) { }
  /* Stores the logged-in user in session storage*/
  setLoggedInUser(user: any): void {
    try {
      sessionStorage.setItem('loggedInUser', JSON.stringify(user));
    } catch (e) {
    }
  }

  /* Retrieves the logged-in user from session storage. */
  getLoggedInUser(): any {
    try {
      const userData = sessionStorage.getItem('loggedInUser');
      return userData ? JSON.parse(userData) : null;
    } catch (e) {
      return null;
    }
  }

   /* Retrieves the currently logged-in user's ID.*/
  getLoggedInUserId(): string | null {
    const user = this.getLoggedInUser();
    return user && user.PLAYERID ? user.PLAYERID : null;
  }

  /* Checks whether a user is currently logged in. */
  isLoggedIn(): boolean {
    const user = this.getLoggedInUser();
    return !!(user && user.USERNAME);
  }

  /*  Updates the user's profile picture (icon) both in session and backend */
  updateProfilePicture(iconUrl: string): Observable<any> | undefined {
    const user = this.getLoggedInUser();
    if (!user || !user.PLAYERID) return;

    user.ICON = iconUrl;
    sessionStorage.setItem('loggedInUser', JSON.stringify(user));

    return this.http.post(`/update-icon`, {
      playerId: user.PLAYERID,
      icon: iconUrl,
    });
  }
}
