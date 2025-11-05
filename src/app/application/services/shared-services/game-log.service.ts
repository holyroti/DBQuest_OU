import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameLog } from '../models/game-log.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

/**
 * Handles creation, retrieval, and querying of game log data.
 * Manages player progress, achievements, and question completion.
 */
export class GameLogService {
  constructor(private http: HttpClient) { }

  private baseUrl = environment.apiUrl + "/gameLogs";

  //Creates and stores a new game log entry in the backend.
  createGameLog(log: GameLog): Observable<any> {
    return this.http.post<any>(this.baseUrl, log);
  }

  // Retrieve achievements for a given user (badge IDs)
  getAchievements(userId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/achievements/${userId}`);
  }

  //Retrieves the first incomplete question for a given player.
  getFirstIncomplete(userId: string): Observable<{ questionId: number, stage: number }> {
    return this.http.get<{ questionId: number, stage: number }>(`${this.baseUrl}/incomplete/${userId}`);
  }
}
